
import Company from '../../assets/Icons/company.jpg';
import { MdDelete } from "react-icons/md";

const ExpCard = ({ experience, setExperience,exp }) => {

  const handleDelete = () => {
      setExperience((prev) => {
        const newExperience = prev.filter((item) => item!== exp);
        return newExperience;
      })
  }
  return (
    <div className="w-full bg-[#1e1e1e] p-4 rounded-lg shadow-md text-white my-1 hover:scale-101 transition-transform duration-300 cursor-pointer">
      {/* Top Section: Title, Company, and Dates */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Left - Logo and Info */}
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 object-cover rounded-full"
            src={Company}
            alt="Company Logo"
          />
          <div className="flex flex-col">
            <div className="font-semibold text-base sm:text-lg">{exp?.title}</div>
            <div className="text-gray-400 text-sm">{exp?.company}</div>
          </div>
        </div>

        {/* Right - Dates */}
        <div className="text-sm text-gray-400 sm:text-right flex flex-col items-end">
          <div className='flex gap-2'>
          <MdDelete  onClick={handleDelete}  size={25}/>
          </div>
          <span>{exp?.startDate} - {exp?.endDate}</span>
        </div>
      </div>

      {/* Description */}
      <div className="mt-3 text-sm text-gray-300 leading-relaxed">
        {exp?.description}
      </div>
    </div>
  );
};

export default ExpCard;
