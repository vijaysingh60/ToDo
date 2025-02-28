import SmallTask from "./SmallTask";
import axios, { all } from 'axios'
import {useContext, useEffect, useState} from 'react'
import url from "./url";
import { TaskContext } from "./context/taskContext";

export default function TaskList() {
    const {allTask,search}  =  useContext(TaskContext)
    const [allTask1,setAllTask1] = useState(allTask)
    useEffect(()=>{
        const arr = allTask.filter((task)=>task.title.toLowerCase().includes(search.toLowerCase()));
        console.log(arr)
        setAllTask1(arr);
    },[search,allTask])
   
  return (
    <div className=" flex gap-10">

        <div className="bg-gray-100 p-4 rounded-lg shadow-lg shadow-gray-300 ">
            <h1 className="text-lg font-semibold text-center"><span className="w-2 h-2 rounded-full bg-purple-600 inline-block mx-2"></span>To Do</h1>
            <div className="w-full h-1 bg-purple-600 my-4"></div>
            {allTask1 && allTask1.map((val,idx)=>{
                if(val.category == "To Do")return (
                    <SmallTask key={idx} title={val.title} description={val.description} deadline={val.deadline} priority={val.status} />
                )
            })}
            
            
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg shadow-gray-300">
            <h1 className="text-lg font-semibold text-center"><span className="w-2 h-2 rounded-full bg-orange-600 inline-block mx-2"></span>On Progress</h1>
            <div className="w-full h-1 bg-orange-600 my-4"></div>
            {allTask1 && allTask1.map((val,idx)=>{
                if(val.category == "In Progress")return (
                    <SmallTask key={idx} title={val.title} description={val.description} deadline={val.deadline} priority={val.status} />
                )
            })}
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg shadow-gray-300">
            <h1 className="text-lg font-semibold text-center"><span className="w-2 h-2 rounded-full bg-green-600 inline-block mx-2"></span>Completed</h1>
            <div className="w-full h-1 bg-green-600 my-4"></div>
            {allTask1 && allTask1.map((val,idx)=>{
                if(val.category == "Completed")return (
                    <SmallTask key={idx} title={val.title} description={val.description} deadline={val.deadline} priority={val.status} />
                )
            })}
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-lg shadow-gray-300">
            <h1 className="text-lg font-semibold text-center"><span className="w-2 h-2 rounded-full bg-red-600 inline-block mx-2"></span>TimeOut</h1>
            <div className="w-full h-1 bg-red-600 my-4"></div>
            {allTask1 && allTask1.map((val,idx)=>{
                if(val.category == "Timeout")return (
                    <SmallTask key={idx} title={val.title} description={val.description} deadline={val.deadline} priority={val.status} />
                )
            })}
        </div>
        
      
    </div>
  );
}

