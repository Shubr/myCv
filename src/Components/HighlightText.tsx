import React from "react";

interface HighlightProps {
  text: String;
  color?: string;
}

const Highlight: React.FC<HighlightProps> = ({ text, color }) => {
  return <span style={{ backgroundColor: color }}>{text}</span>;
};

export default Highlight;
