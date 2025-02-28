import { useContext, useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import { TaskContext } from "./context/taskContext";
import { all } from "axios";

const Sidebar = () => {
    const [showAddTask, setShowAddTask] = useState(false);
    const {allTask} = useContext(TaskContext)
    const [status,setStatus] = useState({
        expire:0,
        active:0,
        complete:0,
    })
    useEffect(()=>{
        setStatus({
        expire:0,
        active:0,
        complete:0,
    })
        allTask.map((val,idx)=>{
            if(val.category == "To Do" ||val.category == "In Progress")setStatus((prev)=>({...prev,active:prev.active+1}));
            if(val.category == "Timeout")setStatus((prev)=>({...prev,expire:prev.expire+1}))
            if(val.category == "Completed")setStatus((prev)=>({...prev,complete:prev.complete+1}))
        })
    },[allTask])
  return (
    <div className="p-4 bg-gray-100 w-96 min-h-screen flex flex-col justify-between">
      {/* Task Summary Cards */}
      <div className="space-y-4 w-64">

        <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
          <div className="w-10 h-10 flex items-center justify-center bg-orange-200 rounded-full mb-2">
            <span className="text-orange-600 py-2">⚠️</span>
          </div>
          <p className="text-gray-600 font-medium text-xl py-2">Expired Tasks</p>
          <p className="text-2xl font-bold">{status.expire}</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
          <div className="w-10 h-10 flex items-center justify-center bg-orange-200 rounded-full mb-2">
            <span className="text-orange-600 py-2">👜</span>
          </div>
          <p className="text-gray-600 font-medium text-xl py-2">All Active Tasks</p>
          <p className="text-2xl font-bold">{status.active}</p>
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
          <div className="w-10 h-10 flex items-center justify-center bg-blue-200 rounded-full mb-2">
            <span className="text-blue-600 py-2">⏳</span>
          </div>
          <p className="text-gray-600 font-medium text-xl py-2">Completed Tasks</p>
          <p className="text-2xl font-bold">
            {status.complete}<span className="text-gray-500 text-lg">/{status.active+status.complete}</span>
          </p>
        </div>
      </div>
      
      <button 
        className="bg-black text-white w-full py-3 rounded-full flex items-center justify-center text-lg font-medium shadow-md"
        onClick={() => setShowAddTask(true)}
      >
        ＋ Add Task
      </button>

      {/* Add Task Popup */}
      {showAddTask && <TaskForm setClick={setShowAddTask} isUpdate={false} />}
    </div>
  );
};

export default Sidebar;