import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImage from "../../Assets/undraw_learning_sketching_nd4f.svg";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4">
                Anytime Anywhere <br /> Learn on your Suitable Schedule
              </h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
                Ut repudiandae vero quos vel dolor asperiores,
                <br /> voluptates harum maxime ab, reiciendis <br /> accusamus
                cupiditate.
              </p>

              <div className="search">
                <input type="text" placeholder="Search" /> <br />
                <button className="btn">Search</button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImage} alt="hero-image" className="w-100" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
