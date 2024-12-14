
"use client"
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import Carousel from "./slider";
import { usePathname } from "next/navigation";

function HeroSection() {
    const pathName = usePathname()

    const [imageUrl, setImageUrl] = useState("/images/Logo.png")
    useEffect(() => {
        if (pathName === "/contactUs") { 
            setImageUrl("/images/contactUs.jpg")
           
        } else if(pathName === "/aboutUs") { 
            setImageUrl("/images/aboutUs.jpg")
        } else if (pathName === "/services") { 
            setImageUrl("/images/Services.jpg")
        } else if(pathName === "/") { 
            setImageUrl("/images/Logo.png")
        }
   
     }, [pathName])
   
     const memoizedCarousel = useMemo(() => <Carousel />, []);

  return (
    <div className="mt-4">
      <div className="flex  -z-10 flex-row items-center mx-auto justify-center relative h-[80px] w-[334px] lg:h-[121px] lg:w-[434px]">
        <Image src={imageUrl} alt="app logo" fill  className="fill"/>
      </div>
          { 
              pathName !== "/contactUs" &&  memoizedCarousel 
          }
    </div>
  );
}

export default HeroSection;
