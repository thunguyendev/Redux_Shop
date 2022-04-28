import React from "react";

const Line = ({ height, color }) => {
  return (
    <div style={{ backgroundColor: color, height: height, width: "100%" }} />
  );
};

export default Line;
