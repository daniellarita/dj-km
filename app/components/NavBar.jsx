import React from 'react';
import Login from './Login';
import { Link } from 'react-router';


const NavBar = (props) =>{
  console.log("NAV PROPS",props)
  return(
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">
              DJKM
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">

              { props.user && props.user.email ?
                <div>
                  <li><a href="#">{props.user.name}'s Account</a></li>
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

