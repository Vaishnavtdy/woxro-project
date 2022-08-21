import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Banner2 from './components/Banner2';
import NavBar from './components/NavBar';
import NavLinks from './components/NavLinks';
import SectionLinks from './components/SectionLinks';
import ServiceContainer from './components/ServiceContainer';
import Footer from './components/Footer';

function App() {
  const [serviceData, setServiceData] = useState([])
  useEffect(() => {
   axios.get('https://api.xentice.com/api/postadSelect').then(data=>setServiceData(data.data))
  },[])
  return (
    <div className="App">
      <NavBar />
      <div style={{backgroundColor: '#012b72', color:'white', padding:'20px', fontSize:'14px', marginTop:'90px'}}>
        <NavLinks />
      </div>
      <Banner />
      <div style={{backgroundColor: 'white', color:'black', padding:'25px', fontSize:'15px'}}>
        <SectionLinks />
      </div>
      <Banner2 />
      <ServiceContainer data={serviceData}/>
      <Footer />
    </div>
  );
}

export default App;
