// import {Link} from 'react-router-dom';
import React, { useState } from 'react';
const Footer = () =>{
  const email = 'junapurana.kabadi@gmail.com'; // Replace with the recipient's email address
  const insta = 'https://www.instagram.com/junapurana.kabadi';
  const handleClick1 = () => {
    window.location.href = `${insta}`;
  };

  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };
    return(
        <>
         <section>
        <div class="written4">
          <div style={{display: "flex", margin: "20px"}}>
            
            <div>
              <h6>Free Picking</h6>
              <p>Tell what you want to sell</p>
            </div>
          </div>

          <div style={{display: "flex", margin: "20px"}}>
            
            <div>
              <h6>Money</h6>
              <p>After taking waste</p>
            </div>
          </div>

          <div style={{display: "flex", margin: "20px"}}>
           
            <div>
              <h6>Online Support</h6>
              <p>24 hours a day, 7 days a week</p>
            </div>
          </div>

          <div style={{display: "flex", margin: "20px"}}>
            
            <div>
              <h6>Flexible</h6>
              <p>contact via multiple sources</p>
            </div>
          </div>
        </div>
      </section>

     

      {/* <!-- =========================footer====================== --> */}
      <div class="text-center">
        <div>  <i onClick={handleClick1} class="fa fa-instagram"  style={{padding: "20px",fontSize:"30px"}}></i>
        
        
      <i onClick={handleClick} style={{padding: "20px",fontSize:"30px"}} class="fa fa-envelope"></i>

    </div>
       {/* <Link to="mailto:junapurana.kabadi@gmail.com"><i class="fa fa-envelope" style={{padding: "20px",fontSize:"30px"}}></i></Link> */}
        <div class="card-body" style={{padding: "20px 0px 70px 0px"}}>
          <h5 class="card-title" style={{fontSize: "12px",color:"white"}}>
          junapurana<sup><i class="fa-solid fa-copyright"></i> </sup>
          </h5>
          <div>
            <a href="#"></a>
          </div>
        </div>
      </div>
        </>
    )
}

export default Footer;