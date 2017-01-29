import React from 'react';
import Login from './Login';
import { Link } from 'react-router';
import axios from 'axios'

const NavBar = (props) =>{

  // const loginWithGmail = function(){
  //   // console.log('hey')
  //   axios.post('/api/auth/google-oauth/login')
  //   .then(data => console.log(data))

  // }

  return(
    <div>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/">
              <img alt="Brand" src="/dj-default2.jpg" style={{height: '70px', width: '100px'}} />
              <img alt="Brand" src="/djkm-logo.png" style={{height: '70px', width: '100px'}} />
            </Link>
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">

              { props.user && props.user.email ?
                <div>

                  <li>
                    <Link to="/account">
                    {`${props.user.name}'s`} Account
                    </Link>
                  </li>
                  <li>
                    <Link to="/shoppingcart">
                      View Cart
                    </Link>
                  </li>
                  <li><a onClick={props.handleLogout} href="#">Sign Out</a></li>
                </div>
                :
                <div>
                  <Login />
                  <Link to="/shoppingcart" className="col-md-3">
                    View Cart
                  </Link>
                  <div className="col-md-5">
                    <a href='/api/auth/google/login'>
                      Log in with Gmail
                    </a>
                  </div>
                  <Link to="/createaccount" className="col-md-3">
                    Create Account
                  </Link>
                </div>
              }
              <div className="g-signin2" data-onsuccess="onSignIn"></div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default NavBar;
