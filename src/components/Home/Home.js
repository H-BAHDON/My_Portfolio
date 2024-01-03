import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Intro from "./Intro";
import Type from "./Type";
import Github from "../About/Github";
import Techstack from "../About/Techstack";
import laptopImg from "../../Assets/about.png";
import AboutCard from "../About/AboutCard";
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Hussein Bahdon</strong>
              </h1>
              <AboutCard />


              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>

            {/* <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col> */}
            
          </Row>
        </Container>
      </Container>
      <Intro />
      <div className="github">
      <Github />

      </div>

     <div className="Skillset">
     <h1 className="project-heading">
          Professional <strong className="white">Skillset </strong>
        </h1>
      <Techstack />
     </div>


    </section>
  );
}

export default Home;
