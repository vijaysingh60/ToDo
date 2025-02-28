import { useContext, useState } from "react";
import axios from "axios";
import url from "./url";
import { TaskContext } from "./context/taskContext";

export default function TaskForm({ setClick, isUpdate, taskId, title1, desc1, priority1, deadline1 }) {
  const [title, setTitle] = useState(title1 || ""); // Pre-fill if updating
  const [desc, setDesc] = useState(desc1 || "");
  const [deadline, setDeadline] = useState(deadline1 || new Date().toISOString().split("T")[0]); // Format date correctly
  const [status, setStatus] = useState(0); // New state for status
  const { setChange } = useContext(TaskContext);

  const statusOptions = ["To Do", "In Progress", "Completed", "Timeout"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { title, desc, deadline, status: statusOptions[status] };
    console.log(formData);

    try {
      let response;
      if (isUpdate) {
        // Update existing task
        response = await axios.put(`${url}/tasks/${title1}`, formData, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
      } else {
        // Create new task
        response = await axios.post(`${url}/tasks`, formData, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
      }

      console.log(response.data);
      setChange((prev) => !prev); // Trigger re-fetch
      setClick(false); // Close modal
    } catch (error) {
      console.error("Error submitting task:", error);
    }
  };
  const handleDelete = async (e)=>{
     try {
        const response = await axios.delete(`${url}/tasks/${title1}`, {
            withCredentials: true // If authentication is required
        });
        console.log("Task deleted:", response.data);
    } catch (error) {
        console.error("Error deleting task:", error.response?.data || error.message);
    }
    setChange((prev)=>!prev)
  }

  return (
    <div className="bg-gray-200/30 top-0 left-0 absolute z-5 w-screen flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg p-6 z-10 rounded-xl w-96 border border-gray-300">
        <div className="flex justify-between items-center border-b pb-2">
          <h3 className="font-bold text-lg">{isUpdate ? "🔹 Update TASK" : "🔹 ADD TASK"}</h3>
          <button className="text-xl" onClick={() => setClick(false)}>
            ✖
          </button>
        </div>
        <div className="mt-2">
          <h4 className="font-bold text-md border-b pb-1">
            <input
              className="outline-none p-1 text-xl w-full"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </h4>
          <textarea
            className="w-full h-24 p-2 mt-2 border rounded-md text-sm text-gray-600"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Enter task details..."
          ></textarea>

          {/* Status Slider */}
          <div className="mt-4">
            <label className="font-bold text-gray-600">Status: {statusOptions[status]}</label>
            <input
              type="range"
              min="0"
              max="3"
              value={status?status:priority1}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full mt-1"
            />
            <div className="flex justify-between text-xs text-gray-500">
              {statusOptions.map((option, index) => (
                <span key={index}>{option}</span>
              ))}
            </div>
          </div>

          <div className="flex justify-between text-gray-600 font-bold text-sm mt-4 border-t pt-2">
            <label>
              Deadline:{" "}
              <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="border rounded-md p-1 text-gray-600"
              />
            </label>
            <button
             
              className="border rounded-md p-1 text-gray-600 cursor-pointer"
              onClick={handleSubmit}
            >{isUpdate?"Update":"Submit"}</button>
          </div>
        </div>
              {isUpdate && <button onClick={handleDelete} className="w-full p-2 text-xl font-semibold bg-red-600 rounded-lg my-3 mt-7">delete</button>}
      </div>
    
    </div>
  );
}
