import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { GlobalDataFromAPI } from './redux/duckFolder/duckFile';
import Homepage from './components/homepage/Home';
import CountryInfos from './components/countryDetails/CountryInfo';
import Navbar from './components/navbar/Navbar';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GlobalDataFromAPI());
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:cd" element={<CountryInfos />} />
      </Routes>
    </>
  );
};

export default App;
