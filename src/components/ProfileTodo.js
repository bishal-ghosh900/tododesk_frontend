import React from "react";
import Loading from "./Loading";
import Todo from "./Todo";

function ProfileTodo(props) {
  const { todos, username, loading, setData } = props;
  return (
    <>
      {!loading ? (
        <div className="profile-todo">
          {!!todos?.length ? (
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
          )}
        </div>
      ) : (
        <Loading
          backgroundColor={
            "linear-gradient(to bottom right,rgba(202, 251, 255, 0.7),rgba(142, 255, 97, 0.7))"
          }
        />
      )}
    </>
  );
}

export default ProfileTodo;
