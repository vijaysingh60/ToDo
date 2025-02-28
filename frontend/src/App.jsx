import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";
import TaskDetails from "./components/TaskDetails";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-white">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="p-6">
            <Routes>
              <Route path="/" element={<TaskList />} />
              <Route path="/task/:id" element={<TaskDetails />} />
              <Route path="/new-task" element={<TaskForm />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

