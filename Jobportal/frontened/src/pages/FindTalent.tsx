import SearchBar from "../components/Find-Talent/SearchBar"
import { Divider } from "@mantine/core"
import Talent from "../components/Find-Talent/Talent"

const FindTalent = () => {
  return (
    <div className="min-h-screen font-['poppins'] bg-[#292929] text-white">
      <Divider size="xs"></Divider>
      <SearchBar></SearchBar>
      <Divider size="xs"></Divider>
      <Talent></Talent>
    </div>
  )
}

export default FindTalent
