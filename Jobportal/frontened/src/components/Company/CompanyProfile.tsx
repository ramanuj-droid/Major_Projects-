import banner from '../../assets/Profile/banner.jpg';
import Google from '../../assets/Icons/Google.png';
import companyImg from '../../assets/Icons/company.jpg';
import { Divider, Tabs } from '@mantine/core';
import { CiLocationOn } from "react-icons/ci";
import AboutCompany from './AboutCompany';
import JobsCompany from './JobsCompany';
import { EmpCompany } from './EmpCompany';


const CompanyProfile = ({company}) => {
  return (
    <div className='md:w-2/3 my-3 mx-2'>

      <div>
        <div className="relative ">
          <img className="rounded-t-2xl w-full h-48 object-cover" src={banner} alt="Banner" />
          <img
            className="rounded-3xl p-2 w-24 h-24 sm:w-32 sm:h-32 absolute top-1/2 left-4 border-4 bg-[#292929] border-[#292929]"
            src={company?.img? company?.img : companyImg}
            alt="Avatar"
          />
        </div>
        <div className='my-8 mx-4'>
          <div className='flex flex-col gap-1'>
            <h2 className="text-3xl font-bold ">{company?.Name}</h2>
            <p className='flex items-center gap-1'> <CiLocationOn size={25} /> {company?.Headquarters} </p>
          </div>
          <div>

          </div>

        </div>
        <Divider size="sm"></Divider>

        <div>
          <Tabs variant="outline" defaultValue="about">
            <Tabs.List className='[&_button]:!text-lg font-semibold '>
              <Tabs.Tab value="about" >
                About
              </Tabs.Tab>
              <Tabs.Tab value="jobs" >
                Jobs
              </Tabs.Tab>
              <Tabs.Tab value="employees" >
                Employees
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="about">
              <AboutCompany company={company}></AboutCompany>
            </Tabs.Panel>

            <Tabs.Panel value="jobs">
              <JobsCompany></JobsCompany>
            </Tabs.Panel>

            <Tabs.Panel value="employees">
              <EmpCompany></EmpCompany>
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>

    </div>
  )
}

export default CompanyProfile;
