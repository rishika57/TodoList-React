import React, { useState, useEffect } from "react";
import "./Todo.css";
import Task from "./Task";
import CreateTask from "./CreateTask";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [tasksRemaining, setTasksRemaining] = useState(0);

  // To see pending tasks
  useEffect(() => {
    setTasksRemaining(tasks.filter((task) => !task.completed).length);
  });

  //To add a task
  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  //Complete task
  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  //To abandon or remove tasks
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <div className="header">TODO - ITEMS</div>
      <div className="header">Pending Tasks ({tasksRemaining})</div>

      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            key={index}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        ))}
      </div>
      <div className="create-task">
        <CreateTask addTask={addTask} />
      </div>
    </div>
  );
}

export default Todo;
