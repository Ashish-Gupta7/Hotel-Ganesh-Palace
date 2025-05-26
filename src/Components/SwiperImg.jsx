import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Mousewheel, Keyboard } from "swiper/modules";

const slideData = [
  {
    title: "Rest Better, Dream Better.",
    description:
      "Your stay matters — rest peacefully and let your dreams flourish in a space crafted for ultimate relaxation and quality sleep.",
    img: "Room-1",
  },
  {
    title: "Extraordinary Interiors With Comfort.",
    description:
      "Step into a world where luxury meets comfort. Our interiors are designed to amaze, offering an extraordinary experience filled with warmth and style.",
    img: "Room-2",
  },
  {
    title: "Experience Peaceful Night Stay.",
    description:
      "End your day with serenity. Embrace quiet nights in a cozy environment that offers unmatched comfort and peace of mind.",
    img: "Room-3",
  },
  {
    title: "Celebrate, Life's Grand Moments.",
    description:
      "Make memories that last a lifetime. Whether big or small, every moment here is a celebration of joy, peace, and elegance.",
    img: "Events",
  },
  {
    title: "Secure And Hassle-Free Parking.",
    description:
      "No more worries about your vehicle. Enjoy secure, easily accessible, and hassle-free parking designed to keep your convenience in mind.",
    img: "Parking",
  },
  {
    title: "Restaurant Coming Soon With Delights.",
    description:
      "A flavorful journey awaits. Our restaurant is coming soon to serve you delicious meals, unforgettable tastes, and heartwarming service.",
    img: "Restaurant",
  },
];

const SwiperImg = () => {
  return (
    <div className="h-[89vh] overflow-hidden min-[1025px]:hidden max-[576px]:h-[91vh]">
      <Swiper
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={2000}
        loop={true}
        modules={[Autoplay, Mousewheel, Keyboard]}
        className="w-full h-full"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`h-full relative bg-no-repeat bg-cover bg-center`}
            style={{ backgroundImage: `url(/Images/H6/${slide.img}.webp)` }}
          >
            <div className="h-full w-full absolute top-0 left-0 dark:bg-[#262221]/20 bg-[#e6dcd9]/10 pl-3 pt-3 flex flex-col justify-between">
              <div className="text-[120px] leading-[90px] w-96 font-[kajiro] text-[#e6dcd9] max-[850px]:w-80">
                {slide.title}
              </div>
              <div className="text-lg pb-10 pr-3 font-sm text-[#e6dcd9] max-[404px]:text-base max-[404px]:font-semibold">
                {slide.description}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperImg;
