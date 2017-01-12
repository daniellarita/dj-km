import React from 'react';
import Login from './Login';


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
            <a className="navbar-brand" href="#">DJ KM</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">

              { props.user && props.user.email ?
                <div>
                  <li><a href="#">{props.user.name}</a></li>
                  <li><a onClick={props.handleLogout} href="#">Sign Out</a></li>
                </div>
                :
                <Login />
              }

              <li><a href="#">View Cart</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default NavBar;

