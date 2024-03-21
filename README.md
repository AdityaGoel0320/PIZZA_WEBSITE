
---

# MERN Pizza Website

## Overview

This repository houses the codebase for a MERN (MongoDB, Express.js, React.js, Node.js) stack pizza booking application. It is designed to facilitate the booking of pizzas with advanced features including form validation, user profile management, and sleek design.

## Folder Structure

```
📁pizza
├── 📁backend
│   ├── .gitignore
│   ├── 📁assets
│   │   └── BackendUtils.js
│   ├── config.env
│   ├── 📁controller
│   │   ├── admin-controller.js
│   │   ├── auth-controller.js
│   │   ├── contact-controller.js
│   │   └── service-controller.js
│   ├── DatabseLink
│   ├── 📁db
│   │   └── conn.js
│   ├── 📁middleware
│   │   ├── admin-middleware.js
│   │   ├── auth-middleware.js
│   │   ├── error-middleware.js
│   │   └── validate-middleware.js
│   ├── 📁model
│   │   ├── contact-model.js
│   │   ├── service-model.js
│   │   └── userSchema.js
│   ├── package-lock.json
│   ├── package.json
│   ├── 📁router
│   │   ├── admin-router.js
│   │   ├── auth-router.js
│   │   ├── contact-router.js
│   │   └── service-router.js
│   ├── server.js
│   └── 📁validators
│       └── auth-validators.js
└── 📁frontend
    ├── .eslintrc.cjs
    ├── .gitignore
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── 📁public
    │   └── 📁images
    │       └── [Image files]
    ├── README.md
    ├── 📁src
    │   ├── App.css
    │   ├── App.jsx
    │   ├── 📁assets
    │   │   └── FrontendUtils.jsx
    │   ├── 📁components
    │   │   └── [Component files]
    │   ├── index.css
    │   ├── main.jsx
    │   └── 📁pages
    │       └── [Page files]
    └── tailwind.config.js
```

## Usage

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Set up backend:
   - Navigate to the `backend` directory:

     ```bash
     cd backend
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

   - Set up environment variables by creating a `config.env` file based on provided sample.

   - Run the server:

     ```bash
     npm start
     ```

3. Set up frontend:
   - Navigate to the `frontend` directory:

     ```bash
     cd frontend
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

   - Start the development server:

     ```bash
     npm run dev
     ```

4. Access the application in your browser at `http://localhost:3000`.

## Additional Notes

- Ensure MongoDB is installed and running locally or configure the database connection accordingly in `config.env`.
- The frontend utilizes Tailwind CSS for styling. Adjust `tailwind.config.js` as needed.

---

This README provides a concise overview of the project structure and instructions for setup and usage. If you have any questions or need further assistance, feel free to reach out. Happy coding!