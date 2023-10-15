// import { Color } from 'three';
import logo from '../../assets/images/juna.png';
import '../../assets/styles/navbar.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';

import {Link} from 'react-router-dom';






const Navbar = () => {
    // =====whats=======

  const phoneNumber = '+919009178400'; // Replace with the recipient's phone number (including country code)
  const message = 'जूना पुराना से जुड़ने के लिए धन्यवाद..... आप क्या बेचना चाहते हैं .....आपसे जल्दी ही संपर्क किया जाएगा....'
  ; // Replace with your desired message

  const handleClick = () => {
    window.open(`whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`);
  };

  

  return (
    <>
     
      <div style={{backgroundColor:"white"}}>
      <center><nav id='nav' class="navbar navbar-expand-lg" >
        <div class="container-fluid" style={{backgroundColor:"white !important"}}>
          <Link class="navbar-brand" to="/"><img className='logo' src={logo} /></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span style={{ border: "none !important" }}><i id='bars' className='fa fa-bars'></i></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/about">About us</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link>
              </li>
             <li> <Link to="/checkratelist" class="nav-link active" aria-current="page">Check Rate List</Link></li>
              
            </ul>
            
            
             <center> <button style={{ color: "white",width:"150px",backgroundColor:"red",marginBottom:"10px" }} onClick={handleClick} >Sell Scrap</button>

            <button onClick={handleClick} style={{ color: "white",width:"350px",backgroundColor:"red",marginBottom:"10px" }}>Send WhatsApp Message</button>
            </center>
           
          </div>
        </div>
      </nav>
      </center>
      </div>


      <svg className='svgimg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,256L24,261.3C48,267,96,277,144,250.7C192,224,240,160,288,128C336,96,384,96,432,106.7C480,117,528,139,576,144C624,149,672,139,720,160C768,181,816,235,864,229.3C912,224,960,160,1008,133.3C1056,107,1104,117,1152,138.7C1200,160,1248,192,1296,186.7C1344,181,1392,139,1416,117.3L1440,96L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
    </>
  )
}

export default Navbar;