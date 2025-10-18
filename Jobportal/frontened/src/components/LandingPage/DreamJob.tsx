import { Avatar, TextInput } from '@mantine/core';
import { IoSearchSharp } from "react-icons/io5";
import boy from '../../assets/Boy.png';
// import av1 from '../../assets/avatar.png';
// import av2 from '../../assets/avatar1.png';
// import av3 from '../../assets/avatar2.png';

const DreamJob = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-6 md:px-20 py-10 gap-10">
      {/* Left Section */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/3 relative">
        <div className="w-72 sm:w-96">
          <img src={boy} alt="Job Search Illustration" className="w-full" />
        </div>
        {/* Job Statistics Box */}
        {/* <div className="absolute top-[160px] right-[30px] translate-x-1/2 md:translate-x-0 md:right-10 rounded-lg p-4 w-60 sm:w-72 flex flex-col items-center gap-2 shadow-lg">
          <p className="text-white text-lg font-semibold">10K+ got jobs</p>
          <Avatar.Group>
            <Avatar src={av1} />
            <Avatar src={av2} />
            <Avatar src={av3} />
            <Avatar>+5</Avatar>
          </Avatar.Group>
        </div> */}
      </div>

      {/* Right Section */}
      <div className="flex flex-col w-full md:w-1/2 gap-4 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-amber-50">
          Find your <span className="text-[#FF4B4B]">dream job</span> with us.
        </h1>
        <p className="text-lg md:text-2xl text-[#bdbdbd]">
          A good life begins with a good company. Start exploring thousands of jobs in one place.
        </p>
        {/* Input Fields */}
        <div className="flex flex-col sm:flex-row gap-3 mt-3">
          <TextInput
            className="bg-[#3d3d3d] rounded-lg p-2 text-[#dcdcdc] w-full sm:w-1/2"
            label="Job Title"
            variant="unstyled"
            placeholder="Software Engineer"
          />
          <TextInput  
            className="bg-[#3d3d3d] rounded-lg p-2 text-[#dcdcdc] w-full sm:w-1/2"
            label="Job Type"
            variant="unstyled"
            placeholder="Full Time"
          />
          {/* Search Button */}
          <button className="flex justify-center items-center bg-[#3d3d3d] rounded-lg p-2 hover:bg-[#FF4B4B] transition duration-300">
            <IoSearchSharp size={30} className="text-white" />
          </button>
        </div>
      </div>

      
      
    </div>
  );
};

export default DreamJob;
