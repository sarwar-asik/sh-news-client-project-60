import React, { useContext, useState } from "react";
import { ToastContainer } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// import { Toast } from "react-toastify/dist/components";
import { AuthContext } from "../Shared/header/contexts/AuthProvider";

const SignIn = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);

  const submitHandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password, photoURL);

    createUser(email, password)
      .then((result) => {
        // alert("Sign Up");
        console.log(result.user);
        setError("");
        form.reset();
        handleUpdaterUserProfile(name, photoURL);
        toast.success('sign Up')
      })
      .catch((e) => {
        console.log("eeeeeeee.....", e);
        setError(e.message);
      });
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };
  const handleUpdaterUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <div className="container text-center my-5">
        <h1 className="bg-info  py-3 text-light mt-5">Sign In Please</h1>
        <form onSubmit={submitHandle} action="" className="mt-5">
          <div className="bg-light shadow-lg d-flex flex-column justify-content-center align-items-center">
            <div className="py-2 my-2">
              <span className="mx-3 fs-2">Name: </span>
              <input
                className="p-4 fs-4 rounded my-2  "
                type="text"
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div className="py-1 px-2 my-2 w-100">
              <p>
                {" "}
                <span className=" fs-4">Photo URL :</span>
              </p>
              <input
                className="p-2 fs-5 rounded my-2 w-100 "
                type="text"
                name="photoURL"
                placeholder="url paste"
                required
              />
            </div>

            <div className="py-2 my-2">
              <span className="mx-3 fs-2">Email: </span>
              <input
                className="p-4 fs-4 rounded my-2 "
                type="email"
                name="email"
                placeholder="email"
                required
              />
            </div>
            <div className="py-2 my-2 me-5">
              <span className="mx-3 fs-2">Password: </span>
              <input
                className="p-4 fs-4 rounded my-2  "
                type="password"
                name="password"
                placeholder="password"
                required
              />
            </div>
            <p className="text-danger">{error}</p>

            <div className="form-check my-3 fs-5">
              <input
                class="form-check-input"
                onClick={handleAccepted}
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                <Link to={"/terms"}>Terms and Condition</Link>
              </label>
            </div>
            <div className="form-control mb-5">
              <button
                className="btn btn-primary px-5 py-3"
                disabled={!accepted}
              >
                Sign UP
              </button>
            </div>
            <p>
              Did You Sign Up before ? <Link to={"/login"}>Log In...</Link>
            </p>
            <ToastContainer/>
          </div>
    
        </form>
      </div>
    </div>
  );
};

export default SignIn;
