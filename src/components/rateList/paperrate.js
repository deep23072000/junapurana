import React from 'react';

const Paperrate = () => {
  const data = [
    { id: 1, name: 'Newspaper', rate: 14 },
    { id: 2, name: 'Books', rate: 11 },
    { id: 3, name: 'Cartoon' ,rate:9},
    { id: 4, name: 'Magazines', rate: 8 },
    { id: 5, name: 'Whites Paper', rate: 10},
    { id: 6, name: 'Grey Board', rate: 1.5 },
    { id: 7, name: 'Record Paper', rate: 12 },
    { id: 8, name: 'Copy', rate: 10 },
    { id: 9, name: 'Used Beverages Cartons', rate: 5 },


  ];
    return (
        <>
            <div id="mainrate">
                {/* ==========first========== */}
                <div class="card mb-3" style={{ maxWidth: "95%",background:"transparent",margin:"4%" }}>
                    <div class="row g-0">
                        <div class="col-md-4" style={{padding:"3%",backgroundColor:"white",borderRadius:"4%"}}>
                            <img src="https://5.imimg.com/data5/QX/TW/MY-36710290/vhgf-500x500.jpg" class="img-fluid rounded-start" alt="..." />
                            <h5 class="card-title">Paper</h5>
                            <p class="card-text">Paper is manufactured in thin sheets from the pulp of wood or other fibrous substances. Paper scrap includes newspaper, books cartons, magazines, Beverage carton etc.</p>
                        </div>
                        <div class="col-md-8" id='mm'>
                        
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

export default Paperrate