import MultiInput from "./MultiInput";
import { dropdownData } from "../../assets/Data/JobsData";
import { Divider, RangeSlider } from "@mantine/core";
import { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);

  return (
    <div className="search-bar flex flex-wrap md:flex-nowrap  p-4 rounded-lg shadow-md gap-4">
      {dropdownData.map((item, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/5 flex flex-col gap-2">
          <MultiInput title={item.title} icon={item.icon} optiones={item.options} />
          {index !== dropdownData.length - 1 && (
            <Divider size="xs" orientation="vertical" className="hidden md:block" />
          )}
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
  );
};

export default SearchBar;
