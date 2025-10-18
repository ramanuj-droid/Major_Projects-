import { Link } from "react-router-dom";
import { companyData } from "../../assets/Data/Company";


const AboutCompany = ({company}) => {
     return (
          <div className="">
               {
                    Object.entries(company).filter(([keys, value]) => keys !== "Name" && keys!=="img" && keys!=="id").map(([keys, value]) => {
                         return (
                         <div>
                              <div className="flex flex-col my-4">
                                   <div className="text-xl font-semibold ">
                                        {keys}
                                   </div>

                                   {
                                        keys === "Website" && <a href={`${value}`} target="_blank"> <div className="text-md font-light text-[#FF4B4B] ">
                                             {value}
                                        </div></a>
                                   }
                                   {
                                        keys !== "Website" && <div className="text-md font-light ">
                                             {value}
                                        </div>
                                   }

                              </div>
                         </div>)
                    })
               }
          </div>
     )
}

export default AboutCompany;
