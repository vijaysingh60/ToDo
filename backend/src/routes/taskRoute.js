const express = require('express')
const router = express.Router();
const {getTasks,getTaskById,deleteTask,postTask,updateTask} = require("../controllers/taskController")

router.get("/",getTasks);
router.get("/:taskId",getTaskById);
router.post("/",postTask);
router.put("/:taskId",updateTask);
router.delete("/:taskId",deleteTask);


module.exports = router;