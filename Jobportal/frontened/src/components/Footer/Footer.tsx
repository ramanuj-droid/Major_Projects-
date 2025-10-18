import { useLocation } from "react-router-dom";
import { footerLinks } from "../../Data/data";
import { FaXTwitter ,FaFacebook,FaInstagram} from "react-icons/fa6";

const Footer = () => {
  const location=useLocation(); 
  return ( location.pathname !== "/auth" &&
    <footer className="bg-[#3d3d3d] text-gray-300 py-10 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="flex flex-col gap-4 max-w-md">
          <h2 className="text-2xl font-semibold text-white">JobHooks</h2>
          <p className="text-sm leading-relaxed">
            Job portal with user profiles, skill updates, certifications, work experience, and admin job postings.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <FaFacebook className="text-2xl hover:text-[#1877F2] transition-all cursor-pointer" />
            <FaXTwitter className="text-2xl hover:text-[#1DA1F2] transition-all cursor-pointer" />
            <FaInstagram className="text-2xl hover:text-[#E4405F] transition-all cursor-pointer" />
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {footerLinks.map((link, index) => (
            <div key={index} className="space-y-2 flex flex-col flex-wrap"> 
              <h3 className="text-white font-medium text-lg">{link.title}</h3>
              {link.link.map((item, subIndex) => (
                <p key={subIndex} className="text-sm hover:text-gray-400 cursor-pointer transition-all">
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} JobHooks. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
