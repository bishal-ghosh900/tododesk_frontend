import React from "react";

function Username(props) {
  const { username, loading } = props;
  return (
    <div className="username-div">
      Username: {loading ? "Loading..." : username}
    </div>
  );
}

export default Username;
