import React from "react";
import { Col, Container, Row } from "reactstrap";
import CountUp from "react-countup";
import aboutImg from "../../Assets/about-img.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="about-img" className="w-100" />
            </div>
          </Col>

          <Col>
            <div className="about__content">
              <h2>About us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
                distinctio iusto voluptates ullam quis dicta nesciunt eius,
                soluta beatae nemo.Exercitationem!
              </p>

              <div className="about__counter">
                <div className="d-flex gap-5 align-itmes-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={3} suffix="K" />

                      <p className="counter__title">Completed Projects</p>
                    </span>
                  </div>
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={3} suffix="M" />

                      <p className="counter__title">Patient Around Wrold</p>
                    </span>
                  </div>
                </div>

                <div className="d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={3} suffix="K" />

                      <p className="counter__title">Completed Projects</p>
                    </span>
                  </div>
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={3} suffix="M" />

                      <p className="counter__title">Patient Around Wrold</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
