import { Divider } from "@mantine/core"
import SearchBar from "../components/Find-Jobs/SearchBar"
import Jobs from "../components/Find-Jobs/Jobs"

const FindJobs = () => {
  return (
     <div  className="min-h-screen font-['poppins'] bg-[#292929]">     
               <Divider size="xs"></Divider>
               <SearchBar></SearchBar>
               <Divider size="xs"></Divider>
               <Jobs></Jobs>
     </div>


  )
}

export default FindJobs
