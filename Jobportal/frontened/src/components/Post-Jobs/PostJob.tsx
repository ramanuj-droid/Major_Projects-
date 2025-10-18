import SelectInput from "./SelectInput";
import { fields } from '../../assets/Data/PostJob';
import { Button, TagsInput } from "@mantine/core";
import TextEditor from "./TextEditor";


const PostJob = () => {
  return (
    <div className="w-full max-w-6xl mx-auto my-6 px-4 bg-[#292929] text-white font-['Poppins']">
      <h2 className="text-3xl font-bold mb-6 text-center">Post Jobs</h2>

      <div className="bg-[#1f1f1f] p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fields.map((field, index) => (
            <SelectInput key={index} {...field} />
          ))}
        </div>
        <div className="mt-6">
          <TagsInput withAsterisk label="Skills" placeholder="Enter required skills" clearable splitChars={[',', ' ', '|']} />
        </div>

        <div className="mt-6">
          <h2 className="">Jobs Description </h2>
           <TextEditor></TextEditor>
        </div>

        <div className="mt-6 flex justify-end gap-4">
               <Button  color="#FF4B4B"> Post Job</Button>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
   