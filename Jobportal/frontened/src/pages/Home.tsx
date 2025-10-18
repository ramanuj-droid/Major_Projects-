import Company from "../components/LandingPage/Company";
import DreamJob from "../components/LandingPage/DreamJob";
import JobCatagory from "../components/LandingPage/JobCatagory";
import Subscribe from "../components/LandingPage/Subscribe";
import Testimonial from "../components/LandingPage/Testimonial";
import Working from "../components/LandingPage/Working";
// import { useLocation } from 'react-router-dom';

export default function Home() {

  // const location = useLocation();
     return <div className="bg-[#1E1E2F] text-white min-h-screen flex flex-col items-center justify-center">
        <DreamJob></DreamJob>
        <Company></Company>
        <JobCatagory></JobCatagory>
        <Working></Working>
        <Testimonial></Testimonial>
        <Subscribe></Subscribe>
     </div>;
   }
   