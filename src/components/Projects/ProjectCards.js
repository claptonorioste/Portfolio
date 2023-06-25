import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ color: "#83edff" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", color: "#83edff" }}>
          {props.description}
        </Card.Text>
        <Card.Text
          style={{ textAlign: "justify", fontWeight: "bold", color: "#83edff" }}
        >
          {props.status}
        </Card.Text>
        {props.statusDescription ? (
          <Card.Text
            style={{
              textAlign: "justify",
              fontStyle: "italic",
              color: "#83edff",
            }}
          >
            {props.statusDescription}
          </Card.Text>
        ) : null}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
