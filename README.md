# LifeLayer

# Full-Stack Authentication Application

## Project Overview
This is a full-stack web application implementing user authentication and profile management using Vue.js for the frontend and Node.js with Express and MongoDB for the backend.

## Features
- User Signup
- User Login
- Profile Navigation
- Secure Authentication Mechanism

## Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB

## Technologies Used
- **Frontend:** 
  - Vue.js
  - Vue Router
  - Axios (for HTTP requests)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - JSON Web Tokens (JWT)

## Project Setup

### Backend Setup
1. Clone the repository
   ```bash
   git clone <your-repository-url>
   cd <project-name>/backend
   ```

2. Install backend dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_jwt_secret_key
   ```

4. Run the backend server
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to frontend directory
   ```bash
   cd ../frontend
   ```

2. Install frontend dependencies
   ```bash
   npm install
   ```

3. Run the frontend development server
   ```bash
   npm run serve
   ```

## Environment Variables

### Backend (.env)
- `MONGO_URI`: Your MongoDB connection string
- `PORT`: Port for the backend server (default: 5000)
- `JWT_SECRET`: Secret key for JWT token generation

## Project Structure
```
project-root/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── views/
    │   ├── router/
    │   └── App.vue
    └── public/
```

## Authentication Flow
1. User registers with email and password
2. Credentials are validated
3. User is authenticated and receives a JWT token
4. Token is used for subsequent authenticated requests

## Security Features
- Password hashing
- JWT-based authentication
- Protected routes
- Input validation

## Troubleshooting
- Ensure MongoDB is running
- Check `.env` file configurations
- Verify all dependencies are installed

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License. See `LICENSE` for more information.
