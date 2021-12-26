import React from 'react';
import './LoginAndRegister.css';
import {Link} from 'react-router-dom';



const RegisterForm = ()=>{
  return (
    <>
      <div className="Login-container">
        <h1>Login to Knowledge Pool</h1>
        <form className="needs-validation" action='#' method="" novalidate>
            <div>
              <label className="form-label" for="username">Username</label>
              <input className="form-control" id="username" type="text" placeholder="Enter your username" name="username" required></input>
            </div>

            <div>
              <label className="form-label" for="Email">Email</label>
              <input className="form-control" id="Email" type="email" placeholder="Enter your Email" name="Email" required></input>
            </div>

            <div>
              <label className="form-label" for="Password">Password</label>
              <input className="form-control" id="Password" type="password" placeholder="Enter your Password" name="Password" required></input>
            </div>

            <button className="btn btn-md btn-warning">Login</button>

        </form>
        <Link activeClassName="active" exact to="/Login">Already have an account?..Login</Link>
      </div>
    </>
  )
};



export default RegisterForm;
