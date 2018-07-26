import React,{ Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  class NavbarComponent extends Component {
    render() {
      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark primary-color">
            <div className="container"> 
              <div className="collapse navbar-collapse justify-content-center">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" style={links} href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" style={links} href="#">Services</a>
                  </li>
                  
                  </ul>   
                  <a className="navbar-brand px-lg-4 mr-0" href="#">
                    <h3 style={links} >KETTI<b>MELAM</b></h3>
                  </a>
                  <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" style={links} href="#">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" style={links} href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>  
          </nav>
        </div>
        );
    }
  }

  const links = {
    color:"black"
  }

  export default NavbarComponent;