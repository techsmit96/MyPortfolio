import React from "react";
import { Card, Container, Jumbotron } from "react-bootstrap";
import Tilt from "react-tilt";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import L_AUTOFLOWTECH from "../../assets/img/experience/autoflowtech_white.webp";
import "./experience.style.css";
const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={L_AUTOFLOWTECH}
                  alt="Accenture logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Full Time</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      Back End Developer
                    </strong>
                    <br />
                    <strong>Technology:</strong> Node JS, Express JS,MySQL,MSSQL
                    <br />
                    <strong>Duration:</strong> June 2021 - September 2022
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Developed &amp; enhanced</strong> multiple
                        features with customizability option across web
                        application.
                      </li>
                      {/* <li>
                        <strong>Developed</strong> Online Eye Optician System to
                        make customers happier.
                      </li> */}
                      {/* <li>
                        <strong>Provided</strong> application maintenance while
                        working as `Production Support`.
                      </li> */}
                      <li>
                        <strong>Performed</strong> CRUD operations on multiple
                        databases to load/ remove data according to the business
                        requirements.
                      </li>
                      <li>
                        <strong>Enhanced Service Response</strong> to extract
                        data from the customer and vendors to the back end and
                        admin can performed CRUD operations on databases to
                        load/ remove data according to the business
                        requirements.
                      </li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
