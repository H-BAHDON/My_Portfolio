import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Intro() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am Hussein Bahdon, a passionate Software Engineer dedicated to creating seamless user experiences. My journey in programming has been a love affair, and along the way, I've gained expertise in technologies like <i><b className="purple">React</b></i>, <i><b className="purple">JavaScript</b></i>, and <i><b className="#cd5ff8">Node.js</b></i>.

              <br />
              <br />

              As the Co-Founder of MM-Code, I've contributed to the development of a mission-driven platform focusing on honing programming skills through intentional, focused practice. The platform blends expertise in <i><b className="purple">JavaScript</b></i>, <i><b className="purple">SQL</b></i>, and <i><b className="purple">Google Cloud</b></i> with a strong emphasis on authentication.

              <br />
              <br />

              My project experiences include working on the CodeYourFuture Products, utilising technologies such as <i><b className="purple">JavaScript</b></i>, <i><b className="purple">React</b></i>, <i><b className="purple">Docker</b></i>, and conducting end-to-end testing with tools like <i><b className="purple">Postman</b></i>. The Big Mouth project showcased my skills in implementing XD designs using AWS Cloud, Lambda, IAM, DynamoDB, and API Gateway with React.

              <br />
              <br />

              In my role as a Junior Software Engineer at CodeYourFuture, I actively contribute to both front-end and back-end functionalities, emphasizing clean and efficient code. My technical expertise spans React, JavaScript, HTML, CSS, Node.js, and MongoDB.

              <br />
              <br />

              Beyond coding, I've also ventured into other roles such as Junior Manager at DHL, where I led a team and implemented strategies to improve team performance and create a positive work environment.

              <br />
              <br />

              With a Bachelor's in Computer Science from the University of Middlesex and ongoing training as a Full-Stack Software Engineer at CodeYourFuture, I continue to explore and excel in the ever-evolving world of web technologies and products.

              <br />
              <br />

              My passion extends to building products with <b className="purple">Node.js</b> and utilising modern JavaScript libraries and frameworks such as <i><b className="purple">React.js</b></i> and <i><b className="purple">Next.js</b></i>. I thrive in areas related to <b className="purple">Blockchain</b> and am committed to pushing the boundaries of what's possible in the tech industry.

            </p>

          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Intro;
