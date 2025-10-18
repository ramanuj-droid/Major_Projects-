import { Button, Divider } from "@mantine/core"
import { FaArrowLeft } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"
import ApplyJobComp from "../components/ApplyJob/ApplyJobComp";

const ApplyJobs = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#292929]">
      <Divider size="xs" />

      <Button
        className="m-3"
        variant="light"
        color="#FF4B4B"
        leftSection={<FaArrowLeft />}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      <Divider size="xs" />
      <div className="">
        <ApplyJobComp></ApplyJobComp>
      </div>


    </div>
  )
}

export default ApplyJobs
