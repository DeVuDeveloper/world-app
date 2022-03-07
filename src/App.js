import { Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage/Home';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
