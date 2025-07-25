import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute'; // Your ProtectedRoute component
import Sidebar from './components/Sidebar'; // Your Sidebar component
import api from './services/api'; // Your authentication API service
import './App.css'; // Your main CSS file

// Import your page components
import HotelManagment from './Pages/MasterData/HotelManagment';
import AddHotel from './Pages/MasterData/AddHotel';

function App() {
  return (
    <Router>
      <div className="App flex min-h-screen"> {/* Added flex and min-h-screen for layout */}
        {/* Sidebar - This will be visible on all routes rendered within the main flex container */}
        {/* You might want conditional rendering for the sidebar (e.g., hide on login page) */}
        {/* For simplicity, it's always present here. */}
        {/* If you want to hide it on the login page, you'd move this into ProtectedRoute or use a more complex layout */}
        <Sidebar />

        {/* Main content area, which will contain the routed components */}
        <div className="flex-1">
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
            {/* Wrap HotelManagment and AddHotel with ProtectedRoute */}
            <Route
              path="/hotel-managment"
              element={
                <ProtectedRoute>
                  <HotelManagment />
                </ProtectedRoute>
              }
            />
            <Route
              path="/hotels/add" 
              element={
                <ProtectedRoute>
                  <AddHotel />
                </ProtectedRoute>
              }
            />

            {/* Default redirect for the root path */}
            <Route
              path="/"
              element={<Navigate to="/hotel-managment" replace />}
            />

            {/* Catch-all route for any undefined paths, redirects to hotel management */}
            <Route
              path="*"
              element={<Navigate to="/hotel-managment" replace />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
