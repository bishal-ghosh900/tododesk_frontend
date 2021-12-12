import React from "react";

function Heading(props) {
  const { heading, size } = props;
  return (
    <div
      className="heading"
      style={{
        fontSize: size,
      }}
    >
      {heading}
    </div>
  );
}

export default Heading;
