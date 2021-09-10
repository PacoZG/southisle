import React from "react";
import lotta from "../assets/Charlotta.jpg";
import { EmailIcon, LinkedinIcon, WhatsappIcon } from "react-share";

const PresentationCard = () => {
  return (
    <div>
      <div className="main">
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
              <li className="li">
                Development of operational service processes
              </li>
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
          </div>
          <div className="column2">
            <h1 className="h1-2">Work experience</h1>
            <h4 className="h4" style={{ padding: "11px" }}>
              In addition to day-to-day tasks involving the core business of
              restaurant services, such as customer service, quality management
              and ﬂoor manager duties, my responsibilities were also as
              following:
            </h4>
            <h3 className="h3" style={{ fontSize: "16px" }}>
              Shift Manager, Makkis ja Pekkis Oy
            </h3>
            <h4 className="h4">20.1.2020 - On going (layoff)</h4>
            <h4 className="h4">Responsabilities:</h4>
            <ul className="ul-work">
              <li className="li">Opening of ﬁrst restaurant</li>
              <li className="li">Developing concept</li>
              <li className="li">Reporting</li>
              <li className="li">
                Cooperation with Lounastaja to enhance user experience
              </li>
            </ul>
            <h3 className="h3" style={{ fontSize: "16px" }}>
              Head Waiter, Kämp Oy
            </h3>
            <h4 className="h4">1.7.2016-31.1.2020</h4>
            <h4 className="h4">Responsabilities:</h4>
            <ul className="ul-work">
              <li className="li">LHW standards</li>
              <li className="li">Development of service process</li>
              <li className="li">
                Training, Introduction material and -process
              </li>
              <li className="li">Working closely with 3rd party suppliers</li>
            </ul>
            <h3 className="h3" style={{ fontSize: "16px" }}>
              Restaurant Manager, EF-Restaurants
            </h3>
            <h4 className="h4">20.1.2020 - On going (layoff)</h4>
            <h4 className="h4">Responsabilities:</h4>
            <ul className="ul-work">
              <li className="li">Opening and consulting on ﬁrst restaurant</li>
              <li className="li">Work schedules and creating follow up</li>
              <li className="li">Inventory Management</li>
            </ul>
            <h3 className="h3" style={{ fontSize: "16px" }}>
              Head Waiter/Event Coordinator Palace <br /> Kämp Ravintolat
              Oy/Royal Ravintolat Oy
            </h3>
            <h4 className="h4">1.5.2009-14.4.2015</h4>
            <h4 className="h4">Responsabilities:</h4>
            <ul className="ul-work">
              <li className="li">Meeting and Event Management</li>
              <li className="li">Cash ﬂow and Reporting</li>
              <li className="li">Inventory Management</li>
            </ul>
            <h1 className="h1-2" style={{ paddingTop: "6px" }}>
              References
            </h1>
            <h3 className="h3" style={{ fontSize: "16px" }}>
              Available upon request
            </h3>
          </div>
        </div>
        <div className="footer-alignment">
          <div className="footer">
            <a
              href="https://www.linkedin.com/in/charlottasoderholm/"
              target="blank"
            >
              <LinkedinIcon size={40} borderRadius={10} />
            </a>
            <a
              href="https://wa.me/358405318180?text=I%20will%20like%20to%20contact%20you%20to%20arrange%20an%20interview"
              target="blank"
            >
              <WhatsappIcon size={40} borderRadius={10} />
            </a>
            <a href="mailto:charlotta.soderholm@pp.inet.fi" target="blank">
              <EmailIcon size={40} borderRadius={10} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationCard;
