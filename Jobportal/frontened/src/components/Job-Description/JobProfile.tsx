import { Button, Divider } from '@mantine/core';
import company from '../../assets/Icons/company.jpg';
import { CiBookmark, CiLocationOn } from "react-icons/ci";
import { FaBriefcase } from "react-icons/fa6";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdEngineering } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

function JobProfile({ job }) {

  const navigate=useNavigate();
  return (
    <div className="w-full bg-[#1f1f1f] rounded-lg p-5 my-5 overflow-x-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 gap-4">
        <div className="flex items-center gap-3">
          <img className="h-16 w-16 rounded-full object-cover" src={job?.img ? job?.img : company} alt="" />
          <div>
            <h2 className="text-xl font-bold break-words">{job?.jobTitle}</h2>
            <div className="flex flex-wrap gap-2 text-sm text-gray-300">
              <p>{job?.company}</p>
              <p>•{job?.postedDaysAgo} days Posted ago</p>
              <p>• {job?.applicants} Applicants</p>
            </div>
          </div>
        </div>

        <div className="flex  md:flex-col md:items-end items-start gap-2">
          <Link to={`/apply-job/${job?.id}`} className="w-full">
            <Button bg="#FF4B4B">Apply</Button>
          </Link>

          {/* <CiBookmark size={25} color="#FF4B4B" /> */}
        </div>
      </div>

      <Divider size="sm" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center my-5">
        <div className='flex flex-col items-center'>
          <CiLocationOn size={30} color="#FF4B4B" />
          <div className="text-sm text-gray-400">Location</div>
          <div className="font-semibold">{job?.location}</div>
        </div>
        <div className='flex flex-col items-center'>
          <FaBriefcase size={30} color="#FF4B4B" />
          <div className="text-sm text-gray-400">Experience</div>
          <div className="font-semibold">{job.experience}</div>
        </div>
        <div className='flex flex-col items-center'>
          <AiOutlineDollarCircle size={30} color="#FF4B4B" />
          <div className="text-sm text-gray-400">Salary</div>
          <div className="font-semibold">{job?.package}</div>
        </div>
        <div className='flex flex-col items-center'>
          <MdEngineering size={30} color="#FF4B4B" />
          <div className="text-sm text-gray-400">Job Type</div>
          <div className="font-semibold">{job?.jobType}</div>
        </div>
      </div>

      <Divider size="sm" />

      <div className="my-5">
        <div className="text-xl font-semibold">Skills Required</div>
        <div className="flex flex-wrap gap-2 mt-2">
          {job?.skills.map(skill => (
            <span key={skill} className="bg-[#FF4B4B] px-3 py-1 rounded-full text-sm">{skill}</span>
          ))}
        </div>
      </div>

      <Divider size="sm" />

      <section className="my-4 space-y-4 text-sm text-gray-300 leading-relaxed">
        <div>
          <h3 className="text-xl font-semibold text-white">About the Job</h3>
          <p>
            {job?.description}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">Responsibilities</h3>
          <ul className="list-disc ml-6">
            {job?.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}

          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">Qualifications and Skill Sets</h3>
          <ul className="list-disc ml-6">
            {job?.qualifications.map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
          </ul>
        </div>
        <Divider size="sm"></Divider>
        <div>
          <h3 className="text-xl font-semibold text-white">About the company</h3>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex items-center gap-3">
              <img className="h-16 w-16 rounded-full object-cover" src={job?.img ? job?.img : company} alt="" />
              <div>
                <h2 className="text-xl font-bold break-words">{job?.jobTitle}</h2>
                <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                  <p>{job?.company}</p>
                  <p>•{job?.postedDaysAgo} days Posted ago</p>
                  <p>• {job?.applicants} Applicants</p>
                </div>
              </div>
            </div>

            <div className="flex  md:flex-col md:items-end items-start gap-2">
              <Link to={`/company/${job?.id}`} className="w-full">
                <Button  bg="#FF4B4B">Company Page</Button>
              </Link>
            </div>
          </div>
          <p>{job?.about}</p>
        </div>
      </section>
    </div>
  );
}

export default JobProfile;
