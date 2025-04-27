# Login and Register
# Introduce:
This is a
# Technologies used:
- Language: + Frontend: Reactjs
            + Backend: Nodejs
- Database: MongoDB
- Framework: Boostrap 5, ExpressJs, Mongoose, Bcryptjs, JWT, ...
# Setup Instructions:
### 1.Clone repo
git clone <repository_url>
cd project <project_folder>
### 2.Install Dependencies
- Install Frontend packages:
cd Frontend
npm install axios, bootstrap, react-router-dom
- Install Backend packages:
cd Backend
npm install express, cors, jsonwebtoken, dotenv, bcryptjs, nodemon
### 3.Environment Variables
create file .env include:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
### 4.Run the app
- Run frontend
cd Frontend
npm run dev
- Run backend
cd Backend
npm run server
