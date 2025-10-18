import { Button, Divider } from "@mantine/core";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import Profile from "../components/Talent-Profile/Profile";
import RecommendTalent from "../components/Talent-Profile/RecommendTalent";
import { useEffect, useRef, useState } from "react";

import { findUserByName } from '../utils/utils01';

const TalentProfile = () => {
  const { name } = useParams();
  const profileRef = useRef(null);
  const [profileHeight, setProfileHeight] = useState(0);
   const [user, setUser] = useState(findUserByName(name));

  useEffect(() => {
    if (profileRef.current) {
      setProfileHeight(profileRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="font-['poppins'] bg-[#292929] text-white min-h-screen">
      <Divider size="xs" />
      <Link to="/find-talent">
        <Button
          className="m-3"
          variant="light"
          color="#FF4B4B"
          leftSection={<FaArrowLeft />}
        >
          Back
        </Button>
      </Link>
      <Divider size="xs" />

      <div className="flex flex-col lg:flex-row gap-4 px-2">
        {/* Profile with ref */}
        <div ref={profileRef} className="lg:w-2/3">
          <Profile user={user} />
        </div>

        {/* Recommend Talent scrolls based on profile height */}
        <div
          className="lg:w-1/3 px-2"
          
        >
          <RecommendTalent profileHeight={profileHeight} user={user} setUser={setUser}/>
        </div>
      </div>
    </div>
  );
};

export default TalentProfile;
