import React from 'react';

const Othersrate = () => {
  const data = [
    { id: 1, name: 'Beer Bottle', rate: 0.5},
    { id: 2, name: 'Mix-Waste', rate: 4 },
    { id: 3, name: 'Battery' ,rate:60},
    { id: 4, name: 'Tyre', rate: 5 },
    { id: 5, name: 'Women Air', rate: 1000},
    { id: 6, name: 'Small Mattress(Below 6*3Ft)', rate: 1 },
    { id: 7, name: 'Big Mattress(Above 6*3Ft)', rate: 1 },
    ];
    return (
        <>
            <div id="mainrate">
                {/* ==========first========== */}
                <div class="card mb-3" style={{ maxWidth: "95%",background:"transparent",margin:"4%" }}>
                    <div class="row g-0">
                        <div class="col-md-4" style={{padding:"3%",backgroundColor:"white",borderRadius:"4%"}}>
                        <img src="https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_645/xjhvfui3o7drv5jyzqhu.jpg" alt="..." />
                            <h5 class="card-title">Others</h5>
                            <p class="card-text">It Includes, beer bottles, women’s hair, mix-waste, tyre, mattresses etc.</p>
                        </div>
                        <div class="col-md-8">
                        
                            <div id='paperrate'>
                            {data.map(e => (
                    <ul id="rate" key={e.id}>
                      <li key={e.id}>{e.name}</li>
                      <li>
                        {(() => {
                          switch (e.name) {
                            case "Beer Bottles":
                            case "Small Mattress(Below 6*3Ft)":
                            case "Big Mattress(Above 6*3Ft)":

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

export default Othersrate;