import { talents } from "../assets/Data/TalentData";
import {jobList } from '../assets/Data/JobsData';
import {companiesData} from '../assets/Data/Company';

export function findUserByName(name:string )
{
     const user = talents.find((user) => user.name === name);
     return user;
}
export function findJobById(id:string|number )
{
     const  jobId:number = parseInt(id); 
     const job = jobList.find((job) => job.id == jobId);
     return job;
}

export function findCompanyById(id:string|number )
{
     const  companyId:number = parseInt(id); 
     const company = companiesData.find((job) => job.id == companyId);
     return company;
}

export function formatMonthYear(period: Date): string {
     const monthNames = [
       "January", "February", "March", "April", "May", "June",
       "July", "August", "September", "October", "November", "December"
     ];
   
     const month = period?.getMonth();
     const year = period?.getFullYear();
   
     if (month === undefined || year === undefined) return "";
     return `${monthNames[month]} ${year}`;
   }
   