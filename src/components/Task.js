import React from "react";
import { deletetask, donetask } from "../JS/action";
import { useDispatch } from "react-redux";
import EditTask from "./EditTask";
import { Button } from "react-bootstrap";
const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "10px",
        }}
      >
        <span>{task.text}</span>

        <EditTask task={task} />
        <Button onClick={() => dispatch(deletetask(task.id))}> DELETE </Button>
        <Button onClick={() => dispatch(donetask(task.id))}>
          {" "}
          {task.isDone ? "unDone" : "Done"}{" "}
        </Button>
      </div>
    </div>
  );
};

export default Task;
