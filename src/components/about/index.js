import img1 from '../../assets/images/owner.jpg';
import img2 from  "../../assets/images/three/1.svg";
import img3 from  "../../assets/images/three/2.svg";

import img4 from  "../../assets/images/three/3.svg";

const About=()=>{
    return(<>
       
    <div class=" mb-3" style={{maxWidth: "900px",marginTop: "80px",marginLeft:"auto" ,marginRight: "auto"}}>
        <div class="row g-0">
            <div class="col-md-5">
            <img class="card-img" src={img1} style={{marginTop: "40px",width:"100%"}}/>
            </div>
            <div class="col-md-7">
                <div class="card-body">
                    <div style={{marginLeft: "20px"}}>
                        <p class="card-title" style={{margin: "20px",fontWeight: "500",fontSize: "35px"}}>Founders Message</p>
                        Mr. Rishab, who co-founded The Junapurana.kabadi with in 2023 always wanted to do something out of the box but he had never anticipated something as bizarre as “waste” would drive him to bring the solution until he detected the biggest loopholes associated with waste management sector by then.
The unorganized sector made it a task for him to sell his own household scrap, it is then that he decided to infuse technology into the sector making it easy for thousands of consumers to sell scrap online.

                    </div>

                </div>
            </div>
        </div>
    </div>
    {/* ============================== */}
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col" style={{padding:"5%",background:"transparent"}}>
    <div class="card" style={{backgroundColor:"green",border:"2px solid white"}}>
      <div class="card-body" style={{color:"white"}}>
        <h5 class="card-title">Vision</h5>
        <p class="card-text">Our vision is to bring a circular economy into a reality where used products are manufactured into new products to minimize the over-exploitation of natural resources and maximize recycling.</p>
      </div>
    </div>
  </div>
  <div class="col" style={{padding:"5%",background:"transparent"}}>
    <div class="card" style={{backgroundColor:"green",border:"2px solid white"}}>
      
      <div class="card-body" style={{color:"white"}}>
        <h5 class="card-title">Mission</h5>
        <p class="card-text">Our mission is to make a world where nothing is wasted, the communities from around the globe building an eco-system of sustainable living through doing the right waste treatment that is to get it recycled.</p>
      </div>
    </div>
  </div>
  <div class="col" style={{padding:"5%",background:"transparent"}}>
    <div class="card" style={{backgroundColor:"green",border:"2px solid white"}}>
      <div class="card-body" style={{color:"white"}}>
        <h5 class="card-title">Goal</h5>
        <p class="card-text">Through continuous innovation of technology, our goal is to make recycling achievable and accessible to all, from institutions to individuals.</p>
      </div>
    </div>
  </div>
  </div>
    {/* ============================================ */}
    <div class="row row-cols-1 row-cols-md-3 g-4" >
  <div class="col" >
    <div class="card h-100" style={{background:"transparent",margin:"5%"}}>
   <center>   <img src={img2} class="card-img-top" alt="..."/></center>
      <div class="card-body">
        <h5 class="card-title">Transparency</h5>
        <p class="card-text">Our App enables users to access the impact marked through the waste sold and recycled in terms of resources and energy saved.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100" style={{background:"transparent",margin:"5%"}}>
   <center><img src={img3} class="card-img-top" alt="..."/></center>
      <div class="card-body">
        <h5 class="card-title">Traceability</h5>
        <p class="card-text">Our 4 different apps for users, pickup executives, city managers & MRF centers are helping us organize the unorganized waste sector in terms of keeping a track record of waste sold, segregated, bailed, transported, and recycled.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100" style={{background:"transparent",margin:"5%"}}>
  <center> <img src={img4} class="card-img-top" alt="..."/></center>
      <div class="card-body">
        <h5 class="card-title">Scalability</h5>
        <p class="card-text">Our 4 different apps for users, pickup executives, city managers & MRF centers are helping us organize the unorganized waste sector in terms of keeping a track record of waste sold, segregated, bailed, transported, and recycled.</p>
      </div>
    </div>
  </div>
</div>
    </>)
}

export default About;