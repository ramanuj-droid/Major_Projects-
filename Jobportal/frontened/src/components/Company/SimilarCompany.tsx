import CompanyCard from "./CompanyCard"

import {companiesData} from '../.././assets/Data/Company';

function SimilarCompany({company, setCompany}) {
  return (
    <div className="md:w-1/3 my-3 mx-2 flex flex-col gap-2 ">
          <div className="flex justify-center items-center w-full">
               <h2 className="text-2xl font-semibold ">Similar Companies</h2>
          </div>
          <div className="flex flex-col gap-2">
               {
                    companiesData.filter((cp)=>cp.id!==company.id).map((comp, index) => { return <CompanyCard  setCompany={setCompany} key={index} comp={comp}></CompanyCard>})
               }

               
          </div>
      
    </div>
  )
}

export default SimilarCompany
