import { Button, Divider } from '@mantine/core';
import company from '../../assets/Icons/company.jpg';
import { CiBookmark } from "react-icons/ci";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job , setJob}) => {
  const [fullDes, setFullDes] = useState(false);

  return (
    <div className="w-full bg-[#1a1a1a] rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <img
            className="h-12 w-12 p-2 object-cover rounded-full border border-gray-400 shrink-0"
            src={job.img || company}
            alt="Company Logo"
          />
          <div className="min-w-0">
            <h2 className="font-semibold text-lg text-white truncate">{job.jobTitle}</h2>
            <p className="text-gray-400 text-sm truncate">
              {job.company} • {job.applicants} Applicants
            </p>
          </div>
        </div>
        <div className="shrink-0 self-start sm:self-center">
          {/* <CiBookmark className="text-2xl text-white cursor-pointer hover:text-gray-400" /> */}
          <Link to={`/job-des/${job?.id}`}> <Button onClick={()=>setJob(job)} bg="#FF4B4B">Explore</Button></Link>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 my-3">
        {[job.experience, job.jobType, job.location].map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs break-words"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-200 leading-relaxed break-words">
        {job.description.length > 150
          ? fullDes
            ? job.description
            : job.description.slice(0, 150) + '...'
          : job.description}
        {job.description.length > 150 && (
          <button
            className="text-blue-400 ml-1 hover:underline transition duration-150"
            onClick={() => setFullDes(!fullDes)}
          >
            {fullDes ? 'Show Less' : 'Read More'}
          </button>
        )}
      </p>

      <Divider size="sm" color="gray" className="my-3" />

      {/* Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm font-medium text-gray-400 gap-1">
        <span>₹ {job.package}</span>
        <span>{job.postedDaysAgo} days ago</span>
      </div>
    </div>
  );
};

export default JobCard;
