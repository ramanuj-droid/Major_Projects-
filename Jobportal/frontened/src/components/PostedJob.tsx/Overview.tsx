import company from '../../assets/Icons/company.jpg';

import { Button, Divider } from '@mantine/core'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import { FaBriefcase } from 'react-icons/fa6'
import { MdEngineering } from 'react-icons/md';
import { Link } from 'react-router-dom'

function Overview() {
  return (
     <div className="w-full bg-[#1f1f1f] rounded-lg p-5 my-5 overflow-x-hidden">
     <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 gap-4">
       <div className="flex items-center gap-3">
         <img className="h-16 w-16 rounded-full object-cover" src={ company} alt="" />
         <div>
           <h2 className="text-xl font-bold break-words">Software Engineer</h2>
           <div className="flex flex-wrap gap-2 text-sm text-gray-300">
             <p>Google</p>
             <p>•19 days Posted ago</p>
             <p>• 1000+ Applicants</p>
           </div>
         </div>
       </div>

       <div className="flex  md:flex-col md:items-end items-start gap-2">
         <Link to={`/`} className="w-full">
           <Button className='md:min-w-21' bg="#FF4B4B">Edit</Button>
           
         </Link>
         <Link to={`/`} className="w-full">
           <Button className='md:min-w-21' bg="#FF4B4B">Delete</Button>
           
         </Link>

         {/* <CiBookmark size={25} color="#FF4B4B" /> */}
       </div>
     </div>

     <Divider size="sm" />

     <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center my-5">
       <div className='flex flex-col items-center'>
         <CiLocationOn size={30} color="#FF4B4B" />
         <div className="text-sm text-gray-400">Location</div>
         <div className="font-semibold">New Delhi, India</div>
       </div>
       <div className='flex flex-col items-center'>
         <FaBriefcase size={30} color="#FF4B4B" />
         <div className="text-sm text-gray-400">Experience</div>
         <div className="font-semibold">Fresher</div>
       </div>
       <div className='flex flex-col items-center'>
         <AiOutlineDollarCircle size={30} color="#FF4B4B" />
         <div className="text-sm text-gray-400">Salary</div>
         <div className="font-semibold">15LPA</div>
       </div>
       <div className='flex flex-col items-center'>
         <MdEngineering size={30} color="#FF4B4B" />
         <div className="text-sm text-gray-400">Job Type</div>
         <div className="font-semibold">Full Time</div>
       </div>
     </div>

     <Divider size="sm" />

     <div className="my-5">
       <div className="text-xl font-semibold">Skills Required</div>
       <div className="flex flex-wrap gap-2 mt-2">
       <span className="bg-[#FF4B4B] px-3 py-1 rounded-full text-sm">React js</span>
       <span className="bg-[#FF4B4B] px-3 py-1 rounded-full text-sm">Node js</span>
       <span className="bg-[#FF4B4B] px-3 py-1 rounded-full text-sm">Javascript </span>
       </div>
     </div>

     <Divider size="sm" />

     <section className="my-4 space-y-4 text-sm text-gray-300 leading-relaxed">
       <div>
         <h3 className="text-xl font-semibold text-white">About the Job</h3>
         <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quia natus facilis sunt doloribus consectetur aliquid quae ullam adipisci totam nihil ea repudiandae, non atque provident tempore! Recusandae, esse odio.
         </p>
       </div>
       <div>
         <h3 className="text-xl font-semibold text-white">Responsibilities</h3>
         <ul className="list-disc ml-6">

         <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, fuga.</li>
         <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, fuga.</li>
         <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, fuga.</li>
         </ul>
       </div>
       <div>
         <h3 className="text-xl font-semibold text-white">Qualifications and Skill Sets</h3>
         <ul className="list-disc ml-6">
         <li >Lorem ipsum dolor sit amet.</li>
         <li >Lorem ipsum dolor sit amet.</li>
         <li >Lorem ipsum dolor sit amet.</li>
         </ul>
       </div>
       <Divider size="sm"></Divider>
       <div>
         <h3 className="text-xl font-semibold text-white">About the company</h3>
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
           <div className="flex items-center gap-3">
             <img className="h-16 w-16 rounded-full object-cover" src={company} alt="" />
             <div>
               <h2 className="text-xl font-bold break-words">Software Engineer</h2>
               <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                 <p>Goggle</p>
                 <p>•8 days Posted ago</p>
                 <p>• 500+ Applicants</p>
               </div>
             </div>
           </div>

           <div className="flex  md:flex-col md:items-end items-start gap-2">
             <Link to={`/posted-job`} className="w-full">
               <Button  bg="#FF4B4B">Company Page</Button>
             </Link>
           </div>
         </div>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis doloremque repudiandae et consectetur quas, veritatis id quaerat consequatur quia, corrupti odit molestiae tenetur velit omnis praesentium impedit cupiditate reprehenderit sunt?</p>
       </div>
     </section>
   </div>
  )
}

export default Overview;
