import {useEffect,useState,createContext} from 'react';
import axios from 'axios'
import url from '../url';

export const TaskContext = createContext();

export  const TaskProvider = ({ children }) => {
    const [allTask, setAllTask] = useState([]);
    const [change,setChange] = useState(true);
    const [search,setSearch] = useState("");
    const fetchData = async()=>{
        const data = await axios.get(url+"/tasks");
        setAllTask(data.data)
    }
    useEffect(()=>{
        fetchData();
    },[change])

  return (
    <TaskContext.Provider value={{ allTask, setAllTask ,setChange,search,setSearch}}>
      {children}
    </TaskContext.Provider>
  );
};