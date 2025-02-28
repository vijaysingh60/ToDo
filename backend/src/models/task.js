const mongoose = require( 'mongoose');

const getDefaultDeadline = () => {
  const date = new Date();
  date.setDate(date.getDate() + 10); // Adds 10 days to the current date
  return date;
};

// Task Schema
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: { 
    type: String, 
    enum: ['To Do', 'In Progress', 'Completed', 'Timeout'], 
    default: 'To Do' 
  },
  status:{
    type:String,
    default:"Low"
  },
  createdAt: { type: Date, default: Date.now }, // Task creation time
  deadline: { type: Date, default: getDefaultDeadline }, // Deadline defaults to 10 days ahead
});

module.exports = mongoose.model('Task', taskSchema);