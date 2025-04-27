# Login and Register
# Technologies used:
- Language: + Frontend: Reactjs
            + Backend: Nodejs
- Database: MongoDB
- Framework: Boostrap 5, ExpressJs, Mongoose, Bcryptjs, JWT, ...
# Setup Instructions:
### 1. Clone repo
git clone <repository_url><br>
cd project <project_folder>
### 2. Install Dependencies
- Install Frontend packages:
cd Frontend<br>
npm install axios, bootstrap, react-router-dom<br>
- Install Backend packages:
cd Backend<br>
npm install express, cors, jsonwebtoken, dotenv, bcryptjs, nodemon
### 3. Environment Variables
create file .env include:<br>
PORT=5000<br>
MONGO_URI=your_mongodb_connection_string<br>
JWT_SECRET=your_secret_key
### 4. Run the app
- Run frontend<br>
cd Frontend <br>
npm run dev<br>
- Run backend<br>
cd Backend<br>
npm run server<br>
