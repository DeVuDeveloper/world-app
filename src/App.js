import { Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage/Home';
import CountryInfos from './components/countryDetails/countryInfo';
import Navbar from './components/navbar/Navbar';
import './App.css';

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/country" element={<CountryInfos />} />
      </Routes>
    </>
  );
}

export default App;