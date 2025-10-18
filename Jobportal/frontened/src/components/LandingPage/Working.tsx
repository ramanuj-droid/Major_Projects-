import { work } from '../../Data/data.ts';
import girl from '../../assets/Working/Girl.png';

const Working = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 px-6 py-12 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="text-center text-gray-300">
        <h3 className="text-4xl font-semibold">
          How it <span className="text-[#FF4B4B]">Works</span>
        </h3>
        <p className="mt-2 text-lg md:text-xl">
          Effortlessly navigate through the process and land in your dream job.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img className="w-[80%] md:w-96 lg:w-[400px]" src={girl} alt="Working Girl" />
        </div>

        {/* Right Side - Steps */}
        <div className="flex flex-col gap-8 w-full max-w-md">
          {work.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 p-4 bg-gray-800/50 rounded-xl shadow-md hover:bg-gray-800 transition-all"
            >
              <img className="h-16 w-16 rounded-full p-2 bg-gray-700" src={item.img} alt={item.name} />
              <div className="flex flex-col">
                <h3 className="text-[#FF4B4B] text-lg font-medium">{item.name}</h3>
                <p className="text-gray-400 text-sm md:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Working;
