import React from "react";
import lotta from "../assets/Charlotta.jpg";

const PresentationCard = () => {
  return (
    <div>
      <div>
        <img
          className="h-img"
          src="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1618604826/sample.jpg"
          alt="card-header"
        />
      </div>
      <div className="presentation-card">
        <img className="lotta-img" src={lotta} alt="lotta" />
        <div className="container-1">
          <h1 className="h1-1">CHARLOTTA SÖDERHOLM</h1>
          <p className="p-1">PROFESSIONAL MULTITASKER</p>
        </div>
      </div>
    </div>
  );
};

export default PresentationCard;
