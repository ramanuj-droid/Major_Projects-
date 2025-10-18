import { jobList } from "../../assets/Data/JobsData"
import JobCard from "../Find-Jobs/JobCard"



const JobsCompany = () => {
  return (
    <div className='flex flex-wrap  mx-2 gap-2 lg:gap-5 justify-center my-3'>
      {
        jobList.map((job, index) => (<>
          {index < 3 && (<JobCard key={index} job={job} />)}
        </>
        ))
      }
    </div>
  )
}

export default JobsCompany
