"use client"
import { pathNameList, routes } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HamburgerMenu from './handBurger'
import { usePathname } from 'next/navigation';


function HeaderComp() {

 
  return (
      <div>
         
           

          <div className='block sm:hidden'>
          <HamburgerMenu />
         </div>
          <div className='hidden sm:block'>
          <div className='flex flex-row justify-center items-center w-full bg-[#6B0606] space-x-4 py-2'>
          <Image
              src={"/images/fire.png"}
              width={24}
              height={24}
              alt='fire pic'
          
          />
          <span className='text-[16px] font-[500] font-inter text-white'>
          Only this month 20% discount on all services
          </span>
          <Image
              src={"/images/fire.png"}
              width={24}
              height={24}
              alt='fire pic'
          
          />
          </div>
          <div className="flex py-2 flex-row items-center justify-center ">
              <div className='flex flex-row items-center justify-center space-x-1 absolute right-4'>
                  <Link href={"/signIn"} className='text-[16px] font-[500] font-inter text-[#000000] '>
                      Sign In
                  </Link>
                  <span className='text-[16px] font-[500] font-inter text-[#000000] '>
                  /
                 </span>
                  <Link href={"/signUp"} className='text-[16px] font-[500] font-inter text-[#000000] '>
                  Sign Up
                  </Link>
              </div>
              <div className='flex flex-row items-center space-x-2 lg:space-x-4'>
              { 
                  routes.map((route: {
                      pathName: string,
                      pathUrl: string
                  }) => { 
                      if (route.pathName === "logo") {
                          return <Image width={40} height={40} alt='logo'
                              src={route.pathUrl}
                              key={route.pathName}
                         
                          />
                      }
                      else { 
                          return <Link href={route.pathUrl} key={route.pathName} className='text-[16px] font-[500] font-inter text-[#000000] '>
                              { 
                                  route.pathName
                              }
                          </Link>

                      }
                  }
                      
                  )
              }  
    </div>
             
          </div>
          </div>
              
         
    </div>
  )
}

export default HeaderComp