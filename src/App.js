import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { GlobalData } from './redux/API/getGlobalData';
import Homepage from './components/homepage/Home';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GlobalData());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
