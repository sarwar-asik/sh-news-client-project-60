import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/footer/Footer";
import Headers from "../pages/Shared/header/Headers";
import LeftSideNav from "../pages/Shared/leftSide/LeftSideNav";
import RightSideNav from "../pages/Shared/rightSideNav/RightSideNav";

const Main = () => {
  return (
    <div className="">
        <Headers></Headers>
      <Container>
        <Row>
          <Col lg='2' className="d-none d-lg-block">
            <LeftSideNav/>
          </Col>
          <Col lg='7'>
            <Outlet />
          </Col>
          <Col lg='3'>
            <RightSideNav/>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
