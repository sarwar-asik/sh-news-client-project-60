import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Button, ButtonGroup, ListGroup, Placeholder, ToastContainer } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";
import BrandCarousel from "../brandCarousel/BrandCarousel";
import { AuthContext } from "../header/contexts/AuthProvider";

const RightSideNav = () => {

const {providerLogIn} = useContext(AuthContext);

const googleProvider = new GoogleAuthProvider()

  const googleSignIn = ()=>{
    providerLogIn(googleProvider)
    .then(result =>{
      const user = result.user;
      toast.success('Done Google Log In')
      console.log(user)
    })
    .catch(error=>{console.log('error ......',error)})
  }



  return (
    <div className="d-flex flex-column gap-5 align-items-center" >
      <ButtonGroup vertical>
      <Button onClick={ googleSignIn} className="mb-2" variant="outline-primary"><FaGoogle/> Log In Google <ToastContainer/></Button>
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
