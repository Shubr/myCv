import "../App.css";
import React, { ReactNode } from "react";

interface CardProps {
  name?: String;
  detail?: string;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ name, detail, children }) => {
  return (
    <div className="card-body">
      {name && <h1>{name}</h1>}
      {detail && <p>{detail}</p>}
      {children}
    </div>
  );
};

export default Card;
