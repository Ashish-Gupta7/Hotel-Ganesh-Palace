import React from "react";

const Ratings = () => {
  const data = [
    {
      name: "Ashish Gupta",
      rating: "⭐⭐⭐⭐⭐",
      review:
        "You can stay here anytime. This hotel is good for all types of occasions like marriage, birthday, or engagement. Rooms are clean and service is good. Best place for family and functions.",
      image: "/Images/Rating/Ashish.png",
    },
    {
      name: "Manish Shrivastava",
      rating: "⭐⭐⭐⭐⭐",
      review:
        "Very nice place all over Jaisinghnagar you can stay here you can take hotel for any kind of Occasion like marriage birthday engagement.",
      image: "/Images/Rating/Manish.png",
    },
  ];
  return (
    <div className="w-full flex items-center justify-center flex-col gap-24">
      <div className="flex flex-col items-center justify-center text-center pt-16">
        <h1 className="text-8xl font-semibold tracking max-[1025px]:text-6xl">
          Exclusive Ratings
        </h1>
        <h3 className="text-xl pt-4 tracking-wider">
          Enjoy in hotel rooms and awesome ratings.
        </h3>
      </div>
      <div className="flex items-center justify-center gap-16 py-2 max-[1px]:gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="border-[1px] dark:border-[#e6dcd9]/40 border-[#262221]/40 rounded-md flex flex-col gap-4"
          >
            <div className="border-b dark:border-[#e6dcd9]/40 border-[#262221]/40">
              <div className="flex items-center justify-center gap-5 py-6 px-7">
                <div className="h-16 w-16 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <p className="w-[26vw] text-justify">{item.review}</p>
              </div>
            </div>
            <div className="px-7 pb-4 flex items-center justify-between gap-5">
              <div>{item.name}</div>
              <div>{item.rating}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="py-14 text-center text-xl flex items-center justify-center gap-2">
        <button className="text-xs font-semibold font-sans px-3 py-1 bg-[#262221] dark:bg-[#e6dcd9] text-[#e6dcd9] dark:text-[#262221] rounded-full border-2 border-[#e6dcd9] dark:border-[#262221] transition duration-300">
          AWESOME
        </button>
        <p className="font-semibold">
          Book top-rated hotels and get 20% off — comfort and quality, now at a
          better price!
        </p>
      </div>
    </div>
  );
};

export default Ratings;
