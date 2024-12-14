"use client"
import NotFound from '@/app/not-found'
import HomeFooter from '@/components/homePage/footer'
import HeaderComp from '@/components/homePage/header'
import HeroSection from '@/components/homePage/HeroSection'
import { usePathname } from 'next/navigation'
import React from 'react'

interface ContainerProps {
    children: React.ReactNode; // Type for children
  }

function AppRootComponent({ children }: ContainerProps) {

   

    const pathName = usePathname()
    if (pathName === "/signIn" || pathName === "/signUp") { 
        return <div>
             {children}
        </div>
    }

    if (pathName === "/" || pathName === "/contactUs" || pathName === "/aboutUs" || pathName === "/services") { 
        return <div>
        <HeaderComp /> 
       <HeroSection />
       {children}
       <HomeFooter />
   </div>
    }

  return (
    <NotFound />
  )
}

export default AppRootComponent
