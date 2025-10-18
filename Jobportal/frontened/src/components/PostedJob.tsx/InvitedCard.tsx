import { CiBookmark } from 'react-icons/ci';
import avatar from '../../assets/avatar.png';
import { Button, Divider } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { LuCalendarDays } from "react-icons/lu";

function InvitedCard() {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-3 p-4 bg-[#343F3F] text-white rounded-xl shadow-md w-full max-w-md transition-transform duration-300 ease-in-out hover:scale-[1.02] cursor-pointer">

      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img className="h-10 w-10 object-cover rounded-full" src={avatar} alt="avatar" />
          <div className="flex flex-col">
            <span className="font-semibold text-base sm:text-lg">Avinash Rathore</span>
            <span className="text-gray-300 text-sm">Engineer • Microsoft</span>
          </div>
        </div>
        <CiBookmark className="text-2xl hover:text-gray-400 transition-colors" />
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 text-xs text-gray-800">
        <span className="bg-gray-200 px-2 py-1 rounded-md">React</span>
        <span className="bg-gray-200 px-2 py-1 rounded-md">Node.js</span>
        <span className="bg-gray-200 px-2 py-1 rounded-md">TypeScript</span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-100">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus corporis labore recusandae, magni ullam?
      </p>

      <Divider size="sm" color="gray" />
      <div className="flex  items-center gap-2">
      <LuCalendarDays   size={25}/>  
        <p>Interview : May 03, 2024,10:00 AM </p >
        
      </div>
      <Divider size="sm" color="gray" />

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 justify-between text-sm font-medium">
        <Button
          fullWidth
          onClick={() => navigate(`/talent-profile/Jarrod Wood`)}
          variant="default"
          color="red"
        >
          Accept
        </Button>
        <Button fullWidth variant="filled" color="red">
          Reject
        </Button>
      </div>
    </div>
  )
}

export default InvitedCard
