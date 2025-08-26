import { Helmet, HelmetProvider } from "react-helmet-async";


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";



function Home() {
  return (
    <section>




  <HelmetProvider>
    <title>Deepak Pokhriyal | Software Developer</title>
    <meta
      name="description"
      content="Deepak Pokhriyal - Software Developer specializing in Flutter, React, and Web Development."
    />
    <meta name="keywords" content="Deepak Pokhriyal, Flutter Developer, React Developer, Web Developer" />
    <meta name="author" content="Deepak Pokhriyal" />
    <meta property="og:title" content="Deepak Pokhriyal | Portfolio" />
    <meta property="og:description" content="Portfolio of Deepak Pokhriyal, a passionate software developer." />
    <meta property="og:type" content="website" />
  </HelmetProvider>




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
                <strong className="main-name"> Deepak Pokhriyal</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
