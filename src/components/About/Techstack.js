import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiHtml5,
  DiCss3,
  DiMysql,
  DiGithubBadge,
} from "react-icons/di";
import {
  SiFlutter,
  SiDart,
  SiKotlin,
  SiAndroid,
  SiIos,
  SiLaravel,
  SiFirebase,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Flutter */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
      </Col>
      {/* Dart */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDart />
      </Col>
      {/* Kotlin */}
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin />
      </Col>
      {/* Android */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroid />
      </Col>
      {/* iOS */}
      <Col xs={4} md={2} className="tech-icons">
        <SiIos />
      </Col>
      {/* Java */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      {/* HTML */}
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      {/* CSS */}
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      {/* C++ */}
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      {/* C (using C++ icon as placeholder) */}
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus title="C" />
      </Col>
      {/* Node.js */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      {/* GitHub */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge />
      </Col>
      {/* Laravel */}
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
      </Col>
      {/* Firebase */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      {/* MySQL */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
    </Row>
  );
}

export default Techstack;
