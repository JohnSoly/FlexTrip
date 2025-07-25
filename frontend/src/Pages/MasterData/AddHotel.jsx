import React, { useState } from "react";
import { HiOutlineMail, HiPlus } from "react-icons/hi";
import Breadcrumb from "../../components/BreadCrumb";
import DynamicInputField from "../../components/InputField";
import StarRatingInput from "../../components/StarRatingInput";
import MultiSelectBadges from "../../components/Badge";
import Sidebar from "../../components/Sidebar";
import ButtonComponent from "../../components/ButtonComponent";

const AddHotel = () => {
  const [hotelName, setHotelName] = useState("");
  const [starRating, setStarRating] = useState(0);
  const [country, setCountry] = useState("Egypt");
  const [city, setCity] = useState("Egypt");
  const [address, setAddress] = useState("");
  const [contacts, setContacts] = useState([
    { method: "Email", detail: "" },
  ]);
  
  const [selectedRoomCategories, setSelectedRoomCategories] = useState([]);
  const [selectedRoomViews, setSelectedRoomViews] = useState([]);
  const [selectedMealPlans, setSelectedMealPlans] = useState([]);

  const countryOptions = [
    { value: "Egypt", label: "Egypt" },
    { value: "USA", label: "USA" },
    { value: "France", label: "France" },
    { value: "Germany", label: "Germany" },
    { value: "UK", label: "UK" },
    { value: "Japan", label: "Japan" },
  ];

  const cityOptions = [
    { value: "Egypt", label: "Egypt" },
    { value: "Cairo", label: "Cairo" },
    { value: "Alexandria", label: "Alexandria" },
    { value: "Luxor", label: "Luxor" },
  ];

  const contactMethodOptions = [
    { value: "Email", label: "Email" },
    { value: "Phone", label: "Phone" },
    { value: "Fax", label: "Fax" },
  ];

  const roomCategoryOptions = ["Deluxe", "Standard", "Superior", "Suite", "Family"];
  const roomViewOptions = ["Sea View", "Garden View", "Pool View", "Back View", "City View"];
  const mealPlanOptions = ["BB", "HB", "FB", "AI"];

  const handleContactChange = (index, key, value) => {
    const updated = [...contacts];
    updated[index][key] = value;
    setContacts(updated);
  };
  const addContactField = () => {
    setContacts([...contacts, { method: "Email", detail: "" }]);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const hotelData = {
      hotelName,
      starRating,
      country,
      city,
      address,
      contacts,
      selectedRoomCategories,
      selectedRoomViews,
      selectedMealPlans,
    };
    console.log("Submitting Hotel Data:", hotelData);
  };

  return (
    <div className="flex h-screen font-inter">
      <Sidebar />
      <div className="flex-1 p-8 bg-white overflow-auto">
        <h1 className="text-2xl font-bold text-gray-800">Add Hotel</h1>

        <Breadcrumb
          paths={[
            { name: "Home", href: "/" },
            { name: "Hotels", href: "/hotel-managment" },
            { name: "Add Hotel" },
          ]}
        />

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Hotel Details Section */}
          <div className="bg-white p-6 rounded-lg shadow-md overflow-auto">
            <h2 className="text-xl font-semibold mb-4">Hotel Details</h2>
            <div className="space-y-4">
              {/* First row: hotel name & star rating */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                <DynamicInputField
                  type="text"
                  id="hotelName"
                  label="Hotel name"
                  placeholder="Enter hotel name"
                  value={hotelName}
                  onChange={setHotelName}
                  showClearButton
                  required
                />
                <StarRatingInput
                  label="Star Rating"
                  rating={starRating}
                  onRatingChange={setStarRating}
                />
              </div>

              {/* Second row: country, city, address */}
              <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                <DynamicInputField
                  type="select"
                  id="country"
                  label="Select Country"
                  options={countryOptions}
                  value={country}
                  onChange={setCountry}
                  required
                />
                <DynamicInputField
                  type="select"
                  id="city"
                  label="Select City"
                  options={cityOptions}
                  value={city}
                  onChange={setCity}
                  required
                />
                <DynamicInputField
                  type="text"
                  id="address"
                  label="Address"
                  placeholder="Enter Address"
                  value={address}
                  onChange={setAddress}
                  showClearButton
                  required
                />
              </div>
            </div>
         

          {/* Contact Information Section */}
          <div className="bg-white">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            {contacts.map((contact, index) => (
                <div key={index} className="grid grid-cols-3 md:grid-cols-3 gap-4 items-end ">
                <DynamicInputField
                    type="select"
                    id={`contactMethod-${index}`}
                    label="Select Contact Method"
                    options={contactMethodOptions}
                    value={contact.method}
                    onChange={(val) => handleContactChange(index, "method", val)}
                    required
                />

                <DynamicInputField
                    type={contact.method === "Email" ? "email" : "text"}
                    id={`contactDetails-${index}`}
                    label="Contact Details"
                    placeholder={`Enter ${contact.method}`}
                    icon={contact.method === "Email" ? HiOutlineMail : undefined}
                    value={contact.detail}
                    onChange={(val) => handleContactChange(index, "detail", val)}
                    showClearButton
                    required
                />
                </div>
            ))}


            <ButtonComponent
                type="button"
                color="yellow"
                className="w-fit px-2 py-1 text-sm flex items-center space-x-1"
                onClick={addContactField}
            >
                <HiPlus className="text-sm" />
                <span>Add Contact</span>
            </ButtonComponent>
            </div>


          {/* Room Categories Section */}
          <div className="bg-white ">
            <h2 className="text-xl font-semibold mb-4">Room Categories</h2>
            <MultiSelectBadges
              label="Room Categories"
              helpText="Please Select One or more Categories from below"
              options={roomCategoryOptions}
              selectedOptions={selectedRoomCategories}
              onSelectionChange={setSelectedRoomCategories}
            />
          </div>

          {/* Room View Section */}
          <div className="bg-white">
            <h2 className="text-xl font-semibold mb-4">Room View</h2>
            <MultiSelectBadges
              label="Room View"
              helpText="Please Select One or more Room View from below"
              options={roomViewOptions}
              selectedOptions={selectedRoomViews}
              onSelectionChange={setSelectedRoomViews}
            />
          </div>

          {/* Meal Plans Section */}
          <div className="bg-white ">
            <h2 className="text-xl font-semibold mb-4">Meal Plans</h2>
            <MultiSelectBadges
              label="Meal Plans"
              helpText="Please Select One or more Meal Plan from below"
              options={mealPlanOptions}
              selectedOptions={selectedMealPlans}
              onSelectionChange={setSelectedMealPlans}
            />
          </div>
         </div>
          {/* Submit Button */}
          <div className="flex justify-end p-6">
            <ButtonComponent type="submit" color="yellow" className=" sm:w-auto">
              Save Hotel
            </ButtonComponent>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHotel;
