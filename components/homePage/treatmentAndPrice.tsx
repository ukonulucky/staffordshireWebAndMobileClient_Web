"use client"
import { useAppSelector } from '@/redux/store'
import { serviceAndCategoryType } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function TreatmentAndPrice() {

    const serviceList = useAppSelector(state => state.service.serviceAndCategory)
    


  return (
      <div className='w-full flex flex-row justify-center'>
          <div className='w-5/12 h-[400px] lg:flex flex-row justify-end items-center hidden'>
          <div className=' w-10/12 h-[400px] flex flex-row items-cente justify-center relative'>
              <Image
                  src={"/images/treatmentAndPrice.jpg"}
                  fill
                  alt='treatment'

              />
          </div>
         </div>
          <div className='lg:w-7/12 w-full flex flex-col lg:items-start lg:justify-start ml-12 mr-12  mt-8'>
              <h2 className='font-inter text-[50px] leading-[58px] text-[#6B0606] text-center'>
              Treatments and prices
              </h2>
              <p className='font-inter text-[16px] text-[#00000080] mt-2'>
              Velit in dui dictum arcu felis tempor in feugiat in mauris...
              
              </p>

              
              { 
                  
                  serviceList.length > 0 ?  
                  <div>
                  { 
                              serviceList.slice(0,1).map((service: serviceAndCategoryType, index) => { 
                          return <div key={index}>
                            
                              { 
                                  service.services.map(i => <div className='flex flex-row items-center mt-4'  key={i.serviceId}>
                                      <span className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]">
                                  { 
                                      i.serviceName
                                  }
                                  </span>
                                  
                              <span className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]">.........................................................from</span>
                              <span className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px] pl-2">
                              ${ 
                                      i.servicePrice
                                  }
                            </span>

                                  </div>)
                              }
                              
                          </div>
                      })
                  }
                  </div>
                  : <p>No serviice available</p>
              }
          
            
              <Link className='text-[#6B0606] underline mt-4' href="services">
              <span className='text-[12px]'>View All</span>
              </Link>
          </div>
    </div>
  )
}

export default TreatmentAndPrice