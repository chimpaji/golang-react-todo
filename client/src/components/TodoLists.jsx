import React, { useEffect, useState } from "react";
import Task from "./Task";

let endpoint = "https://localhost:9000";

function TodoLists() {
  const [task, setTask] = useState("");
  //get task at first render
  const dummyArray = [1, 2, 3, 4];
  useEffect(() => {}, []);

  //submit form
  const onSubmit = (e) => {
    e.preventDefault();
    setTask("");
  };
  return (
    <div className="">
      <h1 className="text-xl">TodoList</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className=""
          placeholder="Enter taks here"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </form>
      <div>
        {dummyArray.map((i) => (
          <Task />
        ))}
      </div>
    </div>
  );
}

export default TodoLists;
