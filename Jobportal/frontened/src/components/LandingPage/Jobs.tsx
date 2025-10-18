
const Jobs = ({img,title,description, newjobs }) => {
  return (
     <div className="flex flex-col items-center justify-center 
     transition-all duration-300 transform hover:scale-105 
     cursor-pointer border-2 border-amber-300 shadow-lg 
     bg-[#1e1e1e] rounded-xl max-w-xs mx-auto mt-4 p-6">
    
    {/* Icon / Image Section */}
    <div className="flex items-center justify-center w-20 h-20 
        bg-amber-300 rounded-full p-3 shadow-md">
        <img className="w-14 h-14" src={img} alt="DevOps & IT Operations" />
    </div>

    {/* Job Category Title */}
    <h2 className="text-xl font-semibold text-white mt-4 text-center">
        {title.split(" ")[0]}   
    </h2>

    {/* Description */}
    <p className="text-sm text-gray-400 text-center mt-2 px-4">
            {description.length > 50 ? `${description.slice(0, 50)}...` : description}
    </p>

    {/* Job Count */}
    <h3 className="text-sm text-amber-400 font-medium mt-3">
        {newjobs}+ New Jobs Posted
    </h3>
</div>

  )
}

export default Jobs
