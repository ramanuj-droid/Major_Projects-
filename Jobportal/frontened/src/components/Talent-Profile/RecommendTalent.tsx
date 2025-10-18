import { talents } from '../../assets/Data/TalentData';
import RecTalentCard from './RecTalentCard';

const RecommendTalent = ({ user,setUser,profileHeight}) => {
  return (
    <div className="w-full h-full px-2 py-4">
      <div className="flex flex-col w-full">
        <h3 className="text-2xl font-semibold mb-4 text-white">Recommended Talents</h3>

        <div className="flex flex-col gap-4 overflow-y-auto" style={{ maxHeight: profileHeight }}>
          {talents.filter((talent)=>talent!==user).map((talent, index) => (
            <RecTalentCard setUser={setUser} talent={talent} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default RecommendTalent;
