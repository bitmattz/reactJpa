import React from 'react';
import {Link} from 'react-router-dom';
import './LoginAndRegister.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';


const LoginForm = ()=>{
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
              <label className="form-label" for="Password">Password</label>
              <input className="form-control" id="Password" type="password" placeholder="Enter your Password" name="Password" required></input>
            </div>
            <button className="btn btn-md btn-warning">Login</button>

        </form>
        <Link exact to="/Register" activeClassName="active">Dont have an account yet?..Register now..</Link>
      </div>
    </>
  )
};


export default LoginForm;
