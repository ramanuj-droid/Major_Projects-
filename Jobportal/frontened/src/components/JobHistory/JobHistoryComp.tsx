import { Tabs } from "@mantine/core"
import { jobList } from "../../assets/Data/JobsData"
import AppliedCard from "./AppliedCard"
import SavedCard from "./SavedCard"
import OfferedCard from "./OfferedCard"
import InterviewCard from "./InterviewCard"


function JobHistoryComp() {
     return (
          <div className=" my-4 mx-4">
               <div>
                    <h2 className="text-2xl font-semibold">JobHistory</h2>
               </div>
               <div>
                    <Tabs color="red" variant="pills" defaultValue="applied">
                         <Tabs.List>
                              <Tabs.Tab value="applied" >
                                   Applied
                              </Tabs.Tab>
                              <Tabs.Tab value="saved" >
                                   Saved
                              </Tabs.Tab>
                              <Tabs.Tab value="offered" >
                                   Offered
                              </Tabs.Tab>
                              <Tabs.Tab value="interviewing" >
                                   Interviewing
                              </Tabs.Tab>
                         </Tabs.List>

                         <Tabs.Panel value="applied" pt="xs">
                              <div className='flex flex-wrap   m-2 gap-2 lg:gap-5 justify-center'>
                                   {
                                        jobList.map((job, index) => (
                                             <AppliedCard key={index} job={job} />
                                        ))
                                   }
                              </div>
                         </Tabs.Panel>

                         <Tabs.Panel value="saved">
                         <div className='flex flex-wrap  m-2 gap-2 lg:gap-5 justify-center'>
                                   {
                                        jobList.map((job, index) => (
                                             <SavedCard key={index} job={job} />
                                        ))
                                   }
                              </div>
                         </Tabs.Panel>
                         <Tabs.Panel value="offered">
                         <div className='flex flex-wrap  m-2 gap-2 lg:gap-5 justify-center'>
                                   {
                                        jobList.map((job, index) => (
                                             <OfferedCard key={index} job={job} />
                                        ))
                                   }
                              </div>
                         </Tabs.Panel>

                         <Tabs.Panel value="interviewing">
                         <div className='flex flex-wrap  m-2 gap-2 lg:gap-5 justify-center'>
                                   {
                                        jobList.map((job, index) => (
                                             <InterviewCard key={index} job={job} />
                                        ))
                                   }
                              </div>
                         </Tabs.Panel>
                    </Tabs>
               </div>

          </div>
     )
}

export default JobHistoryComp
