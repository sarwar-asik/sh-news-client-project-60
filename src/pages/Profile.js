import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Shared/header/contexts/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email, photoURL, metadata } = user;
//   console.log(user);



const [name,setName] = useState(displayName);

const phtotoUrlRef = useRef(user.photoURL)

  const updateProfile =(event)=>{
            event.preventDefault();
            console.log(name,'and..',phtotoUrlRef.current.value)
  }

  const handleChange = event =>{
    setName(event.target.value)
  }



  return (
    <>
      <div className="container p-5 bg-light shadow-lg text-center my-5 ">
        <h2>User Information</h2>
        {user?.uid ? (
          <div className="">
            <h4>Name : {displayName}</h4>

            {photoURL ? (
              <img
                src={photoURL}
                className="rounded-pill p-5 w-50 h-50"
                alt=""
              />
            ) : (
              <h1 className="border border-primary text-muted py-5 w-100 my-3 ">
                Image Insert
              </h1>
            )}

            <p>Created : {metadata.creationTime}</p>
            <p>Last Sign In : {metadata.lastSignInTime}</p>
            <p>Email : {email} </p>
          </div>
        ) : (
          <Link to={"/login"}>Log In</Link>
        )}
      </div>
{/* vertify */}


      <div className="container text-center bg-light shadow-lg py-5 px-3 my-5">
        <h1 className="bg-info  py-3 text-light mt-5">Verify Your Profile </h1>
        <form action="" className="mt-5" onSubmit={updateProfile}>
          <div className="py-1 px-2 my-2 w-100">
            <p>
              {" "}
              <span className=" fs-4">Name</span>
            </p>
            <input
            onChange={handleChange}
              className="p-2 fs-5 rounded my-2 w-100 "
              type="text"
              name="name"
              placeholder={displayName}
              required
            />
          </div>
          <div className="py-1 px-2 my-2 w-100">
            <p>
              {" "}
              <span className=" fs-4">Photo URL :</span>
            </p>
            <input
            ref={phtotoUrlRef}
              className="p-2 fs-5 rounded my-2 w-100 "
              type="text"
              name="photoURL"
              placeholder={photoURL}
              required
            />
          </div>
          <div className="py-1 px-2 my-2 w-100">
            <p>
              {" "}
              <span className=" fs-4">Email</span>
            </p>
            <input
              className="p-2 fs-5 rounded my-2 w-100 "
              type="email"
              name="email"
              placeholder={email}
              required
            />
          </div>
          <div className="py-1 px-2 my-2 w-100">
            <p>
              {" "}
              <span className=" fs-4">Password</span>
            </p>
            <input
              className="p-2 fs-5 rounded my-2 w-100 "
              type="password"
              name="photoURL"
              placeholder="Password"
              required
            />
          </div>

    
          <div className="form-control mb-5">
              <button className="btn btn-primary px-5 py-3">Sign UP</button>
            </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
