import React from "react";
import { Col, Container, Row } from "reactstrap";

const Company = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="2" md="3">
            <h2 className="d-flex align-items-center gap-1">
              <i class="fa-brands fa-vimeo-v"></i> Vimeo
            </h2>
          </Col>
          <Col lg="2" md="3">
            <h2 className="d-flex align-items-center gap-1">
              <i class="fa-brands fa-pinterest-p"></i> Pinterest
            </h2>
          </Col>
          <Col lg="2" md="3">
            <h2 className="d-flex align-items-center gap-1">
              <i class="fa-solid fa-basketball"></i> Dribble
            </h2>
          </Col>
          <Col lg="2" md="3">
            <h2 className="d-flex align-items-center gap-1">
              <i class="fa-brands fa-apple"></i> Apple
            </h2>
          </Col>
          <Col lg="2" md="3">
            <h2 className="d-flex align-items-center gap-1">
              <i class="fa-solid fa-fingerprint"></i> Finder
            </h2>
          </Col>
          <Col lg="2" md="3">
            <h2 className="d-flex align-items-center gap-1">
              <i class="fa-brands fa-google"></i> Google
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Company;
