import "./styles.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskManager from "./components/TaskManager";

export default function App() {
  const [tasks, setTasksState] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(window.localStorage.getItem("tasks"));
    setTasksState(savedTasks ?? []);
  }, []);

  function setTasks(newTasks) {
    setTasksState(newTasks);
    window.localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  return (
    <div className="App">
      <Header tasks={tasks} setTasks={setTasks} />

      <main>
        <TaskManager tasks={tasks} setTasks={setTasks} />
      </main>
    </div>
  );
}
