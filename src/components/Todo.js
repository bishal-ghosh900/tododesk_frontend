import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";

function Todo(props) {
  const { _id, todo, date, username, setData } = props;
  const navigate = useNavigate();

  let handleDelete = async () => {
    const confirmation = window.confirm(
      "Do you really want to delete that todo ?"
    );
    if (confirmation) {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_URL}/todos/me/${_id}`,
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );
      setData(data);
    }
  };

  return (
    <div className="todo-div">
      <button className="deletebtn" onClick={() => handleDelete()}>
        X
      </button>
      <div
        className="todo"
        onClick={() =>
          navigate("writeTodo", {
            state: {
              _id,
              username,
              todo,
              date,
            },
          })
        }
      >
        {todo}
      </div>
    </div>
  );
}

export default Todo;
