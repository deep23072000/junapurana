import React from 'react';
import homeimg from '../../assets/images/home.jpg'
import TypingAnimation from '../../assets/animation/index';
import img1 from '../../assets/images/landingimg.jpg'

const Landing =()=>{
  
   
   
    return(<>
    {/* ==============running animation==================== */}
          <center><div className="App">
      <TypingAnimation content=" &nbsp;Junapurana.net" />
    </div></center>

    <center><img id='landimg' style={{width:"100%"}} src={img1}></img></center>

    {/* ===========end running animation============ */}
      <section class="about-us-main" id="statics">
   <div class="container">
      <div class="about-con">
         <div class="row gy-5">
            <div class="col-lg-6 col-md-12">
               <div class="con-head" style={{color:"white !important"}}>
                  <h2>Build Customer <i> Mindset </i> with Junapurana</h2>
                  <h5> We Provide Flexibility & Reliability In All Working Environments</h5>
                  <p>Spend and be free, but make no waste. The injury of prodigality leads to this, that he that will not economize will have to agonize. I hold this to be the rule of life, Too much of anything is bad. Hundreds would never have known want if they had not at first known waste.</p>
               </div>
            </div>
            <div class="col-lg-6 col-md-12">
               <div class="about-img">
                  <img style={{zIndex:"-1"}} src={homeimg} alt="Build Your Company"/>
               </div>
            </div>
         </div>
         <div class="row gy-5 counter-number" id="counter">
            <div class="col-lg-4 col-md-6 col-sm-12">
               <div class="about-counter-top" style={{zIndex:"-1"}}>
                  <div class="about-counter" >
                     <div class="number-c count percent" data-count="80">100</div>
                     <div class="number-l">Employees</div>
                  </div>
               </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
               <div class="about-counter-top" style={{zIndex:"-1"}}>
                  <div class="about-counter">
                     <div class="number-c count percent" data-count="60">10000</div>
                     <div class="number-l">Customers</div>
                  </div>
               </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
               <div class="about-counter-top" style={{zIndex:"-1"}}>
                  <div class="about-counter">
                     <div class="number-c count percent" data-count="18">20</div>
                     <div class="number-l">Vehicles</div>
                  </div>
               </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
               <div class="about-counter-top" style={{zIndex:"-1"}}>
                  <div class="about-counter">
                     <div class="number-c count percent p-percent" data-count="98">99.9</div>
                     <div class="number-l">Satisfied Customer</div>
                  </div>
               </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
               <div class="about-counter-top" style={{zIndex:"-1"}}>
                  <div class="about-counter">
                     <div class="number-c count percent" data-count="20">100 tons</div>
                     <div class="number-l">Scrap Collection</div>
                  </div>
               </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
               <div class="about-counter-top" style={{zIndex:"-1"}}>
                  <div class="about-counter">
                     <div class="number-c count percent" data-count="7">124</div>
                     <div class="number-l">Partners</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>

{/* <section class="technologies-we-work-main">
   <div class="technologies-we-work-con">
      <div class="container">
         <div class="con-head text-center">
            <h2>Technologies we work with</h2>
            <h5>Be competitive in this intense market competition by adopting modern technology</h5>
         </div>
         <div class="technologies-we-work-inner">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                   <button class="nav-link active" id="tab8" data-bs-toggle="tab" data-bs-target="#tab-8" type="button" role="tab" aria-controls="tab-8" aria-selected="false">Web development</button>
                 </li>
                 <li class="nav-item" role="presentation">
                   <button class="nav-link" id="tab1" data-bs-toggle="tab" data-bs-target="#tab-1" type="button" role="tab" aria-controls="tab-1" aria-selected="true">Mobile App</button>
                 </li>
                 <li class="nav-item" role="presentation">
                   <button class="nav-link" id="tab2" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab" aria-controls="tab-2" aria-selected="false">Frontend</button>
                 </li>
                 <li class="nav-item" role="presentation">
                   <button class="nav-link" id="tab3" data-bs-toggle="tab" data-bs-target="#tab-3" type="button" role="tab" aria-controls="tab-3" aria-selected="false">Data Science</button>
                 </li>
                 <li class="nav-item" role="presentation">
                   <button class="nav-link" id="tab4" data-bs-toggle="tab" data-bs-target="#tab-4" type="button" role="tab" aria-controls="tab-4" aria-selected="false">Database</button>
                 </li>
                 <li class="nav-item" role="presentation">
                   <button class="nav-link" id="tab5" data-bs-toggle="tab" data-bs-target="#tab-5" type="button" role="tab" aria-controls="tab-5" aria-selected="false">Frameworks</button>
                 </li>
                 <li class="nav-item" role="presentation">
                   <button class="nav-link" id="tab6" data-bs-toggle="tab" data-bs-target="#tab-6" type="button" role="tab" aria-controls="tab-6" aria-selected="false">Backend</button>
                 </li>
                 <li class="nav-item" role="presentation">
                   <button class="nav-link" id="tab7" data-bs-toggle="tab" data-bs-target="#tab-7" type="button" role="tab" aria-controls="tab-7" aria-selected="false"> Programming </button>
                 </li>
                 
            </ul>
         </div>
      </div>
   </div>
</section> */}



<section class="how-we-work-main pb-0" id="work">
   <div class="con-head text-center">
      <h2 style={{color:"white"}}>Our Approach</h2>
      <h5 style={{color:"white"}}>We follow a complete lifecycle to deliver <br/>solutions, that environment needs</h5>
   </div>
   <div class="how-we-work-con">
      <div class="we-work work-box1"  title="Plan">
         <div class="step-no">1</div>
         <div class="work-con">
            <h4>User Message</h4>
            {/* <p>Understanding the idea and gathering all required information of Project</p> */}
         </div>
      </div>
      <div class="we-work work-box2"  title="Define">
         <div class="step-no">2</div>
         <div class="work-con">
            <h4> Pick </h4>
            {/* <p>Preparing a final wireframe & timeline of all functions, elements, modules etc.</p> */}
         </div>
      </div>
      <div class="we-work work-box3"  title="Distribute">
         <div class="step-no">3</div>
         <div class="work-con">
            <h4>Load</h4>
            {/* <p>Scheduling and dividing work among team of developer as per fixed timeline</p> */}
         </div>
      </div>
      <div class="we-work work-box4"  title="Design">
         <div class="step-no">4</div>
         <div class="work-con">
            <h4> Godown </h4>
            {/* <p>Researching new trends, tools, and skills for having best UI/UX from market</p> */}
         </div>
      </div>
      <div class="we-work work-box5" title="Development">
         <div class="step-no">5</div>
         <div class="work-con">
            <h4> Seperate </h4>
            {/* <p>Team leader and developers initiate development as per work distribution</p> */}
         </div>
      </div>
      <div class="we-work work-head">
         <h2>Custom Recylce <br/>waste Lifecycle</h2>
      </div>
      <div class="we-work work-box6"  title="Quality Assurance">
         <div class="step-no">6</div>
         <div class="work-con">
            <h4>Ready For Industry</h4>
            {/* <p>Monitoring & ensuring proper quality maintained as per the Deming (PDCA) Cycle</p> */}
         </div>
      </div>
      <div class="we-work work-box7"  title="Testing">
         <div class="step-no">7</div>
         <div class="work-con">
            <h4>Recycle</h4>
            {/* <p>Evaluating and verifying if there’s any gap, error, bug, or requirement implementation is missing before deploying</p> */}
         </div>
      </div>
      <div class="we-work work-box8"  title="Deploy">
         <div class="step-no">8</div>
         <div class="work-con">
            <h4>Packed</h4>
            {/* <p>Finally, getting product up and running before delivering to clients with all required changes</p> */}
         </div>
      </div>
      <div class="we-work work-box9"  title="Feedback">
         <div class="step-no">9</div>
         <div class="work-con">
            <h4>Ready For User</h4>
            {/* <p>Team passively collect and pin notes of opinions and changes from clients about project</p> */}
         </div>
      </div>
      <div class="we-work work-box10"  title="Maintenance">
         <div class="step-no">10</div>
         <div class="work-con">
            <h4>Sell</h4>
            {/* <p>Dedicated developer is assigned for the project maintenance as requested by clients</p> */}
         </div>
      </div>
   </div>
</section>
    </>)
}

export default Landing;