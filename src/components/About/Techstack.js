import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiLinux,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiArduino,
  SiMysql,
  SiAppwrite,
  SiCodeigniter,
  SiTypescript,
  SiPhp,
  SiRedux,
  SiDart,
} from "react-icons/si";
import { BiLogoFlutter, BiLogoFirebase } from "react-icons/bi";
import { AiFillAndroid } from "react-icons/ai";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoFlutter title="Flutter" color="83edff" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="Javascript" color="83edff" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillAndroid title="Android Studio" color="83edff" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node JS" color="83edff" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React JS" color="83edff" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoFirebase title="Firebase" color="83edff" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb title="Mongo DB" color="83edff" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs color="83edff" title="Next JS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="GIT" color="83edff" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAppwrite color="83edff" title="AppWrite" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino title="Arduino" color="83edff" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodeigniter title="Codeigniter" color="83edff" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" color="83edff" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava title="Java" color="83edff" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql title="Mysql" color="83edff" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript title="Typescript" color="83edff" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp title="PHP" color="83edff" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux title="Redux" color="83edff" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDart title="Dart" color="83edff" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux title="Linux" color="83edff" />
      </Col>
    </Row>
  );
}

export default Techstack;
