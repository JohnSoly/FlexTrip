import React from 'react';
import Login from './Pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HotelManagment from './Pages/MasterData/HotelManagment';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/hotel-management" element={<HotelManagment />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;