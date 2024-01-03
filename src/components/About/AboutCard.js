import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hussein Bahdon </span>
            based in <span className="purple"> London.</span>
            <br />
            I am currently volunteer as a software engineer at <span className="purple">CodeYourFuture.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading 
            </li>
            <li className="about-activity">
              <ImPointRight /> Driving
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Define a Programmer: A machine that turns coffee into code"{" "}
          </p>
          <footer className="blockquote-footer">Hussein Bahdon</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
