import React from 'react';
import Login from './Login';
import { Link } from 'react-router';


const NavBar = (props) =>{
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
                  <li><a href="#">`{props.user.name}'s Account`</a></li>
                  <li><a href="#">View Cart</a></li>
                  <li><a onClick={props.handleLogout} href="#">Sign Out</a></li>
                </div>
                :
                <div>
                  <Login />
                  <li><a href="#">View Cart</a></li>
                </div>
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default NavBar;
