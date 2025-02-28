import { useContext, useState } from "react";
import { TaskContext } from "./context/taskContext";

const Header = () => {
    const {setSearch} = useContext(TaskContext)
    const [search1,setSearch1] = useState("")
  return (
    <div className="bg-gray-100 m-4  p-4 rounded-xl shadow-md flex items-center">
      <div className="bg-white flex items-center px-4 py-2 rounded-full shadow-md shadow-gray-300 w-96">
        <span className="text-gray-400 text-sm">🔍</span>
        <input
        value={search1}
          type="text"
          placeholder="Search Project"
          className="ml-2 p-1 w-full outline-none text-gray-600 text-md font-semibold  bg-transparent"
          onChange={(e)=>setSearch1(e.target.value)}
          
        />
        
      </div>
      <button onClick={()=>setSearch(search1)} className="p-2 text-xl font-semibold bg-gray-400 rounded-lg mx-2">Search</button>
    </div>
  );
};

export default Header;
