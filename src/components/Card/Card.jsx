import React from 'react'
import './Card.css'
const Card = ({ title, items }) => {
  if (!items || !Array.isArray(items)) {
    return <p></p>;
  }

  return (
    <div className="card">
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>✔</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Card