// username: tuanduog
// password: 1BZTSpWfPfbwQen5
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const userRouter = require('./Router/userRouter');
const connectDB = require('./Config/db');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cors({origin: 'http://localhost:5173', credentials: true}));
app.use(express.json());
app.use(cookieParser());

connectDB();
app.use('/api', userRouter);

const port = process.env.PORT || 5000;
app.listen(port,() => {
    console.log(`Connect to db at port: ${port}`);
})

