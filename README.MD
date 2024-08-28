# 🎬 Netflix Clone MERN Stack

![Netflix Clone](/frontend/public/screenshots/screenshot1.png)

This project is a feature-rich Netflix clone built using the MERN stack (MongoDB, Express, React, Node.js). It aims to replicate core functionalities of Netflix, providing users with an immersive streaming experience complete with user authentication, content browsing, and video playback within a responsive and intuitive interface.

## 🌟 Features

- **User Authentication:** 
  - Secure registration and login
  - Password recovery
  - JWT-based authentication
- **Content Management:**
  - Browse movies and TV shows by genre
  - View detailed information about each title
  - Add to favorites and create a watchlist
- **Search Functionality:**
  - Real-time search with auto-suggestions
  - Advanced filtering options (genre, release year, rating)
- **Video Playback:**
  - Stream movie trailers and full episodes
  - Resume watching feature
  - Adjustable video quality
- **Responsive Design:**
  - Optimized for desktop, tablet, and mobile devices
  - Consistent user experience across all screen sizes
- **User Profiles:**
  - Create and manage multiple user profiles
  - Personalized content recommendations
  - Viewing history and preferences

## 🛠 Technologies

### Frontend
- React 
- Tailwind CSS for styling
- React Router v6 for navigation
- Axios for API requests
- React Player for video playback

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose ODM
- JSON Web Tokens (JWT) for authentication
- Bcrypt for password hashing
- Express Validator for input validation


## 🗂 Project Structure

```plaintext
netflix-clone/
├── client/                 # Frontend React application
│   ├── public/             # Static files
│   ├── src/                # Source files
│   │   ├── components/     # Reusable React components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API service functions
│   │   ├── redux/          # Redux store, slices, and thunks
│   │   ├── styles/         # Global styles and Tailwind config
│   │   ├── utils/          # Utility functions and helpers
│   │   ├── App.js          # Main App component
│   │   └── index.js        # Entry point
│   ├── package.json        # Frontend dependencies and scripts
│   └── tailwind.config.js  # Tailwind CSS configuration
│
├── server/                 # Backend Node.js/Express application
│   ├── config/             # Configuration files
│   ├── controllers/        # Request handlers
│   ├── middleware/         # Custom middleware functions
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── utils/              # Utility functions
│   ├── app.js              # Express app setup
│   ├── server.js           # Server entry point
│   └── package.json        # Backend dependencies and scripts
│
├── .github/                # GitHub Actions workflows
├── .gitignore              # Git ignore file
├── docker-compose.yml      # Docker Compose configuration
├── Dockerfile              # Docker configuration
├── package.json            # Root level dependencies and scripts
└── README.md               # Project documentation (you are here!)
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/netflix-clone.git
   cd netflix-clone
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   npm run install-all
   ```

3. Set up environment variables:
   - Create a `.env` file in the `server` directory based on `.env.example`
   - Create a `.env` file in the `client` directory based on `.env.example`

4. Start the development servers:
   ```bash
   npm run dev
   ```

   This will start both the backend server and the frontend development server.

## 🖥 Usage

After starting the development servers:

1. Open your browser and navigate to `http://localhost:3000`
2. Register a new account or log in with existing credentials
3. Browse the available content, search for titles, and enjoy streaming!

## 🔑 Environment Variables

### Backend (.env in server directory)

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

### Frontend (.env in client directory)

```
REACT_APP_API_URL=http://localhost:5000/api
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing movie and TV show data
- [Netflix](https://www.netflix.com/) for inspiration and UI/UX reference

---

Made with ❤️ by [Your Name](https://github.com/yourusername)