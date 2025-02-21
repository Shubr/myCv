import "../App.css";

function Card({ name, detail, children }) {
  return (
    <div className="card-body">
      {name && <h1>{name}</h1>}
      {detail && <p>{detail}</p>}
      {children}
    </div>
  );
}

export default Card;
