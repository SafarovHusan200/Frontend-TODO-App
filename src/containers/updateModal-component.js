import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function UpdateModalComponent({
  isEdit,
  setIsEdit,
  editData,
  setEditData,
  UpdateTodo,
}) {
  const handleClose = () => {
    setIsEdit(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    UpdateTodo();
  };

  return (
    <div>
      <Modal show={isEdit} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                name="text"
                placeholder="typing..."
                autoFocus
                onChange={(e) => setEditData(e.target.value)}
                value={editData}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
