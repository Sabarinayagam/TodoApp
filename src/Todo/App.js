import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addName, editName, deleteName } from "./Redux/Action";
import "./Todo.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const App = () => {
  const [studentName, setstudentName] = useState(null);
  const todos = useSelector((state) => state.NameList);
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    const edit_name = todos.find((item) => item.id === id);
    setstudentName(edit_name);
  };

  const handleDelete = (id) => {
    dispatch(deleteName(id));
    toast.error(`Name has been deleted`);
  };

  const handleCancel = () => {
    setstudentName(null);
  };

  const handleSubmit = (data) => {
    if (studentName) {
      dispatch(editName(studentName.id, data.name));
    } else {
      dispatch(
        addName({
          id: Date.now(),
          name: data.name,
        })
      );
    }
    setstudentName(null);
    toast.success(" Name has been added");
  };

  const [api, setApi] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => setApi(res.data.slice(0, 3)));
  }, []);

  const handleDeleteApi = async (userId) => {
    try {
      axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
      setApi(api.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const TodoList = ({ todos, onEdit, onDelete }) => (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );

  const TodoItem = ({ todo, onEdit, onDelete }) => (
    <li>
      <span>{todo.name}</span>
      <button
        onClick={() => onEdit(todo.id, toast.warn("You can Edit Name"))}
        className="editbtn"
      >
        Edit
      </button>
      <button onClick={() => onDelete(todo.id)} className="deletebtn">
        Delete
      </button>
    </li>
  );

  const TodoForm = ({ onSubmit, onCancel, studentName }) => {
    const [name, setName] = useState(studentName ? studentName.name : "");

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name });
      setName("");
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter Student Name"
        />
        <button type="submit" className="inputbtn">
          Add Name
        </button>
        {studentName && (
          <button type="button" onClick={onCancel} className="deletebtn">
            Cancel
          </button>
        )}
      </form>
    );
  };

  return (
    <div className="box">
      <div className="form">
        <h1>Enter Student Name :</h1>
        <TodoForm
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          studentName={studentName}
        />
        {api.map((item) => (
          <>
            <li key={item.id} className="span">
              {item.name}
              <button
                onClick={() =>
                  handleDeleteApi(item.id, toast.error(`Name has been deleted`))
                }
                className="deletebtn"
              >
                Delete
              </button>
            </li>
          </>
        ))}
        <TodoList todos={todos} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;
