import client, { baseDomain } from "./client";

class TodoService {
  getAllTodos() {
    const todos = client
      .get(baseDomain)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });

    return todos;
  }

  createTodo(text) {
    const todo = client
      .post(baseDomain, { text })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
    return todo;
  }

  getOneTodo(id) {
    const endPoint = `/${id}`;
    const todo = client
      .get(baseDomain + endPoint)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });

    return todo;
  }

  deleteTodo(id) {
    const endPoint = `/${id}`;
    const delTodo = client
      .delete(baseDomain + endPoint)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });

    return delTodo;
  }
  updateTodo(id, text) {
    const endPoint = `/${id}`;
    const updatetodo = client
      .put(baseDomain + endPoint, { text })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });

    return updatetodo;
  }
}

export default new TodoService();
