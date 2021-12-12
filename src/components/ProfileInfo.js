import React from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Username from "./Username";

function ProfileInfo(props) {
  const { username, loading } = props;
  const navigate = useNavigate();
  return (
    <div className="profile-info">
      {!loading ? (
        <>
          <Username username={username} loading={loading} />

          <button
            className="addbtn"
            onClick={() =>
              navigate("writeTodo", {
                state: {
                  username,
                  loading,
                },
              })
            }
          >
            +
          </button>
          <button
            className="signoutbtn"
            onClick={() => {
              const confirmation = window.confirm(
                "Do you really want to sign out ?"
              );
              if (confirmation) {
                localStorage.removeItem("token");
                navigate("/");
              }
            }}
          >
            Sign out
          </button>
        </>
      ) : (
        <Loading backgroundColor={"rgb(105, 255, 155)"} />
      )}
    </div>
  );
}

export default ProfileInfo;
