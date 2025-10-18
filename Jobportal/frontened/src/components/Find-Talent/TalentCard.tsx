import { CiBookmark, CiLocationOn } from "react-icons/ci"
import avatar  from '../../assets/avatar.png';
import { Button, Divider } from "@mantine/core";
import { useNavigate } from "react-router-dom";


const TalentCard = ({talent}) => {

     const navigate = useNavigate();

    

  return (
     <div className="flex flex-col gap-2 p-4 bg-[#343F3F] text-white rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 max-w-md hover:scale-101 transition-transform duration-300 cursor-pointer">
     <div className="flex items-center justify-between">
       <div className="flex items-center gap-2">
         <img className="h-10 w-10 object-cover rounded-full" src={avatar} alt="" />
         <div className="flex flex-col">
           <div className="font-semibold text-lg">{talent.name}</div>
           <div className="text-gray-300 text-sm">{talent.role} • {talent.company} </div>
         </div>
       </div>
       <CiBookmark className="text-2xl cursor-pointer hover:text-gray-400" />
     </div>

     <div className="flex flex-wrap gap-2 text-xs text-gray-700">

          {talent.topSkills.map((skill, index)=>(
                    <span key={index} className="bg-gray-200 px-2 py-1 rounded-md">{skill}</span>
          ))}
       
     </div>

     <p className="text-white text-sm">
       {talent.about.length > 150 
         ?  talent.about.slice(0, 150) + '...' 
         : talent.about}
       
     </p>

     <Divider size="sm" color="grey" />

     <div className="flex justify-between text-sm font-medium text-gray-300">
       <div>₹ {talent.expectedCtc}</div>
       <div className="flex items-center"><CiLocationOn size="20"/> {talent.location}</div>
     </div>
     <Divider size="sm" color="grey" />

     <div className="flex justify-between text-sm font-medium text-gray-300">
         
     <Button onClick={()=>navigate(`/talent-profile/${talent.name}`)} variant="default" color="red">Profile</Button>
       <Button variant="filled" color="red">Message</Button>
     </div>
   </div>
  )
}

export default TalentCard;
