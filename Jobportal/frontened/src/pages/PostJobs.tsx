import { Divider } from "@mantine/core"
import PostJob from "../components/Post-Jobs/PostJob"


const PostJobs = () => {
  return (
    <div className="min-h-screen bg-[#292929]  text-white font-['poppins']">
     <Divider size="sm"></Divider>
     <PostJob></PostJob>
      
    </div>
  )
}

export default PostJobs
