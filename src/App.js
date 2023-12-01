import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Landingpage from './pages/Landingpage';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Watchhistory from './pages/Watchhistory';


function App() {

  return (
 
 <>

    <div className='home '>
    <Header />

        <div className=" m-5">

  
          <Routes>
  
            <Route path='/' element={<Landingpage/>}/>
  
            <Route path='/home' element={<Homepage/>} />
  
            <Route path='/watchhistory' element={<Watchhistory/>} />
  
            
          </Routes>
  
          {/* <Landingpage /> */}
  
        </div>
        
      <Footer />
    </div>
 </>

  );
}

export default App;
