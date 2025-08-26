import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Deepak Pokhriyal (Celestial) </span>
            from <span className="purple"> Uttarakhand, India.</span>
            <br />
            currently working at a start-up in DLF Tower, New Delhi.
            <br />
            I hold a Diploma in Information Technology and a Bachelor's degree with a diverse academic background in Microeconomics, Information Technology, and Psychology.
        
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Psychology
            </li>
            <li className="about-activity">
              <ImPointRight /> Philosophy
            </li>
            <li className="about-activity">
              <ImPointRight /> Human Existance
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I believe meaningful creations emerge when psychology of humans meets philosophy of purpose."{" "}
          </p>
          <footer className="blockquote-footer">A Celestial Body</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
