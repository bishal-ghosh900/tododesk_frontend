import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ProfileInfo from "./ProfileInfo";
import ProfileTodo from "./ProfileTodo";
import { Navigate } from "react-router-dom";

function Profile() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function handleRequest() {
      const { data: info } = await axios.get(
        `${process.env.REACT_APP_URL}/todos/me`,
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );
      setData(info);
      setLoading(false);
    }
    handleRequest();
  }, [data.email, data.todos?.length]);

  return (
    <>
      {localStorage.getItem("token") ? (
        <div className="profile-main">
          <ProfileInfo username={data.username} loading={loading} />
          <ProfileTodo
            todos={data.todos}
            username={data.username}
            loading={loading}
            setData={setData}
          />
        </div>
      ) : (
        <Navigate to="/" replace={true} />
      )}
    </>
  );
}

export default Profile;
