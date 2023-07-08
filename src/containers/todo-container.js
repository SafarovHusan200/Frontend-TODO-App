import React, { useEffect, useState } from "react";
import CreateModalComponent from "./createModal-component";
import TodoService from "../repository/todoRepository";
import TodoComponent from "./todo-component";
import UpdateModalComponent from "./updateModal-component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TodoContainer() {
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState();
  const [editId, setEditId] = useState();

  const handleData = async () => {
    const datas = await TodoService.getAllTodos();
    setTodos(datas.data);
  };

  // Create
  const CreateTodo = async (text) => {
    const createData = await TodoService.createTodo(text);

    if (createData.success) {
      handleData();
      setShow(false);
      toast.success(createData.message);
    } else {
      toast.error("An error occurred!");
    }
  };

  // Update
  const EditTodo = async (id) => {
    const editTodo = await TodoService.getOneTodo(id);

    if (editTodo.success) {
      setEditId(id);
      setEditData(editTodo.data);
      setEditData(editTodo.data.text);
      setIsEdit(true);
    }
  };

  const UpdateTodo = async () => {
    const update = await TodoService.updateTodo(editId, editData);
    if (update.success) {
      handleData();
      setIsEdit(false);
      toast.success(update.message);
    }
  };
  // Delete
  const DeleteTodo = async (id) => {
    const deletedToodo = await TodoService.deleteTodo(id);
    if (deletedToodo.success) {
      handleData();
      toast.success(deletedToodo.message);
    }
  };

  useEffect(() => {
    handleData();
  }, []);
  return (
    <div>
      <CreateModalComponent
        show={show}
        setShow={setShow}
        CreateTodo={CreateTodo}
      />

      <UpdateModalComponent
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        editData={editData}
        setEditData={setEditData}
        UpdateTodo={UpdateTodo}
      />

      <TodoComponent
        todos={todos}
        EditTodo={EditTodo}
        DeleteTodo={DeleteTodo}
      />

      <ToastContainer />
    </div>
  );
}
