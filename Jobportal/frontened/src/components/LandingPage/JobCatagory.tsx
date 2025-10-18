import { Carousel } from "@mantine/carousel"
import { jobCategories } from "../../Data/data"
import Jobs from './Jobs'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const JobCatagory = () => {
  return (
    <div className="flex flex-col mt-2 w-full items-center justify-center bg-[#1E1E2F]  min-h-screen">
      <div className="flex flex-col items-center justify-center w-full mx-1">
          <h3 className="text-4xl text-[#bdbdbd] font-semibold">Browse <span className="text-[#FF4B4B]">Job</span> Category</h3>
          <p className="text-xl mt-2 mx-0.5">Explore diverse job opportunity tailored to your skills. Start your career journey today! </p>
      </div>
      <div
      className="overflow-hidden w-full mt-4"
      >


      <Carousel
      slideSize="30%"
      height={300}
      slideGap="3px"
      controlSize={20}
      loop
      dragFree
      withIndicators
      align="start"
      previousControlIcon={<HiChevronLeft className="w-10 h-10 text-white bg-gray-700 rounded-full p-2 hover:bg-gray-600" />}
      nextControlIcon={<HiChevronRight className="w-10 h-10 text-white bg-gray-700 rounded-full p-2 hover:bg-gray-600" />}        
    >
      {jobCategories.map((category, index) => (
        <Carousel.Slide key={index}>
          <Jobs 
            img={category.img}  // Assuming category.icon is an image or React icon
            title={category.name}
            description={category.description}
            newjobs={category.newJobPosts}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
      </div>
      
    </div>
  )
}

export default JobCatagory
