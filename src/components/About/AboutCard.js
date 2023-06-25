import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <p style={{ textAlign: "justify" }}>
              Analytical minded individual interested in creating software
              solutions. Coming with sound knowledge of basic computer system
              analysis, design, testing, debugging, and maintenance techniques
              and practices; and ability to develop programs and program
              specifications.
            </p>
          </p>

          <p style={{ color: "#83edff" }}>
            "Any fool can write code that a computer can understand. Good
            programmers write code that humans can understand. "
          </p>
          <footer className="blockquote-footer">Martin Fowler</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
