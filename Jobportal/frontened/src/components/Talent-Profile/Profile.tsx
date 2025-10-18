import { Button, Divider } from '@mantine/core';
import banner from '../../assets/Profile/banner.jpg';
import avatar from '../../assets/avatar.png';
import { FaBriefcase } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import ExpCard from './ExpCard';
import CertCard from './CertCard';


const Profile = ({user }) => {
 

  return (
    <div className="w-full  my-2 mx-2">
      {/* Banner + Avatar */}
      <div className="relative">
        <img className="rounded-t-2xl w-full h-48 object-cover" src={banner} alt="Banner" />
        <img
          className="rounded-full w-24 h-24 sm:w-32 sm:h-32 absolute top-1/2 left-4 border-4 border-[#292929]"
          src={avatar}
          alt="Avatar"
        />
      </div>

      {/* Basic Info */}
      <div className="mt-16 sm:mt-20 px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <span className="text-xl sm:text-2xl font-semibold">{user?.name}</span>
          <Button size="sm" className="mt-2 sm:mt-0">Message</Button>
        </div>

        <div className="flex items-center gap-2 mt-2 text-sm sm:text-base text-gray-300">
          <FaBriefcase />
          <span className="flex gap-1">
            <p>{user?.role},</p>
            <p>{user?.company}</p>
          </span>
        </div>

        <div className="flex items-center gap-2 mt-1 text-sm sm:text-base text-gray-300">
          <IoLocationOutline />
          <span>{user?.location}</span>
        </div>
      </div>

      <Divider size="xs" className="my-4 mx-4 sm:mx-8" />

      {/* About, Skills, Experience, Certification */}
      <div className="px-4 sm:px-8">
        {/* About */}
        <div className="my-4">
          <div className="text-lg sm:text-xl font-semibold">About</div>
          <p className="font-light text-sm mt-1 text-gray-300">{user?.about}</p>
        </div>

        <Divider size="xs" />

        {/* Skills */}
        <div className="my-4">
          <div className="text-lg sm:text-xl font-semibold">Skills</div>
          <div className="my-2 flex flex-wrap gap-2">
            {user?.topSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-200 px-2 py-1 rounded-md text-black text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <Divider size="xs" />

        {/* Experience */}
        <div className="my-4">
          <div className="text-lg sm:text-xl font-semibold">Experience</div>
          <div className="my-2 space-y-4">
            {user?.experience.map((exp, index) => (
              <ExpCard key={index} exp={exp} />
            ))}
          </div>
        </div>

        <Divider size="xs" />

        {/* Certifications */}
        <div className="my-4">
          <div className="text-lg sm:text-xl font-semibold">Certification</div>
          <div className="my-2 space-y-4">
            {user?.certifications.map((cert, index) => (
              <CertCard key={index} cert={cert} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
