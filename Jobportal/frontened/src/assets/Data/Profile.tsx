
import { FaBriefcase } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const fields=[
    {label:"Job Title",placeholder:"Enter Job Title", options:['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'], value:"Software Engineer", leftSection:<FaBriefcase size={20}/>},
    {label:"Company",placeholder:"Enter Company Name", options:['Google', 'Microsoft', 'Meta', 'Netflix', 'Adobe', 'Facebook', 'Amazon', 'Apple', 'Spotify'],value:"Google", leftSection:<FaBriefcase size={20}/>},
    {label:"Location",placeholder:"Enter Job Location", options:['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'], value:"New York, United States",leftSection:<CiLocationOn size={20}/>},
]
export default fields;