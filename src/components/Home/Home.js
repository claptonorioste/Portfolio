import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myPic from "../../Assets/Images/me.png";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col
              style={{
                paddingBottom: 20,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={myPic}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "250px" }}
              />
            </Col>
          </Row>
          <Row>
            <Col
              className="home-header"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1>
                Hi There!
                <span className="wave" role="img" aria-labelledby="wave">
                  &nbsp;👋🏻&nbsp;
                </span>
                I'M
              </h1>
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1>
                <strong className="main-name">&nbsp;Clapton Orioste</strong>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
