import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask } from "../JS/action";
import { Form } from "react-bootstrap";

const AddTask = () => {
  const dispatch = useDispatch();
  const [text , setText] = useState("");
  const handleADD = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addtask({ id: Math.random(), text, isDone: false }));
    } else {
      alert("you can't add an empty task");
    }
  };

  return (
    <div>
      <Form onSubmit={handleADD}>
        <Form.Control
          type="text"
          placeholder="Enter email"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button onClick={handleADD}>Add</button>
      </Form>
    </div>
  );
};

export default AddTask;
