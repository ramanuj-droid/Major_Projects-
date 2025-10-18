import { talents } from "../../assets/Data/TalentData"
import TalentCard from "../Find-Talent/TalentCard"


export const EmpCompany = () => {
  return (
     <div className='flex flex-wrap gap-6 my-6 mx-auto w-full'>
     {
          talents.map((tal, index) => (
               <TalentCard key={index} talent={tal} />
          ))
     }
 </div>
  )
}
