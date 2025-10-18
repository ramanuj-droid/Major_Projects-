import { Button, Divider } from "@mantine/core"
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import CompanyComp from "../components/Company/CompanyProfile";
import SimilarCompany from "../components/Company/SimilarCompany";
import {findCompanyById} from '../utils/utils01';
import { useState } from "react";


const Company = () => {

     const {id}=useParams();

     const [company, setCompany] = useState(findCompanyById(id));

     const navigate = useNavigate();
     return (
          <div className="min-h-screen">
               <Divider size="xs" />

               <Button
                    className="m-3"
                    variant="light"
                    color="#FF4B4B"
                    leftSection={<FaArrowLeft />}
                    onClick={() => navigate(-1)}
               >
                    Back
               </Button>
               <Divider size="xs" />
               <div className="flex md:flex-row flex-col ">
                    <CompanyComp company={company} ></CompanyComp>
                    <SimilarCompany company={company} setCompany={setCompany}></SimilarCompany>
               </div>
               


          </div>
     )
}

export default Company