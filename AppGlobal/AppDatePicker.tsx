"use client";

import { datePickerPropType } from "@/utils/types";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTimePicker = ({
    handleDate
 }: datePickerPropType  ) => {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);

    
    useEffect(() => {
        console.log("ran here", selectedDateTime)
        if(!selectedDateTime)return
      handleDate(selectedDateTime?.toDateString())
    }, [selectedDateTime])
    
  return (
    <div className="flex flex-col space-y-4 ">
      <label className="text-slate-700 text-sm font-medium font-['Inter'] leading-[18px] ">
        Select Date and Time
      </label>
          <DatePicker
           
        selected={selectedDateTime}
        onChange={(date) => setSelectedDateTime(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="yyyy-MM-dd h:mm aa"
        placeholderText="Pick a date and time"
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-gray-500 w-full lg:w-4/5 mt-2 text-slate-700 text-sm font-medium font-['Inter'] leading-[18px]"
      />
    </div>
  );
};

export default DateTimePicker;
