import logo from "../../assets/images/juna.png";
import React, { useState } from 'react';
import axios from 'axios';

const Contact =()=>{
   const [formData, setFormData] = useState({ cName:'', uName:'',mob:'',requirement:'' });

   const handleSubmit = async (e) => {
     e.preventDefault();
     try {
       const response = await axios.post('http://localhost:5000/contact', formData);
       
       if (response.status === 201) {
         setFormData({ cName:'', uName:'',mob:'',requirement:'' });
         console.log('Data sent successfully.');
       } else {
         alert("successfully submitted")
         setFormData({ cName:'', uName:'',mob:'',requirement:'' });

         // console.error('Failed to send data.');
       }
     } catch (error) {
       console.error('Error:', error);
     }
   };
    return(<>
{/* ========================================= */}
<div class="card mb-3" id="card">
  <div class="row g-0">
    {/* <div class="col-md-6" style={{display:"flex",justifyContent:"center",marginTop:"5%"}}>
     <img src={logo} style={{borderTopRightRadius:"",height:"300px"}} class="img-fluid rounded-start" alt="..."/>
    </div> */}
    <div class="col-md-12">
      <div class="card-body">
      <div class="col-lg-12 col-md-12 col-sm-12 text-left">
            <div class="home-contact-form">
               <h3>Let’s Talk</h3>
               <form name="applyJobForm" id="applyJobForm" onSubmit={handleSubmit}>
                  <div class="form-row">
                     <div class="col-lg-12 col-md-12">
                        <label>Your Name <span>*</span></label>
                        <input type="text" class="form-control" placeholder="Your Name" name="name" id="name" onChange={(e) => setFormData({ ...formData, cName: e.target.value })} value={formData.cName}/>
                     </div>
                     <div class="col-lg-6 col-md-12">
                        <label>Email Address <span>*</span></label>
                        <input type="email" class="form-control" placeholder="Email Address" name="email" id="email" onChange={(e) => setFormData({ ...formData, uName: e.target.value })} value={formData.uName}/>
                     </div>
                     
                     <div class="col-lg-6 col-md-12">
                        <label>Contact Number</label>
                        <input type="tel" class="form-control" placeholder="Contact Number" name="Contact_Number" maxlength="10" id="alternative_number" onChange={(e) => setFormData({ ...formData, mob: e.target.value })} value={formData.mob}/>
                     </div>
                     
                    
                     
                     
                     <div class="col-lg-12 col-md-12 p-1">
                        <label>Project Requirement <span>*</span></label>
                        <textarea class="form-control" rows="3" name="project_requirement"  id="project_requirement" placeholder="Project Requirement" onChange={(e) => setFormData({ ...formData, requirement: e.target.value })} value={formData.requirement}></textarea>
                     </div>
                     
                  </div>
                  <button type="submit" class="btn btn-primary" id="jobform_submit">Send Message</button>
               </form>
               <br/>
               <div class="alert alert-success alert-dismissible success" style={{display: "none"}}>
               <span id="success_new"></span>
              </div>  
              <div class="alert alert-error alert-dismissible error" style={{display: "none"}}>
                     <span id="error_new"></span>
              </div> 
            </div>
         </div>

      </div>
    </div>
  </div>
</div>
    </>)
}

export default Contact;