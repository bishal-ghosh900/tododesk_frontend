import React from "react";

function Loading(props) {
  const { backgroundColor } = props;
  return (
    <div
      className="loading"
      style={{
        background: backgroundColor,
      }}
    >
      <div className="loader"></div>
    </div>
  );
}

export default Loading;
