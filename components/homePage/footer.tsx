import Image from 'next/image'
import React from 'react'

function HomeFooter() {
  return (
      <div className='h-[40vh] flex flex-col justify-center items-center space-y-1 bg-[#DFBFA8] mt-4 relative'>
           <Image
              alt='logo'
              src={"/images/Icon.png"}
              width={40}
              height={40}
              
          />
          <Image
              alt='logo'
              src={"/images/Logo.png"}
              width={260}
              height={40}
              
          
          />
          <p className='text-center w-10/12 lg:w-7/12 font-inter text-[16px] text-[#00000080] '>
          Where beauty meets excellence. Visit us to experience personalized care and unmatched service!
          </p>

          <div className='absolute bottom-2 left-0 right-0 text-center'>
              <p className='text-white'>
              ©Copyright Magz Salon 2024. Designed by MagCoders
              </p>
              
          </div>
    </div>
  )
}

export default HomeFooter