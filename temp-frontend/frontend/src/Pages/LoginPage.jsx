import { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { HiEye, HiEyeOff } from "react-icons/hi"; 
import api from "../services/api";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {

      const data= await api.signIn(formData.email , formData.password);

      // Redirect to dashboard or home page
      window.location.href = '/hotelmana'; // or wherever you want to redirect
      
    } catch (err) {
      setError(err.message || 'An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full bg-gradient-to-br from-[#383234] to-[#FFCC2A] flex items-center justify-center relative">
      
      <div className="absolute top-5 right-5">
        <img src="/logo.png" alt="Destination Logo" className="w-12 h-12" />
      </div>

      <div className="bg-gray-900 bg-opacity-70 rounded-md shadow-lg p-8 w-96">
        <h2 className="text-gray-200 text-xl font-semibold text-center mb-6">
          Login to your account
        </h2>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-500 bg-opacity-20 border border-red-500 rounded-md">
            <p className="text-red-300 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
              required
              className="w-full p-2.5 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
                className="w-full p-2.5 pr-10 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center text-gray-400 pr-[10px]"
              >
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </button>
            </div>
          </div>

          <Button 
            type="submit"
            disabled={loading}
            className="w-full bg-[#fcd34d] hover:bg-[#fbbf24] text-gray-900 font-semibold disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login now"}
          </Button>
        </form>
      </div>
    </div>
  );
}