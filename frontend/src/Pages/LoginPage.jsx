import { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { HiEye, HiEyeOff } from "react-icons/hi"; 

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
   
    <div className="h-screen w-full bg-gradient-to-br from-[#383234] to-[#FFCC2A] flex items-center justify-center relative">
     
      <div className="absolute top-5 right-5">
       
        <img src="/logo.png" alt="Destination Logo" className="w-12 h-12" />
      </div>

      
      <div className="bg-gray-900 bg-opacity-70 rounded-md shadow-lg p-8 w-96">
    
        <h2 className="text-gray-200 text-xl font-semibold text-center mb-6">
          Login to your account
        </h2>

        {/* Email */}
        <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
            Email
        </label>
        <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full p-2.5 rounded-md bg-white text-gray placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className="w-full p-2.5 pr-10 rounded-md bg-white text-gray placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 [appearance:textfield]"
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

    
        <Button className="w-full bg-[#fcd34d] hover:bg-[#fbbf24] text-gray-900 font-semibold"> {/* Changed from yellow-400 to a custom shade and text to black */}
          Login now
        </Button>
      </div>
    </div>
  );
}