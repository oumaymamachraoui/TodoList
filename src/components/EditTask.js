import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import {useState} from 'react'
import { useDispatch } from "react-redux";
import { edittask } from "../JS/action";
const EditTask = ({ task }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [newTask , setNewTask] = useState(task.text);

  const handleEdit =(e)=>{
    e.preventDefault();
    dispatch(edittask(task.id ,newTask))
    handleClose()
  }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="text" value={newTask} onChange={ (e)=>setNewTask(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTask;
