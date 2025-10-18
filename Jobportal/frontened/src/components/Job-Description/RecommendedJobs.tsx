import { jobList } from '../../assets/Data/JobsData';
import JobCard from './JobCard';

const RecommendedJobs = ({profileHeight, job, setJob}) => {
  return (
    <div className="w-full  bg-[#1f1f1f] rounded-lg p-5 my-5 flex flex-col gap-5 overflow-x-hidden">
      <div className="text-xl font-semibold text-center">Recommended Jobs</div>
      <div className="grid grid-cols-1 gap-3 overflow-y-auto" style={{ maxHeight: profileHeight}}>
        {jobList.filter((jb)=>jb.id!==job.id).map((job, index) => (
          <JobCard setJob={setJob} key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedJobs;
