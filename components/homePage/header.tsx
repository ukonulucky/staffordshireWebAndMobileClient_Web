"use client";
import { routes } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import HamburgerMenu from "./handBurger";
import { loginSuccess, setAppLoaderAction } from "@/redux/authSlice";
import { useAppDispatch } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

function HeaderComp() {
    const [isUserLoggedIn, setisUserLoggedIn] = useState(false);
    
    const [userName, setuserName] = useState("")

  const dispatch = useAppDispatch();

  const router = useRouter();

  useEffect(() => {
    // Ensure the code runs only on the client side (in the browser)
    if (typeof window !== "undefined") {
      // Get item from localStorage
        const value = localStorage.getItem("user");

        
      if (value) {
          setisUserLoggedIn(true);
          const { fullName } = JSON.parse(value)
          console.log("fullName", fullName)
          setuserName(fullName)
      } else {
        setisUserLoggedIn(false);
      }
    }
  }, []);
    
    
    const handleUpdateUserStatus = () => { 
        setisUserLoggedIn(!isUserLoggedIn)
    }
    console.log("user login satte", isUserLoggedIn)

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
        setisUserLoggedIn(false);
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

  return (
    <div>
      <div className="block sm:hidden">
              <HamburgerMenu userName={ userName } handleUpdateUserStatus ={  handleUpdateUserStatus } isUserLoggedIn ={ isUserLoggedIn } />
      </div>
      <div className="hidden sm:block">
        <div className="flex flex-row justify-center items-center w-full bg-[#6B0606] space-x-4 py-2">
          <Image
            src={"/images/fire.png"}
            width={24}
            height={24}
            alt="fire pic"
          />
          <span className="text-[16px] font-[500] font-inter text-white">
            Only this month 20% discount on all services
          </span>
          <Image
            src={"/images/fire.png"}
            width={24}
            height={24}
            alt="fire pic"
          />
        </div>
        <div className="flex py-2 flex-row items-center justify-center ">
          <div className="flex flex-row items-center justify-center space-x-1 absolute right-4">
            {!isUserLoggedIn ? (
              <div>
                <Link
                  href={"/signIn"}
                  className="text-[16px] font-[500] font-inter text-[#000000] "
                >
                  Sign In
                </Link>
                <span className="text-[16px] font-[500] font-inter text-[#000000] ">
                  /
                </span>
                <Link
                  href={"/signUp"}
                  className="text-[16px] font-[500] font-inter text-[#000000] "
                >
                  Sign Up
                </Link>
              </div>
            ) : (
                              <div className="flex flex-row space-x-5">
                                  <span onClick={() => handleLogOut()} className="text-[16px] font-[500] font-inter text-[#000000] ">
                                      Hello, { userName }
              </span>
                                    <span onClick={() => handleLogOut()} className="text-[16px] font-[500] font-inter text-[#000000] ">
                Log Out
              </span>
            </div>
            )}
          </div>
          <div className="flex flex-row items-center space-x-2 lg:space-x-4">
            {routes.map((route: { pathName: string; pathUrl: string }) => {
              if (route.pathName === "logo") {
                return (
                  <Image
                    width={40}
                    height={40}
                    alt="logo"
                    src={route.pathUrl}
                    key={route.pathName}
                  />
                );
              } else {
                return (
                  <Link
                    href={route.pathUrl}
                    key={route.pathName}
                    className="text-[16px] font-[500] font-inter text-[#000000]  cursor-pointer"
                  >
                    {route.pathName}
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComp;
