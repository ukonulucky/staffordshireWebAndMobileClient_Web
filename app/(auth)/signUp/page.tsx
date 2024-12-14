"use client";

import SignUpComp from "@/components/auth/SignUpComp"
import Image from "next/image";
import Link from "next/link";





function SignUp() {

  return (
    <div className="w-screen h-screen  flex flex-row">
      <div className="hidden relative   lg:block w-4/12 bg-blue-500" >
        <Link href={"/"}>
        <Image
          src={"/images/Base.jpg"}
          alt="login User"
          width={300}
          height={400}
          className="w-full h-full"
        />
        </Link>
        <div>

          <div className="absolute bottom-0 left-0 right-0">
          <p className="font-[800] font-solway text-[64px]  text-white mx-4 mb-4 leading-[70px]">
          Are You Ready to Look Beautiful?
          </p>
          </div>
         
        </div>
    </div>
      <div className="w-full  lg:w-8/12 h-full ">
      <SignUpComp />
      </div>
    </div>
  );
}

export default SignUp;
