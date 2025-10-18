
import JobCard from './JobCard';
import Sort from './Sort';
import {jobList} from '../../assets/Data/JobsData'

const Jobs = () => {
  return (
    <div className='lg:mx-8 mx-2 my-4   rounded-lg '>
      <div className='flex my-4  justify-between items-center w-full gap-4'>
        <h1 className='text-xl  sm:text-[15px] md:text-3xl  lg:font-semibold lg:text-2xl text-white font-semibold text-center md:text-left'>
          Recommended Jobs
        </h1>
        <Sort />
      </div>
      <div>

      <div className='flex flex-wrap  mx-2 gap-2 lg:gap-5 justify-center'>
          {
               jobList.map((job, index) => (
                    <JobCard key={index} job={job} />
               ))
          }
      </div>

      </div>
      
    </div>
  );
};

export default Jobs;