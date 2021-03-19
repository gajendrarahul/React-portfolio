import React from 'react';
import logo from '../logo.jpg';
/** font awesome import  */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container">
        <a class="navbar-brand" href="#"><img className="logo" src={logo}></img></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          < FontAwesomeIcon icon={faBars} style={{color:'white'}}/>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">PortFolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contacts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">how works</a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    )
}

export default Navbar
