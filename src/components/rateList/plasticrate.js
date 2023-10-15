import React from 'react';

const Plasticrate = () => {
 

  const data = [
    { id: 1, name: 'Soft Plastic', rate: 15},
    { id: 2, name: 'Hard Plastic', rate: 3 },
    { id: 3, name: 'Mis Plastic' ,rate:10},
    { id: 4, name: 'Water/Oil Cover', rate: 3 },
    { id: 5, name: 'Polythene (Mix)', rate: 8},
    { id: 6, name: 'Plastic Jar (15ltr)', rate: 10 },
    { id: 7, name: 'Plastic Jar (5ltr)', rate: 2 },
    { id: 8, name: 'Plastic Bori', rate: 4
   },
   


  ];
    return (
        <>
            <div id="mainrate">
                {/* ==========first========== */}
                <div class="card mb-3" style={{ maxWidth: "95%",background:"transparent",margin:"4%" }}>
                    <div class="row g-0">
                        <div class="col-md-4" style={{padding:"3%",backgroundColor:"white",borderRadius:"4%"}}>
                        <img src="https://www.augustachronicle.com/gcdn/presto/2023/06/01/NPOR/c75e2968-07a0-42d0-985c-7ac2829f921f-singleuseplasticwaste.jpeg?width=660&height=438&fit=crop&format=pjpg&auto=webp" class="img-fluid rounded-start" alt="..." />
                            <h5 class="card-title">Plastic</h5>
                            <p class="card-text">Plastics are a wide range of synthetic or semi-synthetic materials that use polymers as a main ingredient. HDPE, LDPE, MLP, PVC, PP, PET etc. are types of plastics used for different purposes.</p>
                        </div>
                        <div class="col-md-8">
                        
                            <div id='paperrate'>
                            {data.map(e => (
                    <ul id="rate" key={e.id}>
                      <li key={e.id}>{e.name}</li>
                      <li>
                        {(() => {
                          switch (e.name) {
                            case "Plastic Jar (15ltr)":
                            case "Plastic Jar (5ltr)":
                              return (
                                <span style={{ color: "green" }}>{e.rate}/Piece</span> 
                              );
                            default:
                              return (
                                <span style={{ color: "green" }}>{e.rate}/Rs</span> 
                              );
                          }
                        })()}
                      </li>
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

export default Plasticrate;