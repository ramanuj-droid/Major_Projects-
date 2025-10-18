
function PostedJobCard({job}) {
  return (
    <div className="w-full rounded-lg bg-[#111111] p-2 flex flex-col gap-2 border-l-[#FF4B4B] border-l-2">
          <div>
               <div className="text-xl font-semibold">{job?.jobTitle}</div>
               <div className="text-md">{job?.location}</div>
               <div className="text-md">{job?.posted}</div>
          </div>
    </div>
  )
}

export default PostedJobCard
