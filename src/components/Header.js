import React, { useState, useEffect } from "react";

const handleNameClick = () => {
  const newName = prompt("what ur name", name);
  setName(newName);
};

function Header(props) {
  const [name, setName] = useState("ren after reload");
  const { tasks, setTasks } = props;

  return (
    <header>
      <div style={{ display: "flex", flexFlow: "row nowrap" }}>
        <h1>Ren jing todo list</h1>
        <OverviewBox tasks={tasks} />
        <CatFactBox />
      </div>
    </header>
  );
}

function OverviewBox(props) {
  const [name, setName] = useState("loading name");
  useEffect(()=>{
    const savedName = window.localStorage.getItem('name')
    setName(savedName ?? "renjing")
  },[])
  const { tasks } = props;
  console.log(tasks);
  const handleNameClick = () => {
    const newName = prompt("what ur name", name);
    setName(newName);
    window.localStorage.setItem('name', newName)
  };

  return (
    <div className="HeaderBox">
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
        <strong>{tasks.filter((task) => !tasks.isComplete).length}</strong> that
        are not complete.
      </p>
    </div>
  );
}

function CatFactBox() {
  const [catFact, setCatFact] = useState("Default cat fact");
  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => setCatFact(data.fact))
      .catch((error)=> setCatFact('error'));
  }, []);
  return (
    <div className="HeaderBox">
      <h2>Cat Fact of the Day</h2>
      <p>{catFact}</p>
    </div>
  );
}
export default Header;
