import React from "react";

interface HighlightProps {
  text: String;
  color?: string;
  size?: string;
  backgroundColor?: string;
}

const Highlight: React.FC<HighlightProps> = ({ text, backgroundColor }) => {
  return <span style={{ backgroundColor: backgroundColor }}>{text}</span>;
};

export default Highlight;
