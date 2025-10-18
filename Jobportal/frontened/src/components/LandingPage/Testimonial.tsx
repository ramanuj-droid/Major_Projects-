import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../../Data/data";

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center justify-center text-gray-300 py-12 px-6">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-3xl md:text-4xl font-semibold">
          What <span className="text-[#FF4B4B]">Users</span> Say About Us?
        </h3>
      </div>

      {/* Testimonials Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-6xl">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 p-6 bg-gray-800 rounded-xl shadow-lg border-l-4 border-[#FF4B4B] hover:shadow-2xl transition-all"
          >
            {/* User Info */}
            <div className="flex items-center gap-4">
              <Avatar src={item.img} alt={item.name} size="lg" />
              <div>
                <h2 className="text-[#FF4B4B] font-medium text-lg">{item.name}</h2>
                <Rating value={item.rating} fractions={2} readOnly />
              </div>
            </div>

            {/* Testimonial */}
            <p className="text-gray-400 text-sm md:text-base">
              {item.testimonial.length > 80 ? item.testimonial.substring(0, 80) + "..." : item.testimonial}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
