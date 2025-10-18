
import { IoSearch } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineShowChart } from "react-icons/md";
import { LuCircleDashed } from "react-icons/lu";
import Amazon from '../Icons/Amazon.png';
import Adobe from '../Icons/Adobe.png';
import Google from '../Icons/Google.png';
import Microsoft from '../Icons/Microsoft.png';
import Netflix from '../Icons/Netflix.png';
import Spotify from '../Icons/Spotify.png';
import Meta from '../Icons/Meta.png';
import pngwing from '../Companies/pngwing.png';
import Apple from '../Icons/Apple.png';


const dropdownData = [
    { title: "Job Title", icon: <IoSearch color='#FF4B4B' size={25} /> , options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] },
    { title: "Location", icon: <CiLocationOn color='#FF4B4B' size={25} /> , options: ['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'] },
    { title: "Experience", icon:<MdOutlineShowChart color='#FF4B4B' size={25}/>  , options: ['Entry Level', 'Intermediate', 'Expert'] },
    { title: "Job Type", icon: <LuCircleDashed color='#FF4B4B' size={25}/> , options: ['Full Time', 'Part Time', 'Contract', 'Freelance', 'Internship'] }
];

const jobList = [
  {
    id: 1,
    jobTitle: "Product Designer",
    img: Meta,
    company: "Meta",
    applicants: 25,
    experience: "Entry Level",
    jobType: "Full-Time",
    location: "New York",
    package: "32 LPA",
    postedDaysAgo: 12,
    description: "Meta is seeking a Product Designer to join our team. You'll be working on designing user-centric interfaces for our blockchain wallet platform. This is an excellent opportunity for entry-level designers to grow their skills in a dynamic environment.",
    skills: ["Figma", "Sketch", "Wireframing", "User Research"],
    responsibilities: [
      "Collaborate with product managers and engineers to define and implement innovative solutions",
      "Design wireframes, prototypes, and high-fidelity visuals",
      "Participate in user research and usability testing"
    ],
    qualifications: [
      "Bachelor’s degree in Design or related field",
      "Strong portfolio of design projects",
      "Excellent visual design skills"
    ],
    skillSets: ["UI/UX Design", "Prototyping", "Design Systems"],
    about: "At Meta, we empower people to build community and bring the world closer together. You'll work with cutting-edge technologies and innovative teams."
  },
  {
    id: 2,
    jobTitle: "Sr. UX Designer",
    img: Netflix,
    company: "Netflix",
    applicants: 14,
    experience: "Expert",
    jobType: "Part-Time",
    location: "San Francisco",
    package: "40 LPA",
    postedDaysAgo: 5,
    description: "Netflix is looking for a Sr. UX Designer to enhance our user experience on streaming platforms. Ideal candidates will have extensive experience in user research and interaction design, helping us to deliver engaging content to our global audience.",
    skills: ["User Research", "Interaction Design", "Prototyping", "Usability Testing"],
    responsibilities: [
      "Drive UX strategy and execution for key product areas",
      "Conduct user interviews and analyze feedback",
      "Mentor junior designers"
    ],
    qualifications: [
      "8+ years of experience in UX Design",
      "Strong leadership and communication skills",
      "Proven track record in designing complex systems"
    ],
    skillSets: ["Advanced UX Tools", "Storyboarding", "Design Thinking"],
    about: "Netflix is the world’s leading entertainment service with over 200 million members. Join us to shape the future of digital entertainment."
  },
  {
    id: 3,
    jobTitle: "Product Designer",
    img: Microsoft,
    company: "Microsoft",
    applicants: 58,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Remote",
    package: "35 LPA",
    postedDaysAgo: 4,
    description: "Join Microsoft as a Product Designer and contribute to our new Lightspeed LA studio. We're looking for designers who can create intuitive and compelling gaming experiences. This is a remote position, offering flexibility and the opportunity to work with a leading technology company.",
    skills: ["Game Design", "UI Design", "User Flow", "Adobe XD"],
    responsibilities: [
      "Design immersive experiences for next-gen games",
      "Collaborate with artists and engineers",
      "Iterate designs based on player feedback"
    ],
    qualifications: [
      "3+ years in game or product design",
      "Strong visual storytelling skills",
      "Familiarity with Unity or Unreal Engine is a plus"
    ],
    skillSets: ["UX for Games", "Wireframing", "Rapid Prototyping"],
    about: "Microsoft’s Lightspeed LA studio is dedicated to pushing the boundaries of gaming. Join us and be part of something new and exciting."
  },
  {
    id: 4,
    jobTitle: "Product Designer",
    img: Adobe,
    company: "Adobe",
    applicants: 23,
    experience: "Expert",
    jobType: "Part-Time",
    location: "Toronto",
    package: "33 LPA",
    postedDaysAgo: 22,
    description: "Adobe is seeking a part-time Product Designer to help us enhance our user experience. You will work closely with our team to design features that make our platform more engaging and user-friendly. This role is perfect for experienced designers looking for flexible work hours.",
    skills: ["Illustrator", "Photoshop", "Experience Design", "Creative Suite"],
    responsibilities: [
      "Design and iterate on new features for Adobe products",
      "Collaborate with engineering and product teams",
      "Conduct design reviews and feedback sessions"
    ],
    qualifications: [
      "7+ years of product design experience",
      "Experience working on SaaS platforms",
      "Strong communication and presentation skills"
    ],
    skillSets: ["Visual Design", "Motion Graphics", "UX Strategy"],
    about: "Adobe is a creative software giant that empowers designers and developers. Be a part of shaping the tools the world uses."
  },
  {
    id: 5,
    jobTitle: "Backend Developer",
    img: Google,
    company: "Google",
    applicants: 21,
    experience: "Entry Level",
    jobType: "Full-Time",
    location: "Bangalore",
    package: "38 LPA",
    postedDaysAgo: 8,
    description: "Google is hiring a Backend Developer to join our team in Bangalore. You'll be responsible for developing scalable backend systems that power our services. This role requires strong problem-solving skills and experience with modern backend technologies.",
    skills: ["Java", "Node.js", "REST APIs", "Databases"],
    responsibilities: [
      "Design and implement scalable backend systems",
      "Work closely with frontend developers and product teams",
      "Write clean, testable, and efficient code"
    ],
    qualifications: [
      "B.Tech in Computer Science or equivalent",
      "Strong understanding of data structures and algorithms",
      "Familiar with cloud platforms like GCP or AWS"
    ],
    skillSets: ["Microservices", "CI/CD", "System Design"],
    about: "At Google, innovation is key. Join our backend team to help build reliable infrastructure for the products used by billions."
  },
  {
    id: 6,
    jobTitle: "SMM Manager",
    img: Spotify,
    company: "Spotify",
    applicants: 73,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Delhi",
    package: "34 LPA",
    postedDaysAgo: 8,
    description: "Spotify is looking for an SMM Manager to lead our social media marketing efforts in Delhi. You will create and manage campaigns to promote our music streaming service, engage with our audience, and drive growth. This role is ideal for creative marketers with a passion for music.",
    skills: ["Social Media Strategy", "Content Creation", "Analytics", "Branding"],
    responsibilities: [
      "Develop and implement social media campaigns",
      "Engage with users and grow community",
      "Analyze performance metrics and optimize campaigns"
    ],
    qualifications: [
      "3-5 years in social media marketing",
      "Experience with social tools (e.g., Hootsuite, Buffer)",
      "Strong creative and copywriting skills"
    ],
    skillSets: ["Digital Marketing", "Campaign Management", "SEO/SEM"],
    about: "Spotify is a global music platform loved by millions. As an SMM Manager, your creativity will drive our online presence."
  },
  {
    id: 7,
    jobTitle: "Frontend Developer",
    img: Amazon,
    company: "Amazon",
    applicants: 50,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Seattle",
    package: "36 LPA",
    postedDaysAgo: 10,
    description: "Amazon is looking for a Frontend Developer to build and maintain our customer-facing applications. You will work with a dynamic team to create seamless and responsive web applications.",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    responsibilities: [
      "Develop user-facing features using modern frameworks",
      "Ensure cross-browser compatibility and responsiveness",
      "Collaborate with backend and UX teams"
    ],
    qualifications: [
      "Bachelor’s degree in Computer Science or related field",
      "Strong understanding of frontend technologies",
      "Experience with version control systems (e.g., Git)"
    ],
    skillSets: ["Responsive Design", "Performance Optimization", "SPA"],
    about: "Amazon’s frontend engineers build high-traffic web applications used by millions. Join us and make an impact."
  },
  {
    id: 8,
    jobTitle: "iOS Developer",
    img: Apple,
    company: "Apple",
    applicants: 30,
    experience: "Expert",
    jobType: "Full-Time",
    location: "Cupertino",
    package: "42 LPA",
    postedDaysAgo: 7,
    description: "Apple is seeking an iOS Developer to join our team in Cupertino. You will work on developing cutting-edge applications for iOS devices, ensuring high performance and an exceptional user experience.",
    skills: ["Swift", "Xcode", "UIKit", "CoreData"],
    responsibilities: [
      "Develop and maintain iOS applications",
      "Collaborate with cross-functional teams to define app features",
      "Ensure code quality and performance optimization"
    ],
    qualifications: [
      "5+ years in iOS development",
      "Strong understanding of Apple’s design principles",
      "Experience publishing apps to the App Store"
    ],
    skillSets: ["Mobile App Development", "UI/UX for Mobile", "Objective-C"],
    about: "Apple is known for innovation and quality. Join our iOS team to build apps used by millions around the world."
  }
];


  export {dropdownData,jobList};