import Sort from "../Find-Jobs/Sort";
import {talents} from '../../assets/Data/TalentData'
import TalentCard from "./TalentCard";

const Talent = () => {
  return (
    <div className='lg:mx-12 mx-2 my-4   rounded-lg '>
      <div className='flex my-4  justify-between items-center w-full gap-4'>
        <h1 className='text-xl  sm:text-[15px] md:text-3xl  lg:font-semibold lg:text-2xl text-white font-semibold text-center md:text-left'>
          Recommended Talents
        </h1>
        <Sort />
      </div>
      <div>

      <div className='flex flex-wrap gap-x-12  gap-y-6  justify-center'>
          {
               talents.map((tal, index) => (
                    <TalentCard key={index} talent={tal} />
               ))
          }
      </div>

      </div>
      
    </div>
  )
}

export default Talent
