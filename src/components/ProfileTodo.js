import React from "react";
import Todo from "./Todo";

function ProfileTodo(props) {
  const { todos, username, loading, setData } = props;
  return (
    <div className="profile-todo">
      {!loading &&
        (!!todos?.length ? (
          todos.map((info) => (
            <Todo
              key={info._id}
              {...info}
              username={username}
              setData={setData}
            />
          ))
        ) : (
          <div>
            <p>No todo present.</p>
            <p>Click the + button to create todo.</p>
          </div>
        ))}
    </div>
  );
}

export default ProfileTodo;
