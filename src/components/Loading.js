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
      Loading...
    </div>
  );
}

export default Loading;
