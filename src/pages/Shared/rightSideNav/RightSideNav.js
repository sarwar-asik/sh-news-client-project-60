import React from "react";
import { Button, ButtonGroup, ListGroup, Placeholder } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import BrandCarousel from "../brandCarousel/BrandCarousel";

const RightSideNav = () => {
  return (
    <div className="d-flex flex-column gap-5 align-items-center" >
      <ButtonGroup vertical>
      <Button className="mb-2" variant="outline-primary"><FaGoogle/> Log In Google</Button>
      <Button  variant="outline-dark"><FaGithub/> Log In Github</Button>

      <Placeholder className='my-3' as="p" animation="glow">
      <h5>Find Us On</h5>
        <Placeholder xs={12} />
      </Placeholder>

      </ButtonGroup>
      
      <ListGroup>
      <ListGroup.Item className="mb-2 py-1"><FaFacebook/> FaceBook </ListGroup.Item>
      <ListGroup.Item className="mb-2 py-1"><FaWhatsapp/> Whats App</ListGroup.Item>
      <ListGroup.Item className="mb-2 py-1"><FaTwitter/> Twitter</ListGroup.Item>
      <ListGroup.Item className="mb-2 py-1"><FaInstagram/> Instragram</ListGroup.Item>
      <ListGroup.Item className="mb-2 py-1"><FaLinkedin/> Linked In</ListGroup.Item>
    </ListGroup>
    <BrandCarousel/>
    </div>
  );
};

export default RightSideNav;
