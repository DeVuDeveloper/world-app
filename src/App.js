import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { GlobalData } from './redux/API/getGlobalData';
import Homepage from './components/homepage/Home';
import Navbar from './components/navbar/Navbar';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GlobalData());
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
