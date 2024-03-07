import React, { useState } from 'react';

const Division = ({ color }) => {
  return <div className={`w-16 h-16 rounded-full bg-${color}-500 mx-auto my-2`} />;
};

const CompanionComponent = ({ toggleCompanion }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md absolute top-10 right-0 w-40 h-32 flex flex-col items-center">
      <button onClick={toggleCompanion} className="absolute top-0 right-0 p-2 cursor-pointer text-sm">
        Close
      </button>
      <Division color="red" />
      <Division color="green" />
      <Division color="blue" />
      <Division color="yellow" />
    </div>
  );
};

const CircleWithCompanion = () => {
  const [isCompanionVisible, setCompanionVisible] = useState(false);

  const toggleCompanion = () => {
    setCompanionVisible(!isCompanionVisible);
  };

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2">
      <div
        className={`w-16 h-16 bg-blue-500 rounded-full cursor-pointer ${isCompanionVisible ? 'hidden' : 'block'}`}
        onClick={toggleCompanion}
      />
      {isCompanionVisible && <CompanionComponent toggleCompanion={toggleCompanion} />}
    </div>
  );
};

export default CircleWithCompanion;
