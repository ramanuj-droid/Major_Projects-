import { Tabs } from "@mantine/core";
import { activeJobs } from "../../assets/Data/PostedJob";
import PostedJobCard from "./PostedJobCard";

function PostedJobComp() {
  return (
    <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[350px] flex-shrink-0 bg-[#2C2C2C] rounded-lg p-4 flex flex-col gap-4 
      sm:h-[80vh]  md:max-h-none md:overflow-y-visible">
      
      {/* Heading */}
      <div className="text-2xl  font-semibold text-[#F5F5F5]">Jobs</div>

      {/* Tabs */}
      <Tabs
        color="red"
        variant="pills"
        defaultValue="active"
        classNames={{
          list: "flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-500",
          tab: "min-w-[100px] whitespace-nowrap",
        }}
      >
        <Tabs.List>
          <Tabs.Tab value="active">Active [4]</Tabs.Tab>
          <Tabs.Tab value="draft">Draft [1]</Tabs.Tab>
        </Tabs.List>

        {/* Active Jobs Panel */}
        <Tabs.Panel value="active" pt="xs">
          <div className="flex flex-col gap-4 max-h-[60vh] overflow-y-auto">
            {activeJobs.slice(0, 5).map((job, index) => (
              <PostedJobCard job={job} key={index} />
            ))}
          </div>
        </Tabs.Panel>

        {/* Draft Jobs Panel */}
        <Tabs.Panel value="draft" pt="xs">
          <div className="flex flex-col gap-4">
            {activeJobs[5] && <PostedJobCard job={activeJobs[5]} key={5} />}
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default PostedJobComp;
