import React from 'react';
import Login from './Pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

import HotelManagment from './Pages/MasterData/HotelManagment';
import AddHotel from './Pages/MasterData/AddHotel';
import CompanyPage from './Pages/MasterData/CompanyPage';
import RoomTypePage from './Pages/MasterData/RoomTypePage';
import ClientPage from './Pages/MasterData/ClientPage';
import CustomerPage from './Pages/MasterData/CustomerPage';
import EmployeePage from './Pages/MasterData/EmpolyeePage';
import RolePage from './Pages/MasterData/RolePage';
import TeamPage from './Pages/MasterData/TeamPage';
import SupplierPage from './Pages/MasterData/SupplierPage';
import DriverPage from './Pages/MasterData/DriverPage';
import CompensationPage from './Pages/MasterData/CompensationPage';
import RoomCategoryPage from './Pages/MasterData/RoomCategory';
import RoomViewPage from './Pages/MasterData/RoomViewPage';
import MealPlanPage from './Pages/MasterData/MealPlanPage';
import CountryCityPage from './Pages/MasterData/CountryCityPage';
import RoomDailyInventoryPage from './Pages/MasterData/RoomDailyInventoryPage';
import TransportationCategoryPage from './Pages/MasterData/TransportationCategoryPage';
import VehiclePage from './Pages/MasterData/VehiclePage';
import TripPage from './Pages/MasterData/TripPage';
import TripVehicleRequirementPage from './Pages/MasterData/TripVehicleRequirement';
import TripLegPage from './Pages/MasterData/TripLegPage';
import TripVehicleAssignmentPage from './Pages/MasterData/TripVehicleAssignmentPage';
import ActivityTypePage from './Pages/MasterData/ActivityTypePage';
import BookingPage from './Pages/MasterData/BookingPage';
import VisaBookingPage from './Pages/MasterData/VisaBookingPage';
import DayUseBookingPage from './Pages/MasterData/DayUseBookingPage';
import PaymentMethodPage from './Pages/MasterData/PaymentMethodPage';
import PaymentPage from './Pages/MasterData/PaymentPage';
import BookingParticipantPage from './Pages/MasterData/BookingParticipantPage';
import AccommodationBookingPage from './Pages/MasterData/AccommodationBookingPage';
import TransportationBookingPage from './Pages/MasterData/TransportationBooking';
import BookedLegPage from './Pages/MasterData/BookedLegPage';
import AdHocTransportationBookingPage from './Pages/MasterData/AdHocTransportationBookingPage';
import ActivityBookingPage from './Pages/MasterData/ActivityBookingPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* The Login page does not need protection */}
          <Route path="/" element={<Login />} />

          {/* All other routes are wrapped within ProtectedRoute */}
          
            <Route path="/hotel-managment" element={<HotelManagment />} />
            <Route path="/hotels/add" element={<AddHotel />} />
            <Route path="/master-data/company" element={<CompanyPage />} />
            <Route path="/master-data/Room-type" element={<RoomTypePage />} />
            <Route path="/master-data/Clients" element={<ClientPage />} />
            <Route path="/master-data/Customers" element={<CustomerPage />} />
            <Route path="/master-data/Employees" element={<EmployeePage />} />
            <Route path="/master-data/Roles" element={<RolePage />} />
            <Route path="/master-data/Teams" element={<TeamPage />} />
            <Route path="/master-data/Suppliers" element={<SupplierPage />} />
            <Route path="/master-data/Drivers" element={<DriverPage />} />
            <Route path="/master-data/Compensation" element={<CompensationPage />} />
            <Route path="/master-data/RoomCategory" element={<RoomCategoryPage />} />
            <Route path="/master-data/RoomView" element={<RoomViewPage />} />
            <Route path="/master-data/MealPlan" element={<MealPlanPage />} />
            <Route path="/master-data/Country&City" element={<CountryCityPage />} />
            <Route path="/master-data/RoomDailyInventory" element={<RoomDailyInventoryPage />} />
            <Route path="/master-data/TransportationCategory" element={<TransportationCategoryPage />} />
            <Route path="/master-data/Vehicle" element={<VehiclePage />} />
            <Route path="/master-data/Trip" element={<TripPage />} />
            <Route path="/master-data/TripVehicleRequirement" element={<TripVehicleRequirementPage />} />
            <Route path="/master-data/TripLeg" element={<TripLegPage />} />
            <Route path="/master-data/TripVehicleAssignment" element={<TripVehicleAssignmentPage />} />
            <Route path="/master-data/ActivityType" element={<ActivityTypePage />} />
            <Route path="/master-data/Booking" element={<BookingPage />} />
            <Route path="/master-data/VisaBooking" element={<VisaBookingPage />} />
            <Route path="/master-data/DayUseBooking" element={<DayUseBookingPage />} />
            <Route path="/master-data/PaymentMethod" element={<PaymentMethodPage />} />
            <Route path="/master-data/Payment" element={<PaymentPage />} />
            <Route path="/master-data/BookingParticipant" element={<BookingParticipantPage />} />
            <Route path="/master-data/AccommodationBooking" element={<AccommodationBookingPage />} />
            <Route path="/master-data/TransportationBooking" element={<TransportationBookingPage />} />
            <Route path="/master-data/BookedLeg" element={<BookedLegPage />} />
            <Route path="/master-data/AdHocTransportationBooking" element={<AdHocTransportationBookingPage />} />
            <Route path="/master-data/ActivityBooking" element={<ActivityBookingPage />} />
       
        </Routes>
      </div>
    </Router>
  );
}

export default App;
