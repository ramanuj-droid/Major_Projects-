import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {  IoMdMenu, IoMdClose } from "react-icons/io";
import { PiWebhooksLogoBold } from "react-icons/pi";

import ProfileMenu from "./ProfileMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location=useLocation(); 

  return ( location.pathname !== "/auth" && 
    <nav className="w-full bg-[#3d3d3d] px-6 text-white h-20 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl font-bold text-[#FF4B4B]">
        <PiWebhooksLogoBold />
        <Link to="/">JobHooks</Link>
      </div>

      

      {/* Navigation Links */}
      <div className={`lg:flex gap-6 font-medium absolute lg:static top-20 left-0 w-full lg:w-auto transition-all duration-300 ease-in-out ${
        menuOpen ? "block py-4 px-6" : "hidden"
      } lg:flex`}>
        {["/", "/find-job", "/find-talent", "/post-job", "/posted-job"].map((path, index) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) =>
              `block px-4 py-2 lg:inline lg:px-0 ${
                isActive ? "text-[#FF4B4B] border-b-2 border-[#FF4B4B]" : "text-white"
              }`
            }
          >
            {path === "/" ? "Home" : path.replace("-", " ").replace("/", "").toUpperCase()}
          </NavLink>
        ))}
      </div>
  

        {/* Search Bar */}  
      {/* Profile & Icons */}
      <div className="flex items-center gap-2">
        {/* Profile */}
      <ProfileMenu></ProfileMenu>   
      {/* Mobile Menu Button */}
      <button className="lg:hidden text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <IoMdClose size={25} /> : <IoMdMenu size={25}/>}
      </button> 
      </div>
    </nav>
  );
};

export default Navbar;
