import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import TaskForm from "./TaskForm";

const SmallTask = ({ title, description, priority, deadline }) => {
    const [click,setClick] = useState(false);
  return (
    <>
    <div onClick={()=>setClick((prev)=>!prev)} className="p-4 shadow-md w-80 mb-4  rounded-xl relative bg-white border border-gray-300">
      {/* Priority Badge */}
      <div className="absolute top-4 left-4">
        <span className="bg-orange-100 text-orange-600 text-xs px-3 py-1 capitalize rounded-md font-medium">
          {priority}
        </span>
      </div>

      {/* More Options Icon */}
      <div className="absolute top-4 right-4 cursor-pointer">
        <MoreHorizontal size={20} className="text-gray-500" />
      </div>

      {/* Card Content */}
      <div className="pt-10 pb-5 px-4">
        <h3 className="font-bold capitalize text-2xl text-gray-900 leading-tight">{title}</h3>
        <p className="text-base text-gray-500 mt-2 leading-snug">{description}</p>
        <p 
          className="text-base font-bold mt-4 text-gray-900 cursor-pointer relative"
        >
          <span className="text-gray-600 font-medium">Deadline:</span> {new Date(deadline).toISOString().split("T")[0]}
        </p>
      </div>
    </div>
    {click && <TaskForm setClick={setClick} isUpdate={true} title1={title} desc1={description} deadline1={deadline } priority1={priority} />}</>
  );
};

export default SmallTask;