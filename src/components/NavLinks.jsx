import React from "react";
import { Col, Row, Container } from "react-bootstrap";

function NavLinks() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <span className="nav-list-hide">Commercial</span> Shop
          </Col>
          <Col>
            <span className="nav-list-hide">Commercial</span> Land
          </Col>
          <Col>
            <span className="nav-list-hide">Commercial</span>Office
          </Col>
          <Col>
            <span className="nav-list-hide">Industrial</span>Building
          </Col>
          <Col>
            <span className="nav-list-hide">Private</span>Office
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NavLinks;
