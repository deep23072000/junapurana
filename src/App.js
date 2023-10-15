
import RateList from './components/rateList';
import Navbar from './components/navbar/index';
import Footer from './components/footer';
import Contact from './components/contact';
import Landing from './components/landing';
import About from './components/about';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar></Navbar>
       <Routes>
       <Route  path='/' element={<Landing/>}></Route>
        <Route  path='/contact' element={<Contact/>}></Route>
        <Route  path='/checkratelist' element={<RateList/>}></Route> 
        <Route  path='/about' element={<About/>}></Route>     
       </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </>
  );
}

export default App;
