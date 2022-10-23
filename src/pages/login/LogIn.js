import React, { useContext, useState } from 'react';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from '../Shared/header/contexts/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toast } from 'react-bootstrap';

const LogIn = () => {
    const {logIn} = useContext(AuthContext);
    const [error ,setError] =useState('');

const navigate = useNavigate()

    const submitHandle = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email,password)
        .then(res=>{
            console.log(res.user)
            form.reset()
            setError('')
        
            toast.success('Log in successfull')
            
            // navigate('/')
        })
        .catch(er=>{
            console.log('error in logIn .....',er)
            setError(er.message)
        })
      };
    return (
        <div>
     <div className="container text-center my-5">
    
    <h1 className="bg-info  py-3 text-light mt-5">Log In Please</h1>
    <form onSubmit={submitHandle} action="" className="mt-5">
      <div className="bg-light shadow-lg d-flex flex-column justify-content-center align-items-center">
        <div className="py-2 my-2">
          <span className="mx-3 fs-2">Email: </span>
          <input
            className="p-4 fs-4 rounded my-2 bg-secondary text-light"
            type="email"
            name="email"
            placeholder="email"
            required
          />
        </div>
        <div className="py-2 my-2 me-5">
          <span className="mx-3 fs-2">Password: </span>
          <input
            className="p-4 fs-4 rounded my-2 bg-secondary text-light "
            type="password"
            name="password"
            placeholder="password"
            required
          />
        </div>
        <p className='text-danger'>{error}</p>
        <div className="form-control mt-6">
          <button className="btn btn-primary px-5 py-3">log In</button>
        </div>
      <p>Have not account ?   <Link to={'/signin'}>sign up please</Link></p>
      </div>
      <ToastContainer/>
    </form>
  </div>
        </div>
    );
};

export default LogIn;