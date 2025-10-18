import dataEntry from '../assets/Category/Data Entry.png'
import ArtDesign from '../assets/Category/Arts & Design.png'
import customersupport from '../assets/Category/Customer Support.png'
import Finance from '../assets/Category/Finance.png'
import ContentWriting from '../assets/Category/Content Writing.png'
import webDeveloper from '../assets/Category/Web Developer.png'
import sales from '../assets/Category/Sales.png'
import uiux from '../assets/Category/UI-UX Designer.png'
import digitalmarketing from '../assets/Category/Digital Marketing.png'
import humanresources from '../assets/Category/Human Resource.png'
import applyJob from '../assets/Working/Apply for job.png';
import buildResume from '../assets/Working/Build your resume.png';
import getHired from '../assets/Working/Get hired.png'
import av1 from '../assets/avatar.png'
import av2 from '../assets/avatar1.png'
import av3 from '../assets/avatar2.png'
import av4 from '../assets/Working/Girl.png'
import { ImGift } from 'react-icons/im'


// imports





export const companies = ["Google", "Amazon", "Figma", "Netflix", "Microsoft", "Pinterest", "Slack", "Spotify", "Oracle", "Walmart"];

export const testimonials = [
  {
    name: "Rahul Sharma",
    testimonial: "This platform helped me land my dream job effortlessly. The process was smooth and well-structured!",
    rating: 5,
    img: av1,
  },
  {
    name: "Ananya Verma",
    testimonial: "I loved the intuitive design and step-by-step guidance. It made job hunting so much easier.",
    rating: 4.5,
    img: av2,
  },

  {
    name: "Sneha Patel",
    testimonial: "Great platform, but I wish there were more job opportunities listed for my domain.",
    rating: 4,
    img: av3,
  },

];


export const work = [{
  "name": "Build Your Resume",
  "desc": "Create a standout resume with your skills. ",
  "img": buildResume,
}, {
  "name": "Apply for Job",
  "desc": "Find and apply for jobs that match your skills. ",
  "img": applyJob,
}, {
  "name": "Get Hired",
  "desc": "Connect with employers and start your new job.",
  "img": getHired,

}]

export const jobCategories = [
  {
    name: "Software Development",
    description: "Design, develop, and maintain software applications.",
    newJobPosts: 120,
    img: webDeveloper,

  },
  {
    name: "Content Writing",
    description: "Create and edit content for various media platforms.",
    newJobPosts: 50,
    img: ContentWriting
  },
  {
    name: "Cybersecurity",
    description: "Protect systems and networks from cyber threats.",
    newJobPosts: 50,
    img: webDeveloper
  },

  {
    name: "Sales & Business ",
    description: "Drive revenue growth through client acquisition.",
    newJobPosts: 95,
    img: sales
  },
  {
    name: "Cloud Computing",
    description: "Manage cloud-based services and infrastructure.",
    newJobPosts: 65,
    img: webDeveloper
  },
  {
    name: "Artificial Intelligence",
    description: "Develop AI-powered solutions for automation and insights.",
    newJobPosts: 90,
    img: webDeveloper
  },
  {
    name: "Product Management",
    description: "Oversee the development and launch of products.",
    newJobPosts: 40,
    img: Finance,
  },
  {
    name: "Data Science",
    description: "Analyze and interpret complex data to aid decision-making.",
    newJobPosts: 85,
    img: webDeveloper
  },
  {
    name: "Marketing & Advertising",
    description: "Create campaigns to promote products and services.",
    newJobPosts: 75,
    img: digitalmarketing
  },
  {
    name: "Human Resources",
    description: "Manage recruitment, employee relations, and training.",
    newJobPosts: 55,
    img: humanresources
  },
  {
    name: "Finance & Accounting",
    description: "Handle financial planning, analysis, and reporting.",
    newJobPosts: 60,
    img: Finance,
  },
  {
    name: "UI/UX Design",
    description: "Design intuitive and visually appealing user interfaces.",
    newJobPosts: 45,
    img: uiux,
  },
  {
    name: "DevOps & IT ",
    description: "Ensure smooth software deployment and IT infrastructure.",
    newJobPosts: 70,
    img: webDeveloper
  },
  {
    name: "Healthcare",
    description: "Work in medical and pharmaceutical industries.",
    newJobPosts: 110,
    img: humanresources
  },
  {
    name: "Legal & Compliance",
    description: "Ensure legal and regulatory adherence in businesses.",
    newJobPosts: 30,
    img: humanresources
  },

];


export const footerLinks = [{
  title: "Product",
  link: ["Find job", "Find Company", "Find Employee"]
},

{
  title: "Company",
  link: ["About Us", "Contact Us", "Privacy Policy", "Terms & Conditions"]
}, {
  title: "Support",
  link: ["Help & Support ", "FeedBack", "FAQs"]
}]





