import { createContext, useContext, useState, useEffect } from "react";
import { backendUrl } from "../assets/FrontendUtils";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(true);
  const [jwtToken, setjwtToken] = useState(localStorage.getItem("jwtToken"));
  const [userLoginedData, setuserLoginedData] = useState("");
  const [serviceData, setserviceData] = useState([]);
  const AuthorisationToken = `Bearer ${jwtToken}`;

  let storeTokenInLS = (jwtGivenToken) => {
    console.log("Token stored in local storage:", jwtGivenToken);
    setjwtToken(jwtGivenToken);
    return localStorage.setItem("jwtToken", jwtGivenToken);
  };

  let logoutUserFnc = () => {
    setjwtToken("");
    setuserLoginedData("");
    return localStorage.removeItem("jwtToken");
  };

  let isLoggedIn = !!jwtToken;

  const userAuthentication = async () => {
    try {
      let url = `${backendUrl}/api/auth/user`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      console.log("Authorization Header:", `Bearer ${jwtToken}`);

      if (response.ok) {
        const data = await response.json();
        setuserLoginedData(data.userData);
        setisLoading(false);
      } else {
        console.error("Error fetching user data 22222");
        setuserLoginedData("");
        setisLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  let getServiceFnc = async () => {
    try {
      let url = `${backendUrl}/api/data/service`;
      const response = await fetch(url, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setserviceData(data.response);
      } else {
        console.error("Error fetching service data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServiceFnc();
    userAuthentication();
  }, [jwtToken]);

  useEffect(() => {
    console.log("Retrieved token from local storage:", jwtToken);
  }, [jwtToken]);

  useEffect(() => {
    console.log("Service Data:", serviceData);
  }, [serviceData]);

  return (
    <AuthContext.Provider
      value={{
        AuthorisationToken,
        isLoggedIn,
        storeTokenInLS,
        logoutUserFnc,
        userLoginedData,
        serviceData,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContextApi = () => {
  return useContext(AuthContext);
};
