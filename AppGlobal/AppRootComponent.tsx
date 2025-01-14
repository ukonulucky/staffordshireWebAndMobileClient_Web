"use client"
import NotFound from '@/app/not-found'
import HomeFooter from '@/components/homePage/footer'
import HeaderComp from '@/components/homePage/header'
import HeroSection from '@/components/homePage/HeroSection'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import AppLoader from './AppLoader'
import { setAppLoaderAction } from '@/redux/authSlice'
import { getAllCategoriesApi, getAllServicesApi } from '@/utils/API'
import Swal from 'sweetalert2'
import { setServiceAction, setServiceAndCategoryAction } from '@/redux/serviceSlice'
import { setCategoryAction } from '@/redux/categorySlice'

interface ContainerProps {
    children: React.ReactNode; // Type for children
  }

function AppRootComponent({ children }: ContainerProps) {


  const dispatch = useAppDispatch()
const handleFatchData = async () => {
  try {
 dispatch(setAppLoaderAction(true))
 const [categoryResponse, serviceResponse] = await Promise.all([getAllCategoriesApi(), getAllServicesApi()])

 const {
  categories
 } = categoryResponse.data
 const {
 services
} =  serviceResponse?.data
   
   
    
    dispatch(setServiceAction(services))
    dispatch(setCategoryAction(categories))
    dispatch(setAppLoaderAction(false))
    

    const dataList: any[] = []
    if (categories.length > 0 && services.length > 0) { 
     
      for (let index = 0; index < categories.length; index++) {
        const serviceData = [] as any
     services.forEach((service: any) => { 

       if (categories[index]._id === service.categoryId) { 
         const result =  {
          serviceId: service._id,
          serviceName: service.serviceName,
          servicePrice: service.servicePrice

        }
         serviceData.push(result)
       }
     })
        
        dataList.push({
          category: {
            categoryId: categories[index]._id,
             categoryName: categories[index].categoryName,
            categoryImage: categories[index].image
          },
          services: serviceData
        })

   
    
   }
    }
   dispatch(setServiceAndCategoryAction(dataList))
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
   
  
  useEffect(() => {
    console.log("ran now")
    handleFatchData()
  }, [])
  
  
  const {isAppLoading} = useAppSelector((state)=>state.auth);

  const pathName = usePathname()
  
  if (isAppLoading) { 
  return  <AppLoader />
  }

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
