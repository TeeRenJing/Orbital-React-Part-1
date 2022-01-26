import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Paper } from "@mui/material";
import Box from "../Box";

const handleNameClick = () => {
  const newName = prompt("what ur name", name);
  setName(newName);
};

function Header(props) {
  const [name, setName] = useState("ren after reload");
  const { tasks, setTasks } = props;

  return (
    <header>
      <h1>Ren jing Todo list</h1>
      <div style={{ display: "flex", flexFlow: "row nowrap" }}>
        <OverviewBox tasks={tasks} />
        <CatFactBox />
      </div>
    </header>
  );
}

function OverviewBox(props) {
  const [name, setName] = useState("loading name");
  useEffect(() => {
    const savedName = window.localStorage.getItem("name");
    setName(savedName ?? "renjing");
  }, []);
  const { tasks } = props;
  console.log(tasks);
  const handleNameClick = () => {
    const newName = prompt("what ur name", name);
    setName(newName);
    window.localStorage.setItem("name", newName);
  };

  return (
    <Box>
      <h2>Overview</h2>
      <p>
        Welcome back,{" "}
        <strong role="button" onClick={handleNameClick}>
          {name || "ren"}
        </strong>
        !
      </p>
      <p>
        You have{" "}
        <strong>{tasks.filter((task) => !task.isComplete).length}</strong> that
        are not complete.
      </p>
    </Box>
  );
}

function CatFactBox() {
  const [catFact, setCatFact] = useState("Default cat fact");
  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => setCatFact(data.fact))
      .catch((error) => setCatFact("error"));
  }, []);
  return (
    <Box>
      <h2>Cat Fact of the Day</h2>
      <p>{catFact}</p>
    </Box>
  );
}
export default Header;
