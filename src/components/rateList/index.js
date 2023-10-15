import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Paperrate from './paperrate';
import Plasticrate from './plasticrate';
import Metalrate from './metalrate';
import Ewasterate from './ewaste';
import Othersrate from './othersrate';
import All from './all';
// import { BrowserRouter,Route,Routes } from 'react-router-dom';
const RateList = () => {
    const [activeComponent, setActiveComponent] = useState(1);

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 1:
        return <All/>;
      case 2:
        return <Paperrate />;
      case 3:
        return <Plasticrate />;
      case 4:
        return <Metalrate />;
      case 5:
        return <Ewasterate />;
      case 6:
        return <Othersrate />;
      default:
        return null;
    }
  };
   
    return (
        <>
            <div id="mainrate">
                {/* ==========first========== */}
                <center><h1 style={{ color: "white", marginTop: "50px" }}>Scrap Prizes</h1></center>
                <center><div id="buttons">
                    <button onClick={() => setActiveComponent(1)}><i class="fa fa-bars"></i>All</button>
                    <button onClick={() => setActiveComponent(2)}><i class="fa-regular fa-newspaper"></i>Paper</button>
                    <button onClick={() => setActiveComponent(3)}><i class="fa-solid fa-bottle-water"></i>Plastic</button>
                    <button onClick={() => setActiveComponent(4)}><i class="fa-solid fa-truck-front"></i>Metal</button>
                    <button onClick={() => setActiveComponent(5)}><i class="fa-solid fa-microchip"></i>E-waste</button>
                    <button onClick={() => setActiveComponent(6)}><i class="fa-solid fa-asterisk"></i>Others</button>
                </div>
                </center>
                {renderActiveComponent()}
                
            </div>

        </>
    )
}

export default RateList;

