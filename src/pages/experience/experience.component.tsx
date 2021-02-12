import React from 'react';
import { Card, Container, Jumbotron } from 'react-bootstrap';
import Tilt from 'react-tilt';
import L_ACCENTURE from '../../assets/img/experience/accenture-3.svg';
import L_SUPPORTIVE_CAREERS from '../../assets/img/experience/supportive_careers.webp';
import './experience.style.css';
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
                  src={L_SUPPORTIVE_CAREERS}
                  alt="Accenture logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Intern</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      Full Stack Developer
                    </strong>
                    <br />
                    <strong>Technology:</strong> React JS, Node JS, Express JS,
                    MySQL
                    <br />
                    <strong>Duration:</strong> August 2019 - May 2020
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Developed &amp; enhanced</strong> multiple
                        features with customizability option across web
                        application.
                      </li>
                      <li>
                        <strong>Developed</strong> Online Eye Optician System to
                        make customers happier.
                      </li>
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
