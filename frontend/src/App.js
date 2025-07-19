import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import api from './services/api';
import './App.css';
import HotelManagment from './Pages/MasterData/HotelManagment';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route 
            path="/login" 
            element={
              api.isAuthenticated() ? 
              <Navigate to="/hotel-managment" replace /> : 
              <Login />
            } 
          />
          
          {/* Protected Routes */}
          <Route 
            path="/hotel-managment" 
            element={
              <ProtectedRoute>
                <HotelManagment />
              </ProtectedRoute>
            } 
          />
          
          {/* Default redirect */}
          <Route 
            path="/" 
            element={<Navigate to="/hotel-managment" replace />} 
          />
          
          {/* Catch all */}
          <Route 
            path="*" 
            element={<Navigate to="/hotel-managment" replace />} 
          />
        </Routes>
      </div>
    </Router>
  );
}