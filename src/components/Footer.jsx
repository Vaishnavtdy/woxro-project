import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <footer
        className="footer-row text-white text-center text-lg-start"
        style={{ backgroundColor: "#012b72" }}
      >
        <Container>
          <Row className="footer-hide pt-3">
            <Col md={3}>
              <h5>ABOUT</h5>
              <p className="footer-text">How Xentice works</p>
              <p className="footer-text">Founder's Letter</p>
              <p className="footer-text">Newsroom</p>
              <p className="footer-text">Investors</p>
              <p className="footer-text">Xentice Gold</p>
            </Col>
            <Col md={3}>
              <h5>EXPLORE</h5>
              <p className="footer-text">Diversity and Descrimination</p>
              <p className="footer-text">Accessibility</p>
              <p className="footer-text">Xentice Associates</p>
              <p className="footer-text">Xentice Team</p>
            </Col>
            <Col md={3}>
              <h5>SERVICES</h5>
              <p className="footer-text">Buttons and badges</p>
              <p className="footer-text">Mobile Apps</p>
              <p className="footer-text">For Companies</p>
              <p className="footer-text">Mobile Apps</p>
              <p className="footer-text">Review Professionals</p>
            </Col>
            <Col md={3}>
              <h5>SUPPORT</h5>
              <p className="footer-text">Our Covid-19 Response</p>
              <p className="footer-text">Help Centre</p>
              <p className="footer-text">Cancellation Options</p>
              <p className="footer-text">Neighbourhood Support</p>
            </Col>
          </Row>
          {/* <hr style={{height:"4px"}} className="rule" />
                <Row>
                    <Col xs={12} md={8} >
                        <p style={{color: "white"}}>&copy; Xentice Group of Companies 2022 . All Rights Reserved</p>
                    </Col>
                    <Col xs={12} md={4}  >
                        <Link className="footer-link" to="/about">About Us</Link>
                        <Link className="footer-link" to="/contact">Contact Us</Link>
                        <Link className="footer-link" to="/privacy">Privacy Policy</Link>
                    </Col>
                </Row> */}
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
