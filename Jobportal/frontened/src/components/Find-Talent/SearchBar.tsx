import { Divider, RangeSlider, TextInput } from '@mantine/core';
import {searchFields} from '../../assets/Data/TalentData';
import MultiInput from '../Find-Jobs/MultiInput';
import { useState } from 'react';
import { FaUser } from "react-icons/fa6";

const SearchBar = () => {

     const [value, setValue] = useState<[number, number]>([1, 100]);
  return (
     <div className="search-bar flex flex-wrap md:flex-nowrap  p-4 rounded-lg shadow-md gap-4">
           <TextInput
        leftSectionPointerEvents="none"
        leftSection={<FaUser color='#FF4B4B' size={20}/>}
        placeholder="username"
        className='w-full sm:w-1/2 md:w-1/5'
      />
         
     {searchFields.map((item, index) => (
       <div key={index} className="w-full sm:w-1/2 md:w-1/5 flex flex-col gap-2">
         <MultiInput title={item.title} icon={item.icon} optiones={item.options} />
           <Divider size="lg" orientation="vertical" className=" md:block" />
         
       </div>
     ))}
     <div className="w-full sm:w-1/2 md:w-1/5 flex flex-col px-3">
       <div className="flex justify-between text-sm font-medium">
         <span>Salary</span>
         <span>₹ {value[0]} - ₹ {value[1]} LPA</span>
       </div>
       <RangeSlider color="#FF4B4B" value={value} onChange={setValue} className="mt-2" />
     </div>
     
   </div>
  )
}

export default SearchBar
