
import React, {  useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";

import { signUpSchema } from "@/utils/yubValidation";
import LoadingScreen from "@/AppGlobal/ComponentLoader";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

// Define TypeScript types for form values
interface IFormInput {
  fullname: string;
  email: string;
  password: string;
}

const SignUpComp = () => {
  // Initialize the form with react-hook-form and Yup resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(signUpSchema),
  });

  const [hidePassword, sethidePassword] = useState(true);



  /* set the display of the loader */
  const [loader, setLoader] = useState(false);

  // Define the form submission handler

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      setLoader(!loader);
      console.log(data)
      /* make api call for user signUp */

      /*   await signInMutation.mutateAsync(data); */
    } catch (error:any ) {
      console.log("An unknown error occurred"); 
     
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="flex flex-col  h-full relative">
      {loader && <LoadingScreen />}
      <div className=" flex flex-row justify-between   lg:justify-end  items-center space-x-1 absolute left-4 top-8 right-4 ">
        <Link href={"/"}>
          <p className="font-[500] font-solway text-[25px]  text-gray-600  block lg:hidden ">
            Magz Salon
          </p>
        </Link>
        <div className="flex flex-row">
                  <p>Already have an account? {" "} </p>
          <Link href={"/signIn"}>Sign In</Link>
        </div>
      </div>

      <div className="flex w-3/5 mx-auto flex-col flex-1 justify-center ">
        <p className=" text-[26px] font-semibold font-['Inter'] mt-4 leading-[35.10px] text-start">
          Sign Up
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 w-full flex  flex-col"
        >
          <div className="flex flex-col space-y-1">
            <label className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px] ">
              Full Name
            </label>
                      <input
                          autoComplete="true"
                          autoSave="false"
                      autoCorrect="false"
              {...register("fullname")}
              placeholder="sam james"
              className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]
           w-full lg:w-3/5 h-[39px] px-2.5 py-2.5 bg-white rounded-lg shadow border border-[#E8E8E8] justify-start items-center mt-4 border-none focus:ring-0 focus:outline-none  focus:bg-white
            "
            />
            <p className="text-red-700 text-sm font-medium font-['Inter'] leading-[18px] mt-4">
              {errors.fullname?.message}
            </p>
          </div>
          <div className="flex flex-col space-y-1 mt-4">
            <label className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px] ">
              Email
            </label>
                      <input
                         autoComplete="true"
                         autoSave="false"
                     autoCorrect="true"
              {...register("email")}
              placeholder="example@gmail.com"
              className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]
           w-full lg:w-3/5 h-[39px] px-2.5 py-2.5 bg-white rounded-lg shadow border border-[#E8E8E8] justify-start items-center mt-4 focus:ring-0 focus:outline-none focus:bg-transparent
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
            <div
              className="
           w-full lg:w-3/5 h-[39px] px-2.5 rounded-lg border border-gray-300 justify-start items-center mt-4 flex flex-row 
           space-x-1
            "
            >
                          <input
                                 autoComplete="false"
                                 autoSave="false"
                             autoCorrect="true"
                type={hidePassword ? "password" : "text"}
                className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px] border-none focus:ring-0 focus:outline-none  focus:bg-white flex-1 h-full "
                {...register("password")}
                placeholder="*************"
              />
              {hidePassword ? 
                <FaRegEye
                  onClick={() => sethidePassword(!hidePassword)}
                  size={20}
                />
               : 
                <FaEyeSlash
                  onClick={() => sethidePassword(!hidePassword)}
                  size={20}
                />
              }
            </div>

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
              {loader ? "Please wait..." : "Sign Up"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpComp;
