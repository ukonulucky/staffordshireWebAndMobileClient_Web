"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { loginSuccess, setAppLoaderAction } from "@/redux/authSlice";
import { useAppDispatch } from "@/redux/store";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function HamburgerMenu(data: {
  isUserLoggedIn: boolean,
  userName: string,
  handleUpdateUserStatus: () => void
}) {

 const { isUserLoggedIn, handleUpdateUserStatus, userName } = data
  const [isOpen, setIsOpen] = useState(false);

const dispatch = useAppDispatch()

  
  const router = useRouter()
  
  const handleLogOut = async () => {
    try {
      dispatch(setAppLoaderAction(true));
      const response = await axios.post(
        "https://magzsalone-c6d08b8d094b.herokuapp.com/api/v1/user/logout"
      );

      const { message } = response.data;

      Swal.fire({
        icon: "success", // Use 'error' icon
        title: "Log Out",
        text: message,
      });
        
      dispatch(setAppLoaderAction(false));
      dispatch(loginSuccess(false));
      router.push("/");
      // Ensure the code runs only on the client side (in the browser)
      if (typeof window !== "undefined") {
        // Get item from localStorage
        localStorage.removeItem("user");
        handleUpdateUserStatus() 
        router.push("/signIn");
      }
    } catch (error: any) {
      dispatch(setAppLoaderAction(false));
      const errorMessage =
        error.response?.data?.message || error?.message || `Unknown error`;
      console.log(`error message:`, errorMessage);

      Swal.fire({
        icon: "error", // Use 'error' icon
        title: "Oops...",
        text: errorMessage,
      });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative p-2 z-50">
      {/* Hamburger Icon */}
      <button
        className="flex flex-col items-center justify-center gap-1 w-8 h-8 absolute right-2"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <motion.div
          className="w-8 h-1 bg-black rounded"
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-8 h-1 bg-black rounded"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-8 h-1 bg-black rounded"
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </button>

      {/* Animated Dropdown Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute left-2 mt-0 w-48 bg-white shadow-lg rounded-lg overflow-hidden"
      >
              <ul className="flex flex-col px-2 py-2 gap-2 ">
                  <Link href="/"    onClick={toggleMenu} className="block cursor-pointer px-2 py-2 text-gray-700 hover:bg-gray-100 rounded">
                  Home
                  </Link>
                  <Link href="/aboutUs"    onClick={toggleMenu} className="block cursor-pointer px-2 py-2 text-gray-700 hover:bg-gray-100 rounded">
                  About Us
                  </Link>
                  <Link href="/contactUs"    onClick={toggleMenu}className="block cursor-pointer px-2 py-2 text-gray-700 hover:bg-gray-100 rounded">
                  Contact Us
                  </Link>
                  <Link href="/services"   onClick={toggleMenu} className="block cursor-pointer  px-2 py-2 text-gray-700 hover:bg-gray-100 rounded">
               Services
                  </Link>
                 
          {!isUserLoggedIn ? (
              <div>
                <Link
                  href={"/signIn"}
                  className="text-[16px] font-[500] font-inter text-[#000000]  cursor-pointer"
                >
                  Sign In
                </Link>
                <span className="text-[16px] font-[500] font-inter text-[#000000] cursor-pointer ">
                  /
                </span>
                <Link
                  href={"/signUp"}
                  className="text-[16px] font-[500] font-inter text-[#000000]  cursor-pointer"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="flex flex-row space-x-5">
                                  <span onClick={() => handleLogOut()} className="text-[16px] font-[500] font-inter text-[#000000] ">
                                      Hello, { userName }
              </span>
                                    <span onClick={() => handleLogOut()} className="text-[16px] cursor-pointer font-[500] font-inter text-[#000000] ">
                Log Out
              </span>
            </div>
            )}
         
        </ul>
      </motion.div>
    </div>
  );
}
