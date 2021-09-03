import React from "react";
import lotta from "../assets/Charlotta.jpg";

const PresentationCard = () => {
  return (
    <div>
      <div className="h-img"></div>
      <div className="presentation-card">
        <img className="lotta-img" src={lotta} alt="lotta" />
        <div className="container-1">
          <h1 className="h1-1">CHARLOTTA SÖDERHOLM</h1>
          <p className="p-1">PROFESSIONAL MULTITASKER</p>
          <p className="p-2">
            Years in customer service has taught me a lot about providing
            customer oriented service. I'm at my best when I can utilize my
            problem solving skills and be of help to others. I create a
            functioning workspace around me. I am proactive and a solution
            minded thinker.
          </p>
        </div>
      </div>
      <div className="container-2">
        <div className="column1">
          <h1 className="h1-2">Strengths</h1>
          <ul>
            <li className="li">Providing customer oriented service</li>
            <li className="li">Development of operational service processes</li>
            <li className="li">Solution oriented mindset</li>
            <li className="li">Creative problem solving skills</li>
            <li className="li">Ability to prioritize</li>
          </ul>
          <h1 className="h1-2">Skills</h1>
          <h3 className="h3">Languages</h3>
          <p className="p-3">
            Swedish (native), Finnish and English, Professional proficiency
          </p>
          <h3 className="h3">{"Systems & Programs"}</h3>
          <p className="p-3">
            Office Word, Excel; Micros Oracle; MaraPlan; ResDiary; HotelLinx;
            Restolution; Lounastaja; Business Suite; Google My Business;
            InBliss: Avarn; Smartum; Edenred; E-passi; Eazybreak
          </p>
          <h1 className="h1-2" style={{ paddingTop: "10px" }}>
            Educational Training
          </h1>
          <h3 className="h3" style={{ fontSize: "16px" }}>
            Turku University of Applied Sciences
          </h3>
          <p className="p-3">Bachelor of Hospitality Management</p>
          <ul>
            <li className="li">Graduated in 2007</li>
            <li className="li">Production and Management of Services</li>
            <li className="li">Facility Management </li>
            <li className="li">Usability of workspace</li>
            <li className="li">Strategic Facilities Management</li>
          </ul>
        </div>
        <div className="column2">
          <h1 className="h1-2">Community Envolvement</h1>
          <h3 className="h3" style={{ fontSize: "16px" }}>
            MLL Ruoholahti-Jätkäsaari local organisation
          </h3>
          <p className="p-3">Member of the Board 2021</p>
          <p className="p-3">Member and Volunteer 2018</p>
          <ul>
            <li className="li">
              Organising happenings for children wih the aim to bring local
              families together
            </li>
            <li className="li">
              Working proactively to help families by provding information for
              help facilitated by the main organisation
            </li>
          </ul>
          <h1 className="h1-2">Work experience</h1>
        </div>
      </div>
    </div>
  );
};

export default PresentationCard;
