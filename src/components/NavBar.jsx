import { CampaignOutlined } from "@mui/icons-material";
import { LocationOnOutlined } from "@mui/icons-material";
import { LoginOutlined } from "@mui/icons-material";
import { fontWeight } from "@mui/system";
import React from "react";
import { ListGroup, Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <header>
      <Navbar bg="light" className="fixed-top" expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="#home" className="me-auto ps-4">
            <img
              src="https://www.xentice.com/static/media/woxlandlogo.2adca2c7.png"
              alt="logo"
              width="150px"
            />
          </Navbar.Brand>
          <div className="nav-link-wrapper d-flex">
            <div className="nav-link mx-2 d-flex">
              <CampaignOutlined />
              <Nav.Link href="#post">Post Ad</Nav.Link>
            </div>
            <div className="nav-link mx-2 d-flex">
              <LocationOnOutlined />
              <Nav.Link href="#nearme">Near Me</Nav.Link>
            </div>
            <div className="nav-link mx-2 d-flex">
              <LoginOutlined />
              <Nav.Link href="#login">Login/Signup</Nav.Link>
            </div>
          </div>
          <Navbar.Offcanvas
            style={{ width: "17em" }}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header>
              <img
                src="https://www.xentice.com/static/media/woxlandlogo.2adca2c7.png"
                alt=""
                width="200px"
              />
            </Offcanvas.Header>
            <Offcanvas.Body
              className=""
              style={{ fontSize: "15px", fontWeight: "400" }}
            >
              <ListGroup.Item action variant="light" className="p-2">
                Post Requirements
              </ListGroup.Item>
              <ListGroup.Item action variant="light" className="p-2 mt-1">
                Post Ad
              </ListGroup.Item>
              <ListGroup.Item action variant="light" className="p-2 mt-1">
                Post Services
              </ListGroup.Item>
              <ListGroup.Item action variant="light" className="p-2 mt-1">
                Profile
              </ListGroup.Item>
              <ListGroup.Item action variant="light" className="p-2 mt-1">
                Near Me
              </ListGroup.Item>
              <ListGroup.Item action variant="light" className="p-2 mt-1">
                Post Requirements
              </ListGroup.Item>
              <ListGroup.Item action variant="light" className="p-2 mt-1">
                Pricing
              </ListGroup.Item>
              <hr />
              <ListGroup.Item action variant="light" className="p-2 mt-1">
                Login/Signup
              </ListGroup.Item>
              <div className="mt-1">
                <ListGroup.Item action variant="light" className="p-2 mt-1">
                  About Us
                </ListGroup.Item>
                <ListGroup.Item action variant="light" className="p-2 mt-1">
                  Contact Us
                </ListGroup.Item>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;
