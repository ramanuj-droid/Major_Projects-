import { useNavigate } from 'react-router-dom';
import companyImg from '../../assets/Icons/company.jpg';
import { BsBoxArrowUpRight } from "react-icons/bs";


function CompanyCard({comp,  setCompany}){
  const navigate=useNavigate();
  return (
    <div onClick={()=>{setCompany(comp); navigate(`/company/${comp?.id}`)}} className="flex justify-between items-center border  rounded-xl p-4   w-full max-w-md mx-auto transition-transform duration-300 transform hover:scale-[1.02] hover:shadow-xl cursor-pointer ">
      
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <img className="h-16 w-16 object-cover rounded-2xl p-2" src={comp?.img?comp?.img:companyImg} alt="Company" />
        <div>
          <div className="text-lg font-semibold">{comp?.Name}</div>
          <div className="text-sm"> +{comp?.Size}</div>
        </div>
      </div>

      {/* Right Section */}
      <a
        href="https://www.meta.com" // optional: dynamic company link
        target="_blank"
        rel="noopener noreferrer"
        className="text-amber-600 hover:text-amber-800 transition-colors duration-200"
      >
        <BsBoxArrowUpRight size={22} />
      </a>
    </div>
  );
}

export default CompanyCard;
