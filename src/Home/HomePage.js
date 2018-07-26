import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Card, CardImg } from 'reactstrap';
import { Container, Row, Col } from 'react-grid-system';
import axios from 'axios';
import ReactPlayer from 'react-player'
import { SocialIcon } from 'react-social-icons';

import Image1 from '../Images/img1.jpg';
import Image2 from '../Images/img2.jpg';
import Image3 from '../Images/img3.jpg';
import Image4 from '../Images/img4.jpg';
import Image5 from '../Images/img5.jpg';
import Image6 from '../Images/img6.jpg';
import Maps from '../Images/maps.jpg';


import './HomePage.css';

const images = [Image1, Image2, Image3, Image4, Image5,Image6];

class HomePage extends Component{
	constructor(){
		super();
	}
	
	render(){
		return(
			<div>
				
				<div className="mainContainer">
	        <nav className="navbar navbar-expand navbar-dark primary-color">
	          <div className="container"> 
	            <div className="collapse navbar-collapse justify-content-center">
	              <ul className="navbar-nav">
	                <li className="nav-item">
	                  <a className="nav-link"  href="#">Home</a>
	                </li>
	                <li className="nav-item">
	                  <a className="nav-link"  href="#">Services</a>
	                </li>	                
	                <li> 
	                <a className="navbar-brand px-lg-4 mr-0" href="#">
	                  <h3>KETTI<b>MELAM</b></h3>
	                </a>
	                </li>
	                <li className="nav-item">
	                  <a className="nav-link"  href="#">Pricing</a>
	                </li>
	                <li className="nav-item">
	                  <a className="nav-link"  href="#">Contact</a>
	                </li>
	              </ul>
	            </div>
	          </div>  
	        </nav>
	        <div>
	        	<h6 className="quote">
	        		"An event is not over until everyone is tired of talking about it."
	        	</h6>
	        </div>
					<div className='videoComponent'>	      
			      <ReactPlayer
		          className='react-player'
		          url='https://www.youtube.com/watch?v=Q668utcSbyQ'
		          width='100%'
		          height='500px'
		          style={{marginBottom:"50px"}}
		        />
			    </div>
	    	</div>

	    	<div className="mainContainer" >
	    	  <div className="title" >
	      		<h4><b>Albums</b></h4>
	      	</div> 
	      	<div className="albumContainer" > 	
						<Container>
							<Row>
								{
									images.map((img, index)=>
										<Col style={imageContainer} key={index} sm={4}>
								        <img style={imageCard} src={img} alt="Card image cap" />
								    </Col>
									)
								}	
							</Row>
						</Container>
					</div>	
		    </div>

		    <div className="mainContainer footer">
		    	<div className="title" >
	      		<h4><b>Find us</b></h4>
	      	</div>
		      	<a className="navbar-brand px-lg-4 mr-0" href="#">
	            <h5>KETTI<b>MELAM</b></h5>
	          </a>
	          <hr/>
	          <div className="address">
	        		<Container>
								<Row>
									<Col sm={4}>
									<div className="title" >
					      		<h4><b>Navigate</b></h4>
					      	</div>
		                <div className="maps">
		                  <img className="maps" alt="img" src={Maps} />
		                </div>  
									</Col>
									<Col sm={4}>
									<div className="title" >
					      		<h4><b>Address</b></h4>
					      	</div>
									  <p className="center">
		                  2/6, 5th Cross,
		                  Ramalinganagar, K.K.Pudur,
		                  Coimbatore.
		               	</p>
		               	<p>9003599953</p>
									</Col>
									<Col sm={4}>
										<div className="title" >
						      		<h4><b>Social</b></h4>
						      	</div>
						      	<div className="center">
							      	<SocialIcon url="http://linkedin.Component/" style={{ height: 40, width: 40, marginRight:"15px" }} />
				      				<SocialIcon url="http://google.com/" style={{ height: 40, width: 40, marginRight:"15px" }} />
				      				<SocialIcon url="http://facebook.com/" style={{ height: 40, width: 40, marginRight:"15px" }} />
				      				<SocialIcon url="http://twitter.com/" style={{ height: 40, width: 40, marginRight:"15px" }} />
							      	<SocialIcon url="http://instagram.com/" style={{ height: 40, width: 40, marginRight:"15px" }} />
						      	</div>
									</Col>
								</Row>
							</Container>
						</div>  
						<h6 className="address" >
							All Rights Reserved © kettimelam.co.in 
						</h6>
			    </div>

	    	</div>
			);
	}
}

 const imageCard = {
 		width:"360px",
 		height:"220px",
 		borderRadius:"7px",
 		
 }

 const imageContainer ={
 		width:"100%",
 		height:"100%",
 		marginBottom:"25px"
 }

export default HomePage;