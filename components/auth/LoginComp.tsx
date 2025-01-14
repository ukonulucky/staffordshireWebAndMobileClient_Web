"use client"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { loginSchema } from "@/utils/yubValidation";

import { loginSuccess, setAppLoaderAction } from "@/redux/authSlice";
import Swal from "sweetalert2";
import { useAppDispatch } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";


// Define TypeScript types for form values
interface IFormInput {
  email: string;
  password: string;
}

const LoginComp = () => {
  // Initialize the form with react-hook-form and Yup resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(loginSchema),
  });




  const router = useRouter()





  /* set the display of the loader */
  const [loader, setLoader] = useState(false);

  /* start api call */

  // Define the form submission handler




const dispatch = useAppDispatch()
const onSubmit = async (data: {
  email: string,
  password: string
}) => {
  try {
 dispatch(setAppLoaderAction(true))
 const response = await axios.post('https://magzsalone-c6d08b8d094b.herokuapp.com/api/v1/user/login',data)

 const {
   user
 } = response.data
    router.push("/")
    setLoader(!loader)
 dispatch(setAppLoaderAction(false))
    dispatch(loginSuccess(user))
    
    if (typeof window !== "undefined") {
      // Set item from localStorage
      localStorage.setItem('user',JSON.stringify(user));

      
    }




 } catch (error:any) {
   dispatch(setAppLoaderAction(false))
 const errorMessage = error.response?.data?.message || error?.message || `Unknown error`
 console.log(`error message:`, errorMessage)
 
 Swal.fire({
   icon: 'error', // Use 'error' icon
   title: 'Oops...',
   text: errorMessage,
 });
 

}
};

  return (
    <div className="flex flex-col  h-full relative">        
          <div className=" flex flex-row justify-between   lg:justify-end  items-center space-x-1 absolute left-4 top-8 right-4 ">
              
              <Link  href={"/"}>
              <p className="font-[500] font-solway text-[25px]  text-gray-600  block lg:hidden ">
        Magz Salon
          </p>
              </Link>
              <div className="flex flex-row">
              <p>
                      Don&apos;t have an account? {" "}
              
              </p>
              <Link href={"/signUp"}>
              Sign Up
              </Link>
            </div>
          </div>
          
          <div className="flex w-3/5 mx-auto flex-col flex-1 justify-center ">
          <p className=" text-[26px] font-semibold font-['Inter'] mt-4 leading-[35.10px] text-start">
        Sign In
      </p>

    

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 w-full flex  flex-col">
        <div className="flex flex-col space-y-1">
          <label className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px] ">
            Email
          </label>
          <input
            {...register("email")}
            placeholder="example@gmail.com"
            className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]
           w-full lg:w-3/5 h-[39px] px-2.5 py-2.5 bg-white rounded-lg shadow border border-[#E8E8E8] justify-start items-center mt-4 focus:ring-0 focus:outline-none
            "
          />
          <p className="text-red-700 text-sm font-medium font-['Inter'] leading-[18px] mt-4">
            {errors.email?.message}
          </p>
        </div>
        <div className="flex flex-col space-y-1 mt-2">
          <label className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            placeholder="*************"
            className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]
           w-full lg:w-3/5 h-[39px] px-2.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center mt-4
           focus:ring-0 focus:outline-none
            "
          />
          <p className="text-red-700 text-sm font-medium font-['Inter'] leading-[18px] mt-4">
            {errors.password?.message}
          </p>
        </div>

      

        {/* submit button starts */}
        <button
          disabled={loader}
          className=" w-full lg:w-3/5 h-[39px] p-2.5 bg-[#6B0606] rounded-2xl  justify-center items-center  inline-flex mt-2"
        >
          <span className="text-white text-sm font-semibold font-['Inter'] leading-[18.90px]">
            {loader ? "Please wait..." : "Sign In"}
          </span>
                  </button>
                  
      </form>

     
          </div>
      
    </div>
  );
};

export default LoginComp;
