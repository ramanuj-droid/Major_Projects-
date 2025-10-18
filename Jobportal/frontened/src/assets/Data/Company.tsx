import Amazon from '../Icons/Amazon.png';
import Adobe from '../Icons/Adobe.png';
import Google from '../Icons/Google.png';
import Microsoft from '../Icons/Microsoft.png';
import Netflix from '../Icons/Netflix.png';
import Spotify from '../Icons/Spotify.png';
import Meta from '../Icons/Meta.png';
import pngwing from '../Companies/pngwing.png';
import Apple from '../Icons/Apple.png';

const companyData={
  Name: "Google",
  Overview: "Google is a global leader in technology, specializing in internet-related services and products. Our mission is to organize the world’s information and make it universally accessible and useful. Founded by Larry Page and Sergey Brin, Google has grown into one of the most influential companies in the world, providing innovative tools and services that help billions of people across the globe.",
  Industry: "Internet, Software & Technology Services",
  Website: "https://www.google.com",
  Size: "100,000+ Employees",
  Headquarters: "Mountain View, California, United States",
  Specialties: [
    "Search Engine",
    "Online Advertising",
    "Cloud Computing",
    "Software",
    "Hardware",
    "AI & Machine Learning",
    "Mobile Operating Systems",
    "Consumer Electronics"
  ]
}

export const companiesData = [
  {
    id: 1,
    Name: "Meta",
    img:Meta,
    Overview: "Meta is a social technology company helping people connect, find communities, and grow businesses. Formerly known as Facebook, Meta is building the metaverse — a place where people can interact in immersive digital environments.",
    Industry: "Social Media, Technology",
    Website: "https://www.meta.com",
    Size: "70,000+ Employees",
    Headquarters: "Menlo Park, California, United States",
    Specialties: [
      "Social Media",
      "Virtual Reality",
      "Augmented Reality",
      "Digital Advertising",
      "AI & Machine Learning",
      "Metaverse"
    ]
  },
  {
    id: 2,
    Name: "Netflix",
    img:Netflix,
    Overview: "Netflix is the world’s leading streaming entertainment service with over 200 million paid memberships. It offers TV series, documentaries, and feature films across a wide variety of genres and languages.",
    Industry: "Entertainment, Streaming Media",
    Website: "https://www.netflix.com",
    Size: "12,000+ Employees",
    Headquarters: "Los Gatos, California, United States",
    Specialties: [
      "Streaming",
      "Film & TV Production",
      "Content Distribution",
      "Machine Learning",
      "Original Programming",
      "Global Media"
    ]
  },
  {
    id: 3,
    Name: "Microsoft",
    img:Microsoft,
    Overview: "Microsoft is a global technology leader developing software, hardware, and cloud services. It empowers people and organizations to achieve more through innovative tools and technologies.",
    Industry: "Software, Hardware, Cloud Computing",
    Website: "https://www.microsoft.com",
    Size: "220,000+ Employees",
    Headquarters: "Redmond, Washington, United States",
    Specialties: [
      "Operating Systems",
      "Cloud Services",
      "Gaming",
      "Productivity Software",
      "AI & Machine Learning",
      "Developer Tools"
    ]
  },
  {
    id: 4,
    Name: "Adobe",
    img:Adobe,
    Overview: "Adobe is a leader in digital media and digital marketing solutions. The company helps customers create, deliver, and optimize content and applications across every screen.",
    Industry: "Creative Software, Digital Marketing",
    Website: "https://www.adobe.com",
    Size: "30,000+ Employees",
    Headquarters: "San Jose, California, United States",
    Specialties: [
      "Creative Software",
      "Digital Media",
      "UX/UI Design",
      "SaaS",
      "Marketing Automation",
      "Document Management"
    ]
  },
  {
    id: 5,
    Name: "Google",
    img:Google,
    Overview: "Google is a global leader in technology, specializing in internet-related services and products. Our mission is to organize the world’s information and make it universally accessible and useful. Founded by Larry Page and Sergey Brin, Google has grown into one of the most influential companies in the world, providing innovative tools and services that help billions of people across the globe.",
    Industry: "Internet, Software & Technology Services",
    Website: "https://www.google.com",
    Size: "100,000+ Employees",
    Headquarters: "Mountain View, California, United States",
    Specialties: [
      "Search Engine",
      "Online Advertising",
      "Cloud Computing",
      "Software",
      "Hardware",
      "AI & Machine Learning",
      "Mobile Operating Systems",
      "Consumer Electronics"
    ]
  },
  {
    id: 6,
    Name: "Spotify",
    img:Spotify,
    Overview: "Spotify is the world’s most popular audio streaming subscription service, giving users access to millions of songs, podcasts, and videos from creators all over the globe.",
    Industry: "Music Streaming, Technology",
    Website: "https://www.spotify.com",
    Size: "8,000+ Employees",
    Headquarters: "Stockholm, Sweden",
    Specialties: [
      "Music Streaming",
      "Podcasting",
      "Digital Media",
      "Machine Learning",
      "Personalized Recommendations",
      "Creator Tools"
    ]
  },
  {
    id: 7,
    Name: "Amazon",
    img:Amazon,
    Overview: "Amazon is a multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence. It is one of the Big Five companies in the U.S. tech industry.",
    Industry: "E-commerce, Cloud Computing, AI",
    Website: "https://www.amazon.com",
    Size: "1,500,000+ Employees",
    Headquarters: "Seattle, Washington, United States",
    Specialties: [
      "E-commerce",
      "AWS (Cloud Services)",
      "Logistics & Supply Chain",
      "Digital Streaming",
      "Consumer Electronics",
      "Artificial Intelligence"
    ]
  },
  {
    id: 8,
    Name: "Apple",
    img:Apple,
    Overview: "Apple is a technology company known for its innovation in personal electronics and software. From iPhones and Macs to iOS and macOS, Apple is a global icon in technology and design.",
    Industry: "Consumer Electronics, Software",
    Website: "https://www.apple.com",
    Size: "160,000+ Employees",
    Headquarters: "Cupertino, California, United States",
    Specialties: [
      "Consumer Electronics",
      "Mobile Devices",
      "Software Development",
      "App Ecosystem",
      "Hardware Design",
      "Retail & Services"
    ]
  }
];


const similar=[
{
  name: "Meta",
 employees: 58604
},
{
  name: "Netflix",
 employees: 12800
},
{
  name: "Microsoft",
 employees: 221000
},
{
  name: "Adobe",
 employees: 29439
},
{
  name: "Google",
 employees: 181798
},
{
  name: "Spotify",
 employees: 8200
},
{
  name: "Amazon",
 employees: 1561000
},
{
  name: "Apple",
 employees: 164000
}
]

export {companyData, similar};  