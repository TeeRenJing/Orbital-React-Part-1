import { useState } from "react";
import { Button, TextField, Checkbox } from "@mui/material";
import styles from "./TaskManager.module.css";
import Box from "../Box";

export default function TaskManager(props) {
  const { tasks, setTasks } = props;
  const [newTaskDesc, setNewTasksDesc] = useState("");

  function handleAddTask(event) {
    event.preventDefault();
    const newTasks = [
      ...tasks,
      { description: newTaskDesc, isComplete: false }
    ];
    setTasks(newTasks);
    console.log(newTasks);
  }

  return (
    <>
      <Box>
        <h2>Add Tasks</h2>
        <form onSubmit={handleAddTask} className={styles.addTaskForm}>
          <TextField
            style={{ margin: "0 1rem" }}
            id="outlined-basic"
            value={newTaskDesc}
            onChange={(event) => {
              setNewTasksDesc(event.target.value);
              console.log(event.target.value);
            }}
            label="Description"
            variant="outlined"
          />
          {/* <input
              style={{ margin: "0 1rem" }}
              type="text"
              value={newTaskDesc}
              onChange={(event) => {
                setNewTasksDesc(event.target.value);
                console.log(event.target.value);
              }}
            /> */}

          <Button type="submit" variant="contained">
            Add
          </Button>
          {/* <input type="submit" value="Add" /> */}
        </form>
      </Box>

      <Box>
        <h2>Task List</h2>
        {tasks.length > 0 ? (
          <TaskList tasks={tasks} setTasks={setTasks} />
        ) : (
          <p>no task lah</p>
        )}
      </Box>
    </>
  );
}

function TaskList(props) {
  const { tasks, setTasks } = props;

  function handleTaskToggle(taskToToggle, taskToToggleIndex) {
    const newTasks = [
      ...tasks.slice(0, taskToToggleIndex),
      {
        description: taskToToggle.description,
        isComplete: !taskToToggle.isComplete
      },
      ...tasks.slice(taskToToggleIndex + 1)
    ];
    setTasks(newTasks);
  }

  return (
    <>
      <table style={{ margin: "0 auto", width: "100%" }}>
        <thead>
          <tr>
            <th>No.</th>
            <th>Task</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{task.description}</td>
                <td>
                  <Checkbox
                    checked={task.isComplete}
                    onChange={() => handleTaskToggle(task, index)}
                  />
                  {/* <input
                    type="checkbox"
                    checked={task.isComplete}
                    onChange={() => handleTaskToggle(task, index)}
                  /> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>{" "}
    </>
  );
}
