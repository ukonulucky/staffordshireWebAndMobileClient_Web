
import ServiceComp from '@/components/servicePage/serviceComp'
import {serviceList2 } from '@/utils/data'
import React from 'react'

function page() {
  return (
      <div>
      <div className='flex flex-col items-center w-full mt-4'>
      <h2 className='font-inter text-[50px] leading-[58px] text-[#6B0606] text-center'>
              Services And Prices
              </h2>
              <p className='font-inter text-center lg:text-left px-2 text-[16px] text-[#00000080] mt-2'>
              Est tortor egestas sed feugiat elementum. Viverra nulla amet a ultrices massa dui. Tortor est purus morbi vitae arcu suspendisse amet.
              
              </p>
      </div>
      { 
        serviceList2.map(service => { 
         
     return     <div key={service.index}>
       <ServiceComp
         index={service.index}
         serviceHeading={service.serviceHeading}
         serviceImageUrl={service.serviceImageUrl}
         serviceList={service.serviceList}
         serviceSubHeading={ service.serviceSubHeading}
       
       />
          </div>
        })
      }
      
      
    </div>
  )
}

export default page