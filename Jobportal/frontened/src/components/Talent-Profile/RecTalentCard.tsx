import { CiBookmark, CiLocationOn } from "react-icons/ci";
import avatar from '../../assets/avatar.png';
import { Button, Divider } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { findUserByName } from '../../utils/utils01';

const RecTalentCard = ({ talent, setUser }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-3 p-4 bg-[#343F3F] text-white rounded-2xl shadow-lg w-full sm:max-w-md hover:scale-[1.01] transition-transform duration-300 cursor-pointer ">
      {/* Header: Avatar & Info */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <img className="h-12 w-12 sm:h-10 sm:w-10 object-cover rounded-full" src={avatar} alt="" />
          <div className="flex flex-col">
            <div className="font-semibold text-lg">{talent.name}</div>
            <div className="text-gray-300 text-sm">{talent.role} • {talent.company}</div>
          </div>
        </div>
        <CiBookmark className="text-2xl self-end sm:self-center hover:text-gray-400" />
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 text-xs text-gray-700">
        {talent.topSkills.map((skill, index) => (
          <span key={index} className="bg-gray-200 px-2 py-1 rounded-md text-black">{skill}</span>
        ))}
      </div>

      {/* About */}
      <p className="text-white text-sm">
        {talent.about.length > 150
          ? talent.about.slice(0, 150) + '...'
          : talent.about}
      </p>

      <Divider size="sm" color="grey" />

      {/* CTC & Location */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-sm font-medium text-gray-300">
        <div> {talent.expectedCtc}</div>
        <div className="flex items-center gap-1"><CiLocationOn size="18" /> {talent.location}</div>
      </div>

      <Divider size="sm" color="grey" />

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-2 text-sm font-medium text-gray-300">
        <Button
          fullWidth
          size="sm"
          onClick={() => {navigate(`/talent-profile/${talent.name}`); setUser(findUserByName(talent.name));}}
          variant="default"
          color="red"
        >
          Profile
        </Button>
        <Button fullWidth size="sm" variant="filled" color="red">
          Message
        </Button>
      </div>
    </div>
  );
};

export default RecTalentCard;
