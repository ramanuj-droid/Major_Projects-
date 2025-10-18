import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-[#2C2C2C] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#F5F5F5] mb-2">Page Not Found</h2>
        <p className="text-[#ccc] mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all duration-200"
        >
          <FaArrowLeft /> Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
