import { Button, Textarea, TextInput } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import { useEffect, useState } from "react";
import { formatMonthYear } from '../../utils/utils01';

function AddExp({setExperience}) {
  const [newExp, setNewExp] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
    startDate: "",
    endDate: "",
  });

   const handleAdd = (e) => {

     setExperience((prev) => {
           return [...prev, {
           ...newExp,}]
     })
   }

  return (
    <div className="bg-[#1e1e1e] p-4 rounded-lg shadow-md my-1 hover:scale-101 transition-transform duration-300 cursor-pointer">
      <div>
        <TextInput
          label="Job Title"
          placeholder="Job Title"
          withAsterisk
          className="mb-2"
          onChange={(e) => setNewExp({ ...newExp, title: e.target.value })}
        />
      </div>
      <div>
        <TextInput
          label="Company"
          placeholder="Company"
          withAsterisk
          className="mb-2"
          onChange={(e) => setNewExp({ ...newExp, company: e.target.value })}
        />
      </div>
      <div>
        <TextInput
          label="Location"
          placeholder="Location"
          withAsterisk
          className="mb-2"
          onChange={(e) => setNewExp({ ...newExp, location: e.target.value })}
        />
      </div>
      <div>
        <Textarea
          placeholder="Job Description"
          label="Job Description"
          autosize
          minRows={2}
          withAsterisk
          className="mb-2"
          onChange={(e) => setNewExp({ ...newExp, description: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-2">
        <MonthPickerInput
          label="Start Date"
          placeholder="Pick date"
          withAsterisk
          
          onChange={(date) => {
            if (date) setNewExp({ ...newExp, startDate: formatMonthYear(date) });
          }}
        />
        <MonthPickerInput
          label="End Date"
          placeholder="Pick date"
          withAsterisk
          
          onChange={(date) => {
            if (date) setNewExp({ ...newExp, endDate: formatMonthYear(date) });
          }}
        />
      </div>
      <div>
        <Button fullWidth onClick={handleAdd }>
          Add Experience
        </Button>
      </div>
    </div>
  );
}

export default AddExp;
