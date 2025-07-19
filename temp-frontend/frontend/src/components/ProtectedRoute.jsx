import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      if (api.isAuthenticated()) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        navigate('/login');
      }
    };

    checkAuth();
  }, [navigate]);

  if (isAuthenticated === null) {
    // Loading state
    return (
      <div className="h-screen w-full bg-gradient-to-br from-[#383234] to-[#FFCC2A] flex items-center justify-center">
        <div className="bg-gray-900 bg-opacity-70 rounded-md shadow-lg p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400 mx-auto"></div>
          <p className="text-gray-200 text-center mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect to login
  }

  return children;
}