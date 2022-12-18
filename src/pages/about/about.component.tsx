import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./about.style.css";
import Profile from "../../assets/img/profile/profile.webp";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            {/* Profile pic  */}
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            {/* About me Description  */}
            <Col xs={12} md={6}>
              {/* Description  */}
              <Row className="align-items-start p-2 my-details rounded">
                <div>
                  Hi there! I am <strong>&nbsp;Sumit Sakpal</strong>
                  <br />
                  <br />A passionate programmer, born and brought up in India. I
                  am a Full Stack Web Developer with React.js, Redux,
                  Express.js, Node.js, and MySQL as my tech stack.
                  <br />
                  In 2020, I successfully completed my Masters with
                  specialization in 'Computer and Application'.
                  <br />
                  Working with the clients, my goal is always driven towards
                  providing amazing experience with the best level of quality
                  and service to them.
                  <br />
                  I love learning about new technologies, what problems are they
                  solving and How can I use them to build better and scalable
                  products.
                  <br /> <br />
                </div>
                <div>
                  {/* Buttons  */}
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <a href="#contact">
                        <Button className="m-2" variant="outline-primary">
                          Let's talk
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://drive.google.com/file/d/1zfHKlZoF79NniT3OPc9-MbiaqFLGhQ2G/view?usp=share_link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="m-2" variant="outline-success">
                          My Resume
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://github.com/techsmit96"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="m-2" variant="outline-dark">
                          GitHub
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.linkedin.com/in/sumit-sakpal-09532a148/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="m-2" variant="outline-info">
                          LinkedIn
                        </Button>
                      </a>
                    </div>
                  </Col>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
