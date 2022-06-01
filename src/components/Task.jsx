import React, { useState } from "react";

export default function Task({
  task,
  index,
  completeTask,
  removeTask,
}) {
  const [textColor, setTextColor] = useState("white");

  //To show task inprogress: changes task color to yellow
  const handleInProgress = (color) => {
    setTextColor(color);
  };
  return (
    <div
      className="task"
      style={{
        textDecoration: task.completed ? "line-through" : "",
        color: textColor,
      }}
    >
      {task.title}
      <button style={{ background: "red" }} onClick={() => removeTask(index)}>
        X
      </button>
      <button onClick={() => completeTask(index)}>Complete</button>
      <button
        onClick={() => handleInProgress("yellow")}
      >
        InProgress
      </button>
    </div>
  );
}
