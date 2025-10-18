import Certificate2 from '../../assets/Icons/certificate.jpg';
import { MdDelete } from "react-icons/md";

const CertCard = ({ cert, setCertificate }) => {

  

  const handleDelete = () => {
    setCertificate((prev) => {
      const newCertificate = prev.filter((item) => item!== cert);
      return newCertificate;
    })
}

  return (
    <div className="w-full bg-[#1e1e1e] p-4 rounded-lg shadow-md my-1 hover:scale-101 transition-transform duration-300 cursor-pointer">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 object-cover rounded-full"
            src={Certificate2}
            alt="Company Logo"
          />
          <div className="flex flex-col">
            <div className="font-semibold text-base sm:text-lg">{cert?.name}</div>
            <div className="text-gray-400 text-sm">{cert?.issuer}</div>
          </div>
        </div>

        {/* Right Side */}

        <div className='flex flex-row items-center justify-between gap-2'>
        <div className="flex flex-col items-start sm:items-end text-sm text-gray-400">
          <span>{cert?.issueDate}</span>
          <span>{cert?.certificateId}</span>
        </div>
        <MdDelete onClick={handleDelete}  size={25}/>

        </div>
        
      </div>
    </div>
  );
};

export default CertCard;
