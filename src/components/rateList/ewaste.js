import React from 'react';

const Ewasterate = () => {
  const data = [
    { id: 1, name: 'E-waste', rate: 12 },
    { id: 2, name: 'Fridge', rate: 300 },
    { id: 3, name: 'Air Conditioner' ,rate:800},
    { id: 4, name: 'Printer', rate: 15 },
    { id: 5, name: 'Laptop Battery', rate: 75 },
    { id: 6, name: 'Mobile Battery', rate: 20 },

  ];

  return (
    <>
      <div id="mainrate">
        {/* ==========first========== */}
       
          <div
            className="card mb-3"
            style={{ maxWidth: "95%", background: "transparent", margin: "4%" }}
          >
            <div className="row g-0">
              <div
                className="col-md-4"
                style={{ padding: "3%", backgroundColor: "white", borderRadius: "4%" }}
              >
                <img
                  src="https://img.indiafilings.com/learn/wp-content/uploads/2019/12/12004105/eWaste.jpg"
                  alt="..."
                />
                <h5 className="card-title">E-waste</h5>
                <p className="card-text">
                E-waste is electronic products that are unwanted, not working, and nearing or at the end of their “useful life.” It includes TV, refrigerator, mobile phones, printers etc.
                </p>
              </div>
              <div className="col-md-8">
                <div id='paperrate'>
                  {data.map(e => (
                    <ul id="rate" key={e.id}>
                      <li key={e.id}>{e.name}</li>
                      <li>
                        {(() => {
                          switch (e.name) {
                            case "Fridge":
                            case "Air Conditioner":
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
  );
};

export default Ewasterate;
