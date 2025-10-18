import Marquee from 'react-fast-marquee';
import Amazon from '../../assets/Companies/Amazon.png';
import Figma from '../../assets/Companies/Figma.png';
import Google from '../../assets/Companies/Google.png';
import Meta from '../../assets/Companies/Meta.png';
import Microsoft from '../../assets/Companies/Microsoft.png';
import Netflix from '../../assets/Companies/Netflix.png';
import Oracle from '../../assets/Companies/Oracle.png';
import Pinterest from '../../assets/Companies/Pinterest.png';
import Slack from '../../assets/Companies/Slack.png';
import Spotify from '../../assets/Companies/Spotify.png';
import Walmart from '../../assets/Companies/Walmart.png';

const companyLogos = { Amazon, Figma, Google, Meta, Microsoft, Netflix, Oracle, Pinterest, Slack, Spotify, Walmart };

const Company = () => {
  return (
    <div className="mt-16 pb-5 flex flex-col items-center w-full overflow-hidden">
      {/* Title */}
      <div className="text-3xl md:text-4xl text-center font-semibold text-[#dcdcdc] mb-6">
        Trusted By <span className="text-[#FF4B4B]">1000+</span> companies
      </div>

      {/* Marquee Slider */}
      <div className="w-full max-w-[90%] overflow-hidden">
        <Marquee className='overflow-hidden' pauseOnHover={true} speed={50} gradient={false}>
          {Object.entries(companyLogos).map(([name, logo]) => (
            <div
              key={name}
              className="mx-4 px-4 py-2 bg-[#292929] hover:bg-[#3d3d3d] rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105 scroll-none"
            >
              <img className="h-12 md:h-14 w-auto" src={logo} alt={name} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Company;
