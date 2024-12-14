import { serviceList } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function TreatmentAndPrice() {
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

              <div>
              { 
                  serviceList.map(service => { 
                      return <div className='flex flex-row items-center mt-4' key={service.serviceName}>
                        
                              <span>
                              { 
                                  service.serviceName
                              }
                              </span>
                              
                          <span>.........................................................from</span>
                          <span className='pl-2'>
                          ${ 
                                  service.serviceAmount
                              }
                        </span>
                          
                      </div>
                  })
              }
              </div>
              <Link className='text-[#6B0606] underline mt-4' href="services">
              <span className='text-[12px]'>View All</span>
              </Link>
          </div>
    </div>
  )
}

export default TreatmentAndPrice