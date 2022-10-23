import React, { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import LeftSideNav from "../leftSide/LeftSideNav";
import { AuthContext } from "./contexts/AuthProvider";

const Headers = () => {
  const { user, logOut } = useContext(AuthContext);
  const {displayName} =user;
  // console.log(user)
  return (
    <div>
      <Navbar
        className="mb-4"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className="text-decoration-none fs-1 me-5">
              SH News
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link className="text-decoration-none" to={"/"}>
                  Home
                </Link>
              </Nav.Link>

              {user?.uid ? (
                <>
                <Nav.Link>
                  <Link onClick={logOut}  className='btn btn-outline-danger mx-2 '>
                    <p>Sign Out</p>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to={"/signin"}>Sign In</Link>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link>
                    <Link to={"/signin"}>Sign In</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to={"/login"}>Log In</Link>
                  </Nav.Link>
                </>
              )}

              <NavDropdown title="User" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link to={"/profile"}>Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                {user.uid?
                <>
                  
                  <Link to={'/profile'} className='text-decoration-none p-2 w-25 d-flex flex-column gap-2 align-items-center'>
                  <img src={user.photoURL} className="rounded-pill w-25 h-25" alt="" />
                  <span>{user.displayName}</span>
                  </Link>
                  </>
                : <Link to={'/login'}>Log In</Link>
                }
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
            <div className="d-lg-none">
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Headers;
