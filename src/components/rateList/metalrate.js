import React from 'react';

const Metalrate = () => {
    

  const data = [
    { id: 1, name: 'Iron', rate: 28 },
    { id: 2, name: 'Tin', rate: 20 },
    { id: 3, name: 'Steel' ,rate:45},
    { id: 4, name: 'Brass', rate: 300 },
    { id: 5, name: 'Copper', rate: 400},
    { id: 6, name: 'Alumunium', rate: 100 },
    { id: 7, name: 'Alumunium Cable', rate: 25 },
    { id: 8, name: 'Copper Cable', rate: 60 },
    { id: 9, name: 'Beverages Cans', rate: 80 },


  ];
    return (
        <>
            <div id="mainrate">
                {/* ==========first========== */}
                <div class="card mb-3" style={{ maxWidth: "95%",background:"transparent",margin:"4%" }}>
                    <div class="row g-0">
                        <div class="col-md-4" style={{padding:"3%",backgroundColor:"white",borderRadius:"4%"}}>
                        <img src="https://www.moleymagneticsinc.com/wp-content/uploads/2021/07/MoleyMagnetics-72625-Metal-Recycling-Changed-blogbanner1.jpg" alt="..." />
                            <h5 class="card-title">Metals</h5>
                            <p class="card-text">Scrap metal are an important source of industrial metals and alloys, particularly in the production of steel, copper, lead, aluminum, and zinc. Smaller amounts of tin, nickel, magnesium, and precious metals are also recovered from scrap.</p>
                        </div>
                        <div class="col-md-8">
                        
                            <div id='paperrate'>
                            {data.map( e =>(
                            <ul id="rate" key={e.id}>
                                <li key={e.id}>{e.name}</li>
                                <li><span style={{ color: "green" }}>{e.rate}</span>/kg</li>  
                            </ul>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
                </>
            )
                            }

export default Metalrate;