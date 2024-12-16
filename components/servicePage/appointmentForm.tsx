"use client";
import DateTimePicker from "@/AppGlobal/AppDatePicker";
import { servicesData } from "@/utils/data";
import { formType } from "@/utils/types";
import { formSchema } from "@/utils/yubValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';



function AppointmentForm() {
    const [loader, setloader] = useState(false);
    
const [date, setDate] = useState("")
    
    const [service, setService] = useState("")
    const [serviceList, setServiceList] = useState<string[]>([])

    const [selectedServiceSubList, setselectedServiceSubList] = useState("")

  // Initialize the form with react-hook-form and Yup resolver
  const {
      register,
      reset,
      handleSubmit,
      getValues,
   clearErrors,
    formState: { errors },
  } = useForm<formType>({
    resolver: yupResolver(formSchema),
  });
console.log("date value", getValues("date"))
    
    useEffect(() => {
        if (!date) return 
     
        reset(
            {
              date: date,
            },
            {
              keepDirty: true,
              keepErrors: true,
              keepIsValidating: true,
            }
        )
        clearErrors("date")
  
    
      
    }, [date])
    
    
    const handleDateUpdate = (newDate: string) => { 
        console.log("passed date", newDate)
   setDate(newDate)
    }
    useEffect(() => { 
        

        if (!service) { 
            setServiceList([])
            return 
        }
        const findService = servicesData.filter(data => data.serviceMain === service)
        if (findService.length === 0) { 
            Swal.fire("Error", "Service not found")
            return 
        }
        setServiceList(findService[0].list)
    }, [service])
    
  // Define the form submission handler

  const onSubmit = async (data: formType) => {
    try {
      console.log(data);
      /* make api call for user signUp */

      /*   await signInMutation.mutateAsync(data); */
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message); // `error.message` is now safe to use
      } else {
        console.log("An unknown error occurred"); // If it's not an instance of `Error`
      }
    } finally {
    }
  };

  return (
    <div className="py-4 px-2 lg:px-0">
      <div className=" flex flex-col space-y-[24px]">
        <span className="font-inter font-[500] text-[16px] leading-[19.36px] text-[#6B0606]">
          Beauty salon
        </span>
        <span className="font-inter font-[500] text-[32px] leading-[19.36px] text-[#000000]">
          Book appointment
        </span>
        <span className="font-inter font-[500] text-[14px] leading-[19.36px] text-gray-400">
          Mi senectus ac ullamcorper sollicitudin volutpat sit a velit. Purus
          scelerisque
        </span>
      </div>
      {/* form section */}
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 w-full flex  flex-col"
        >
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <div className="flex flex-col space-y-1 flex-1">
              <label className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px] ">
                Full Name
              </label>
              <input
                {...register("fullName")}
                placeholder="John Dave"
                className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]
       w-full lg:w-4/5 h-[39px] px-2.5 py-2.5 bg-white rounded-lg shadow border border-[#E8E8E8] justify-start items-center mt-4 focus:ring-0 focus:outline-none
        "
              />
              <p className="text-red-700 text-sm font-medium font-['Inter'] leading-[18px] mt-4">
                {errors.fullName?.message}
              </p>
            </div>

            <div className="flex flex-col space-y-1 flex-1">
              <label className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px] ">
                Email
              </label>
              <input
                {...register("email")}
                placeholder="Enter email"
                className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]
       w-full lg:w-4/5 h-[39px] px-2.5 py-2.5 bg-white rounded-lg shadow border border-[#E8E8E8] justify-start items-center mt-4 focus:ring-0 focus:outline-none
        "
              />
              <p className="text-red-700 text-sm font-medium font-['Inter'] leading-[18px] mt-4">
                {errors.email?.message}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-2">
            <div className="flex flex-col space-y-1 flex-1">
              <label className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px] ">
                Phone
              </label>
              <input
                {...register("phone")}
                placeholder="+44700000"
                className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]
       w-full lg:w-4/5 h-[39px] px-2.5 py-2.5 bg-white rounded-lg shadow border border-[#E8E8E8] justify-start items-center mt-4 focus:ring-0 focus:outline-none
        "
              />
              <p className="text-red-700 text-sm font-medium font-['Inter'] leading-[18px] mt-4">
                {errors.phone?.message}
              </p>
            </div>
          
            <div className=" flex-1">
                          <DateTimePicker
              handleDate={handleDateUpdate}
                          />
                           <p className="text-red-700 text-sm font-medium font-['Inter'] leading-[18px] mt-4">
                {errors.date?.message}
              </p>
            </div>
                  </div>

          <div className="flex flex-col space-y-2 ">
           
          <label className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px] ">
              Services
              </label>
                      <div
                          className="mt-4"
                
                      >
                          <select name="" id=""
                          className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]
                          w-full lg:w-4/5 h-[39px]  bg-white rounded-lg shadow border border-[#E8E8E8] justify-start items-center  focus:ring-0 focus:outline-none
                           "
                              onChange={(e) => { 
                               
                               setService(e.target.value)
                                 
                              }}
                          >
                              <option value="">Select service</option>
                          { 
                                  servicesData.map((data, key)=> { 
                                      return <option
                                          key={ key }
                                          value={data.serviceMain}>
                                          { data.serviceMain}
                                      </option>
                                  })
                          }
                          </select>
                         
                         
                      </div>
              <p className="text-red-700 text-sm font-medium font-['Inter'] leading-[18px] mt-4">
                {errors.service?.message}
              </p>
           
                  </div>

                  {/* service list */}
                
                  <span className="text-slate-700 text-md font-bold font-['Inter'] leading-[18px]">Subservices</span>
                  <div className="max-h-[200] overflow-scroll py-2 w-3/6 px-12">
                      { 
                          serviceList.length > 0 ?
                          
                              serviceList.map((service, key) => <div key={key}>
                             
                                  <div
                                      onMouseEnter={() => { 
                                          console.log("RAN")
                                          setselectedServiceSubList(service)
                                      }}
                                      className={` flex flex-row space-x-4 mt-4 px-2 ${selectedServiceSubList === service && "bg-[#F3E2D5] rounded-md py-2"}`}>
                                  <input type="checkbox" name="" id="" />
                              <span className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px] ">
                                  { service }
                              </span>
                             </div>
                          </div>) : <span className="text-slate-700 text-md font-bold font-['Inter'] leading-[18px] p-4">
                           No service selected
                          </span>
                      }
                  </div>

          {/* submit button starts */}
          <button
            disabled={loader}
            className="w-[300px] lg:w-3/5 h-[39px] p-2.5 bg-[#DFBFA8] rounded-2xl  justify-center items-center  inline-flex mt-6 mx-auto"
          >
            <span className="text-white text-sm font-semibold font-['Inter'] leading-[18.90px]">
            Next
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default AppointmentForm;
