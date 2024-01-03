import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{display: "grid", justifyContent: "center" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="grey">Code</strong>
      </h1>
      <GitHubCalendar
        username="H-BAHDON"
        blockSize={20}
        blockMargin={10}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
