
import { serviceType } from '@/utils/types'
import Image from 'next/image'
import React from 'react'

function ServiceComp({ 
  serviceHeading,
  serviceImageUrl,
  serviceSubHeading,
  serviceList,
  index
}: serviceType) {

  const isIndexEven = index % 2

  return (
    <div className={ `w-full flex mt-3  justify-center   ${isIndexEven === 0 ? "flex-row-reverse" : "flex-row"}` }>
          <div className='w-5/12 h-[400px] lg:flex flex-row justify-center items-center hidden'>
        <div 
          className={ `w-10/12 h-[400px] flex flex-row items-center relative ${isIndexEven === 0 ? "justify-start" : "justify-center"}`}
        >
          
              <Image
                  src={serviceImageUrl}
                  fill
                  alt='treatment'

              />
          </div>
         </div>
          <div className='lg:w-7/12 w-full flex flex-col lg:items-start lg:justify-start ml-12 mr-12  mt-8'>
              <h2 className='font-inter text-[50px] leading-[58px] text-[#6B0606] text-center'>
          { serviceHeading}
              </h2>
             <p className='font-inter text-[16px] text-[#00000080] mt-2'>
          { serviceSubHeading}
              
              </p> 

             <div>
              { 
                  serviceList.map(service => { 
                      return <div className='flex flex-row items-center mt-4' key={service.serviceName}>
                        

                        {/* 
                        className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]"
                        
                        */}
                              <span className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]">
                              { 
                                  service.serviceName
                              }
                              </span>
                              
                          <span  className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]">.........................................................from</span>
                          <span   className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px] pl-2" >
                          ${ 
                                  service.servicePrice
                              }
                        </span>
                          
                      </div>
                  })
              }
              </div> 
            
      </div>
      
    </div>
  )
}

export default ServiceComp