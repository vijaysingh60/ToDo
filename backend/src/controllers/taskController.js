const Task = require('../models/task'); // Ensure correct path to model

// Get all tasks
exports.getTasks = async (req, res) => {
    try {
        const allTasks = await Task.find();
        res.json(allTasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get task by ID
exports.getTaskById = async (req, res) => {
    try {
        const { taskId } = req.params;
        const oneTask = await Task.findById(taskId);
        if (!oneTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json(oneTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new task
exports.postTask = async (req, res) => {
    try {
        const { title, desc, deadline,status } = req.body;
        const newTask = new Task({ title, description:desc, deadline, category: status });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const deletedTask = await Task.findOneAndDelete({title:taskId});
        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json({ message: "Deleted successfully" });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
};

// Update a task
exports.updateTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const { title, desc, deadline, status} = req.body;
        const updatedTask = await Task.findOneAndUpdate({title}, { title, description:desc, deadline, category:status }, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json(updatedTask);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
};
