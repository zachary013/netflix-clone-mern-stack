# Netflix Clone MERN Stack

This project is a Netflix clone built using the MERN stack (MongoDB, Express, React, Node.js). It aims to mimic the basic functionalities of Netflix, allowing users to browse and watch movies and TV shows, with features like user authentication, movie/TV show search, and a responsive user interface.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** Register, login, and secure access to features.
- **Movie/TV Show Search:** Search for movies and TV shows with real-time filtering.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Watch Trailer:** Users can watch trailers for movies and TV shows.
- **User Profiles:** Manage user profiles with personalized content.

## Technologies

- **Frontend:**
  - React
  - Tailwind CSS (for styling)
  - React Router (for navigation)
  - Axios (for API requests)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)
  - JWT (for authentication)
  - bcrypt (for password hashing)

- **Database:**
  - MongoDB (NoSQL database)

## Project Structure

```plaintext
root
├── backend               # Backend source code
│   ├── controllers       # Controllers for handling requests
│   ├── models            # Mongoose models for MongoDB
│   ├── routes            # API routes
│   ├── middleware        # Custom middleware
│   ├── config            # Configuration files (e.g., database)
│   └── server.js         # Entry point for the backend
│
├── frontend              # Frontend source code
│   ├── src               # React application source code
│   │   ├── components    # Reusable components
│   │   ├── pages         # Page components
│   │   ├── redux         # Redux setup
│   │   ├── App.js        # Main App component
│   │   ├── index.js      # Entry point for the frontend
│   └── public            # Static files (e.g., index.html, icons)
│
├── .gitignore            # Files and directories to ignore in git
├── package.json          # NPM dependencies and scripts
└── README.md             # Project documentation
