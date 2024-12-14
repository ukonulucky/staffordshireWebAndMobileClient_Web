"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { carouselData } from "@/utils/data";


function Carousel() {


  const settings = {
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    cssEase: "linear",
  
  };
  return (
    <div className="">
      <Slider {...settings}>
              { 
                  carouselData.map(img => { 
                      return <div className="w-[100vw] h-[50vh]" key={img.key}>
                          <Image
                          alt={ img.imageUrl}
                          src={img.imageUrl} key={img.key} 
                          fill
                      />
                      </div>
                  })
              }
      </Slider>
    </div>
  );
}

export default Carousel;
