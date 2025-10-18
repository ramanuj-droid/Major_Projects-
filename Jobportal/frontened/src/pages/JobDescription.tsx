import { Button, Divider } from "@mantine/core";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import JobProfile from "../components/Job-Description/JobProfile";
import RecommendedJobs from "../components/Job-Description/RecommendedJobs";
import { useEffect, useRef, useState } from "react";
import {findJobById} from '../utils/utils01';


const JobDescription = () => {
  const navigate = useNavigate();
     const { id } = useParams();
      const profileRef = useRef(null);
       const [profileHeight, setProfileHeight] = useState(0);
       const [job, setJob] = useState(findJobById(id));
       
       useEffect(() => {
           if (profileRef.current) {
             setProfileHeight(profileRef.current.offsetHeight);
           }
         }, []);
  return (
    <div className="font-['poppins'] bg-[#292929] text-white min-h-screen overflow-x-hidden w-full">
      <Divider size="xs" />

      {/* Back Button */}
        <Button
          className="m-3"
          variant="light"
          color="#FF4B4B"
          leftSection={<FaArrowLeft />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      <Divider size="xs" />

      {/* Responsive Content */}
      <div className="flex flex-col lg:flex-row gap-4 px-3 w-full max-w-screen overflow-hidden">
        {/* JobProfile takes more space */}
        <div ref={profileRef} className="w-full lg:w-2/3">
          <JobProfile job={job} />
        </div>

        {/* RecommendedJobs takes less space */}
        <div className="w-full lg:w-1/3">
          <RecommendedJobs job={job} setJob={setJob} profileHeight={profileHeight} />
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
