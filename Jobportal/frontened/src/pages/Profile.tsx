import { talents } from "../assets/Data/TalentData"
import ProfileComp from "../components/Profile/ProfileComp"
function Profile() {
  return (
    <div className="w-full md:w-5/6  mx-auto bg-[#292929] text-white min-h-screen font-['poppins'] p-4f-">
          <ProfileComp user={talents[0]} ></ProfileComp>          
    </div>
  )
}

export default Profile
