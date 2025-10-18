import { Badge, Tabs } from "@mantine/core";
import Overview from "./Overview";
import { talents } from "../../assets/Data/TalentData";
import ApplicantCard from "./ApplicantCard";
import InvitedCard from "./InvitedCard";

function PostedJobDes() {
  return (
    <div className="my-4 px-4 sm:px-6 md:px-8 lg:w:4/6">
      {/* Title Section */}
      <div className="text-xl sm:text-2xl font-semibold text-white my-3 flex flex-wrap items-center gap-3 sm:gap-4">
        Software Engineer <Badge color="blue">Badge</Badge>
      </div>

      {/* Tabs */}
      <div>
        <Tabs color="red" variant="pills" defaultValue="overview">
          <Tabs.List className="flex flex-wrap gap-2">
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
            <Tabs.Tab value="invited">Invited</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview" pt="xs">
            <div className="flex flex-col gap-3 mt-4 text-white">
              <Overview></Overview>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="applicants" pt="xs">
            <div className="text-white mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  gap-6">
              {
                talents.map((talent, index) => (
                  <ApplicantCard key={index} />
                ))
              }
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="invited" pt="xs">
          <div className="text-white mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  gap-6">
              {
                talents.map((talent, index) => (
                  <InvitedCard key={index} />
                ))
              }
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
}

export default PostedJobDes;
