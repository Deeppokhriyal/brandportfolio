import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiCanva,
  SiFigma,
  SiGit,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* macOS */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>

      {/* VS Code */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      {/* Git */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>

      {/* Vercel */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>

      {/* Figma */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>

      {/* Photoshop */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>

      {/* Lightroom */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobelightroom />
      </Col>

      {/* After Effects */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeaftereffects />
      </Col>

      {/* Canva */}
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>
    </Row>
  );
}

export default Toolstack;
