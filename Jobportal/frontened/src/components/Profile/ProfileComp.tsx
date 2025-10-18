import { Button, Divider, FileInput, Textarea, TextInput } from '@mantine/core';
import avatar from '../../assets/avatar.png';
import banner from '../../assets/Profile/banner.jpg';
import { FaBriefcase } from 'react-icons/fa6';
import ExpCard from './ExpCard';
import CertCard from './CertCard';
import { MdEditNote, MdSaveAs, MdCancel } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import SelectInput from './SelectInput';
import fields from '../../assets/Data/Profile';
import SkillsEdit from './SkillsEdit';
import AddExp from './AddExp';
import AddCert from './AddCert';

interface UserType {
  name?: string;
  about?: string;
  topSkills: string[];
  experience: any[];
  certifications: any[];
  role?: string;
  company?: string;
}

interface Props {
  user: UserType;
}

function ProfileComp({ user }: Props) {
  const [edit, setEdit] = useState([false, false, false, false, false]);
  const [addExp, setAddExp] = useState(false);
  const [addCert, setAddCert] = useState(false);


  
  const [intro, setIntro] = useState({
     role: user?.role || "",
     company: user?.company || "",
     location: user?.location || "",
  });
  const [about, setAbout] = useState(user?.about || "");
  const [skill, setSkill] = useState<string[]>(user?.topSkills || []);
  const [experience, setExperience] = useState(user?.experience || []);
  const [certificate, setCertificate] = useState(user?.certifications || []);

  const handleEdit = (index: number) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };

  const handleSave = (index: number) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };

  return (
    <div className="w-full my-6 mx-2">
      {/* Banner + Avatar */}
      <div className="relative w-full">
        <img className="rounded-t-2xl w-full h-48 sm:h-56 md:h-64 object-cover" src={banner} alt="Banner" />

        <div className="absolute bottom-2 md:-bottom-12 left-4 flex items-center gap-3 sm:gap-4">
          <div className="relative">
            <img className="rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 border-4 border-[#292929] shadow-md sm:top-10" src={avatar} alt="Avatar" />
            <div className="absolute bottom-1 right-1 bg-white p-1 rounded-full shadow-sm cursor-pointer hover:scale-105 transition">

            
              <FaRegEdit size={18} className="text-gray-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Basic Info */}
      <div className="mt-9 md:mt-20 px-4 sm:px-8">
        <div className="flex flex-row justify-between items-start sm:items-center">
          <span className="text-xl sm:text-2xl font-semibold">{user?.name}</span>
          {edit[0] ? (
            <MdSaveAs onClick={() => handleSave(0)} size={25} className="mt-2 sm:mt-0" />
          ) : (
            <MdEditNote onClick={() => handleEdit(0)} size={30} className="mt-2 sm:mt-0" />
          )}
        </div>

        {edit[0] ? (
          <div className="px-4 py-6 rounded-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SelectInput  val="Software Engineer" field={fields[0]} />
              <SelectInput val="Google" field={fields[1]} />
              <SelectInput val="New York, United States" field={fields[2]} />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 mt-2 text-sm sm:text-base text-gray-300">
            <FaBriefcase />
            <span className="flex gap-1">
              <p>{user?.role},</p>
              <p>{user?.company}</p>
            </span>
          </div>
        )}
      </div>

      <Divider size="xs" className="my-4 mx-4 sm:mx-8" />

      <div className="px-4 sm:px-8">
        {/* About */}
        <div className="my-4">
          <div className="text-lg sm:text-xl font-semibold flex items-center justify-between">
            <h1>About</h1>
            {edit[1] ? (
              <MdSaveAs onClick={() => handleSave(1)} size={25} className="mt-2 sm:mt-0" />
            ) : (
              <MdEditNote onClick={() => handleEdit(1)} size={30} className="mt-2 sm:mt-0" />
            )}
          </div>
          {edit[1] ? (
            <Textarea
              placeholder="Write something about yourself..."
              onChange={(e) => setAbout(e.target.value)}
              autosize
              minRows={4}
              value={about}
            />
          ) : (
            <p className="font-light text-sm mt-1 text-gray-300">{about}</p>
          )}
        </div>

        <Divider size="xs" />

        {/* Skills */}
        <div className="my-4">
          <div className="text-lg sm:text-xl font-semibold flex items-center justify-between">
            <h2>Skills</h2>
            {edit[2] ? (
              <MdSaveAs onClick={() => handleSave(2)} size={25} className="mt-2 sm:mt-0" />
            ) : (
              <MdEditNote onClick={() => handleEdit(2)} size={30} className="mt-2 sm:mt-0" />
            )}
          </div>

          <div className="my-2 flex flex-wrap gap-2">
            {edit[2] ? (
              <SkillsEdit skill={skill} setSkill={setSkill} />
            ) : (
              skill.map((s, i) => (
                <span key={i} className="bg-gray-200 px-4 py-1 rounded-md text-black text-sm">
                  {s}
                </span>
              ))
            )}
          </div>
        </div>

        <Divider size="xs" />

        {/* Experience */}
        <div className="my-4">
          <div className="text-lg sm:text-xl font-semibold flex items-center justify-between">
            <h2>Experience</h2>
            <button onClick={() => setAddExp(!addExp)}>
              {addExp ? <MdCancel size={25} /> : <IoIosAddCircle size={25} />}
            </button>
          </div>

          {addExp && (
            <div className="transition-all duration-500 ease-in-out overflow-hidden opacity-100 translate-x-0">
              <AddExp setExperience={setExperience} />
            </div>
          )}

          <div className="my-2 space-y-4">
            {experience.map((exp, index) => (
              <ExpCard key={index} experience={experience} setExperience={setExperience} exp={exp} />
            ))}
          </div>
        </div>

        <Divider size="xs" />

        {/* Certifications */}
        <div className="my-4">
          <div className="text-lg sm:text-xl font-semibold flex items-center justify-between">
            <h2>Certification</h2>
            <button onClick={() => setAddCert(!addCert)}>
              {addCert ? <MdCancel size={25} /> : <IoIosAddCircle size={25} />}
            </button>
          </div>

          {addCert && (
            <div className="transition-all duration-500 ease-in-out overflow-hidden opacity-100 translate-x-0">
              <AddCert setCertificate={setCertificate} />
            </div>
          )}

          <div className="my-4 space-y-4">
            {certificate.map((cert, index) => (
              <CertCard setCertificate={setCertificate} key={index} cert={cert} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileComp;
