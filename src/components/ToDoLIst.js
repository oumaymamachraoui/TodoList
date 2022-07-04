import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
const ToDoLIst = () => {
  const list = useSelector((state) => state.listRaducer.listTasks);
  const [status , setStatus] =useState("ALL");
  return (
    <div>
      <button onClick={()=>setStatus("ALL")}>ALL</button>
      <button onClick={()=>setStatus("DONE")}>DONE</button>
      <button onClick={()=>setStatus("UNDONE")}>UNDONE</button>

      { status === "DONE"?
      list.filter((el)=>el.isDone === true).map((el) => (
        <Task task={el} key={el.id} />
      )) : status ==="UNDONE"?
      list.filter((el)=> el.isDone === false).map((el) => (
        <Task task={el} key={el.id} />
      )):
      
      list.map((el) => (
        <Task task={el} key={el.id} />
      ))}
    </div>
  );
};

export default ToDoLIst;
