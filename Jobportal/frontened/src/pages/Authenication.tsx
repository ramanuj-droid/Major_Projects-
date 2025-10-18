import { useState } from "react";
import { PiWebhooksLogoBold } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import Login from "../components/Authenication/Login";
import SignUp from "../components/Authenication/SignUp";

function Authentication() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col gap-2 items-center justify-center bg-[#292929] px-4">
      <div className="md:hidden flex gap-2"> <PiWebhooksLogoBold color="#FF4B4B" size="40" />
      <h2 className="text-4xl font-semibold text-[#FF4B4B]">JobHook</h2></div>
      <div className="w-full md:min-h-[90vh] max-w-6xl bg-black rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
       
        {/* Left section */}
        <div className="hidden md:flex flex-col justify-center items-center bg-[#0d0d0d] text-white w-1/2 p-10 rounded-r-full">
          <div className="flex items-center gap-3 mb-4">
            <PiWebhooksLogoBold color="#FF4B4B" size="40" />
            <h2 className="text-4xl font-semibold text-[#FF4B4B]">JobHook</h2>
          </div>
          <p className="text-center text-gray-400 px-4">
            Find the job of your dreams and get hired by top companies.
          </p>
        </div>

        {/* Right section with sliding animation */}
        <div className="w-full md:w-1/2 relative overflow-hidden px-4 py-8">
          <AnimatePresence mode="wait">
            {isLogin ? (
              <motion.div
                key="login"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.5 }}
                className=""
              >
                <Login toggleForm={() => setIsLogin(false)} />
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <SignUp toggleForm={() => setIsLogin(true)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
