import { Button, Divider, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from '@mantine/core';
import company from '../../assets/Icons/company.jpg';
import { useState } from 'react';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { findJobById } from '../../utils/utils01';

function ApplyJobComp() {

  const { id } = useParams();

  const [job, setJob]=useState(findJobById(id));

  const [preview, setPreview] = useState<boolean >(false);
  const [submit, setSubmit] = useState<boolean >(false);
  const navigate=useNavigate();

  const handlePreview = () => {
    setPreview(!preview);
    window.scrollTo({top: 10, behavior: 'smooth' });
  };

  const handleSubmit = () => {
    let x = 5;
    setSubmit(true);
  
    const toastId = toast.success(
      <div className="space-y-1">
        <div className="text-xl font-semibold text-[#292929]">🎉 Application Submitted!</div>
        <div className="text-sm text-gray-700">Redirecting to Find Jobs page in <span className="font-medium">{x}</span> seconds...</div>
      </div>,
      {
        toastId: "app-submit-toast",
        autoClose: false,
        closeOnClick: true,
        draggable: true,
        hideProgressBar: true,
        position: "top-center",
        className: "bg-white border border-[#FF4B4B] rounded-xl shadow-lg p-4", 
        bodyClassName: "text-start",
        progressClassName: "bg-[#FF4B4B]",
      }
    );
  
    const interval = setInterval(() => {
      x--;
      if (x > 0) {
        toast.update(toastId, {
          render: (
            <div className="space-y-1 ">
              <div className="text-xl font-semibold text-[#292929]">🎉 Application Submitted!</div>
              <div className="text-sm text-gray-700">Redirecting to Find Jobs page in <span className="font-medium">{x}</span> seconds...</div>
            </div>
          ),
        });
      } else {
        clearInterval(interval);
        toast.dismiss(toastId);
        navigate('/find-job');
      }
    }, 1000);
  };
  
  

  return (
    <div className="w-full max-w-3xl mx-auto my-6 font-['Poppins'] bg-[#292929] text-white p-4 sm:p-6 rounded-lg relative">
      {/* Header */}
      <LoadingOverlay
          className='!fixed'
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 1 }}
          loaderProps={{ color: '#FF4B4B', type: 'bars' }}
        />
      <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
        <img className="h-16 p-2 w-16 rounded-full object-cover" src={job?.img?job?.img:company} alt="Company Logo" />
        <div>
          <h2 className="text-xl font-bold break-words">{job?.jobTitle}</h2>
          <div className="flex flex-wrap gap-2 text-sm text-gray-300">
            <p>{job?.company}</p>
            <p>• {job?.postedDaysAgo} days Posted ago</p>
            <p>• {job?.applicants}+ Applicants</p>
          </div>
        </div>
      </div>

      <Divider my="10px" size="sm" />

      {/* Application Form */}
      <div>
        <h3 className="text-2xl my-4">Submit your Application</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-3">
          <TextInput readOnly={preview} variant={preview? 'unstyled':"default"} label="Full Name" placeholder="Enter name" withAsterisk  />
          <TextInput readOnly={preview} variant={preview? 'unstyled':"default"}  leftSection={<MdOutlineAlternateEmail />} label="Email" placeholder="Enter Email" withAsterisk />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-3">
          <NumberInput readOnly={preview} variant={preview? 'unstyled':"default"} label="Phone Number" placeholder="Enter Phone Number with code" withAsterisk />
          <TextInput readOnly={preview} variant={preview? 'unstyled':"default"} label="Personal Website" placeholder="Enter URL" withAsterisk />
        </div>

        <div className="my-3">
          <FileInput readOnly={preview} variant={preview? 'unstyled':"default"}  label="Attach your CV" placeholder="Your CV" withAsterisk />
        </div>

        <div className="my-3">
          <Textarea
            label="Cover Letter"
            placeholder="Type something about yourself"
            variant={preview? 'unstyled':"default"}
            readOnly={preview} 
            autosize
            minRows={4}
            maxRows={6}
            withAsterisk
          />
        </div>

        <div className="w-full flex justify-end gap-2">
           { !preview && <Button bg="#FF4B4B" variant="transparent" color="white" fullWidth onClick={handlePreview} >
            Preview
          </Button>}

          {
            preview &&<> <Button bg="#FF4B4B" variant="transparent" color="white" fullWidth  onClick={handlePreview} >
            Edit</Button> 
             <Button  bg="#FF4B4B" variant="transparent" color="white" fullWidth onClick={()=>handleSubmit()} >
             Submit
           </Button>
           </>
            
          }


          
         
        </div>
      </div>
    </div>
  );
}

export default ApplyJobComp;
