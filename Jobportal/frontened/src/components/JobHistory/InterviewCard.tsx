import { Button, Divider } from '@mantine/core';
import company from '../../assets/Icons/company.jpg';
import { useState } from 'react';
import { MdCalendarMonth } from "react-icons/md";


function InterviewCard({job}) {

     const [fullDes, setFullDes] = useState(false);
  return (
     <div className="w-full bg-[#1a1a1a] rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
     {/* Header */}
     <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
       <div className="flex items-center gap-3">
         <img
           className="h-12 w-12 p-2 object-cover rounded-full border border-gray-400"
           src={job.img || company}
           alt="Company Logo"
         />
         <div>
           <h2 className="font-semibold text-lg text-white">{job.jobTitle}</h2>
           <p className="text-gray-400 text-sm">{job.company} • {job.applicants} Applicants</p>
         </div>
       </div>
       {/* <CiBookmark className="text-2xl text-white cursor-pointer hover:text-gray-400" /> */}
       <div className='flex items-center gap-2'>
       <MdCalendarMonth  size={25}/>
           14 May, 2025 at 10:00 AM
       </div>
     </div>

     {/* Tags */}
     <div className="flex flex-wrap gap-2 my-3">
       <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">{job.experience}</span>
       <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">{job.jobType}</span>
       <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">{job.location}</span>
     </div>

     {/* Description */}
     <p className="text-sm text-gray-200 leading-relaxed">
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
     <div className="flex justify-between items-center text-sm font-medium text-gray-400">
       <span>₹ {job.package}</span>
       <span>{job.postedDaysAgo} days ago</span>
     </div>
   </div>
  )
}

export default InterviewCard;
