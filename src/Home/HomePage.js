import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
import ReactPlayer from 'react-player'

import Image1 from '../Images/img1.jpg';
import Image2 from '../Images/img2.jpeg';
import Image3 from '../Images/img3.jpg';


import './HomePage.css';

class HomePage extends Component{
	constructor(){
		super();
		 this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
	}
toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
	render(){
		return(
			<div>
				<div >
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
				<div className='videoComponent'>
	      	<ReactPlayer
	          className='react-player'
	          url='https://www.youtube.com/watch?v=Q668utcSbyQ'
	          width='100%'
	          height='500px'
	        />
	        <div className="album_label" >
	      	<h4><b>Albums</b></h4>
	      	</div>
	    	</div>
	    	<div className="container album_container" >
	    	 <CardDeck>
		      <Card>
		        <CardImg top width="100%" src={Image1} alt="Card image cap" />
		        
		      </Card>
		      <Card>
		        <CardImg top width="100%" src={Image2} alt="Card image cap" />
		        
		      </Card>
		      <Card>
		        <CardImg top width="100%" src={Image3} alt="Card image cap" />
		        
		      </Card>
		    </CardDeck>
		    </div>
    	</div>
			);
	}
}

 const links = {
    color:"black"
  }

export default HomePage;