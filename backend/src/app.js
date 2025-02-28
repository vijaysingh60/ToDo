const express = require('express');
const app = express();
require("dotenv").config();
const TaskSchema  = require("./models/task");
const mongoose = require('mongoose')
const taskRoute = require('./routes/taskRoute')
const cors = require('cors')

app.use(
  cors({
    origin: "http://localhost:5173", // Allow frontend origin
    credentials: true, // Allow credentials (cookies, authorization headers)
  })
);

app.use(express.json())

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1); // Exit the process if the connection fails
  }
};

connectDB();

app.use("/tasks",taskRoute)


app.listen(process.env.PORT || 3000,()=>{
    console.log("Server running on 3000")
})