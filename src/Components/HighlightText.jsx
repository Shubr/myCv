import React from "react";

function Highlight({ text, color }) {
  return <span style={{ backgroundColor: color }}>{text}</span>;
}

export default Highlight;
