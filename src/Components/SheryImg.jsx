import React, { useEffect, useRef } from "react";
import "../Stylesheets/SheryImg.css";

const SheryImg = () => {
  const mainBackRef = useRef(null);
  const textEffectRefs = useRef([]);

  useEffect(() => {
    Shery.imageEffect("#mainBack", {
      style: 2,
      config: {
        a: { value: 1.49, range: [0, 30] },
        b: { value: -0.98, range: [-1, 1] },
        aspect: { value: 1.88 },
        gooey: { value: true },
        infiniteGooey: { value: true },
        durationOut: { value: 1.4, range: [0.1, 5] },
        durationIn: { value: 1, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: true },
        maskVal: { value: 1, range: [1, 5] },
        scrollType: { value: -1 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: false },
        onMouse: { value: 1 },
        noise_speed: { value: 0.7, range: [0, 10] },
        metaball: { value: 0, range: [0, 2] },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0, range: [0, 0.1] },
        noise_height: { value: 0.5, range: [0, 2] },
        noise_scale: { value: 12, range: [0, 100] },
      },
      gooey: true,
    });

    let index = 0;
    let flag = false;

    const handleClick = () => {
      if (!flag && textEffectRefs.current.length > 0) {
        flag = true;
        const h1s = textEffectRefs.current.map((div) =>
          Array.from(div.querySelectorAll("h1"))
        );

        h1s.forEach((group) => {
          const current = group[index];
          const nextIndex = (index + 1) % group.length;
          const next = group[nextIndex];

          gsap.to(current, {
            top: "-100%",
            ease: "expo.inOut",
            duration: 1,
            onComplete: () => {
              gsap.set(current, { top: "100%" });
              flag = false;
            },
          });

          gsap.to(next, {
            top: "0%",
            ease: "expo.inOut",
            duration: 1,
          });
        });

        index = (index + 1) % h1s[0].length;
      }
    };

    const mainBack = mainBackRef.current;
    if (mainBack) {
      mainBack.addEventListener("click", handleClick);
    }

    return () => {
      if (mainBack) {
        mainBack.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div
      id="main"
      className="h-[89vh] w-full relative z-0 overflow-hidden text-[#e6dcd9] max-[1024px]:hidden"
    >
      <div id="mainBack" className="relative w-full h-full" ref={mainBackRef}>
        {["Room-1", "Room-2", "Room-3", "Events", "Parking", "Restaurant"].map(
          (img, idx) => (
            <img
              key={idx}
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={`/Images/H6/${img}.webp`}
              alt={`Background ${idx + 1}`}
            />
          )
        )}
      </div>

      <div
        id="mainFront"
        className="h-full relative -top-[104vh] left-0 pointer-events-none"
      >
        <div
          id="mainFront-inner"
          className="h-full w-full px-24 absolute top-2/3 left-0 z-50 flex items-center justify-between translate-x-0 -translate-y-[50%]"
        >
          <div
            id="left"
            className="h-full flex items-center justify-center flex-col gap-20"
          >
            <div id="lefttext">
              {[
                [
                  "Rest Better,",
                  "Extraordinary",
                  "Experience",
                  "Celebrate",
                  "Secure And",
                  "Restaurant",
                ],
                [
                  "Dream",
                  "Interiors With",
                  "Peaceful Night",
                  "Life's Grand",
                  "Hassle-Free",
                  "Coming Soon",
                ],
                [
                  "Better.<div></div>",
                  "Comfort.<div></div>",
                  "Stay.<div></div>",
                  "Moments.<div></div>",
                  "Parking.<div></div>",
                  "With Delights.<div></div>",
                ],
              ].map((group, groupIndex) => (
                <div
                  className="textEffect relative h-[15vh] overflow-hidden w-[40vw]"
                  key={groupIndex}
                  ref={(el) => (textEffectRefs.current[groupIndex] = el)}
                >
                  {group.map((text, idx) => (
                    <h1
                      key={idx}
                      className="absolute top-full left-0 font-[kajiro] text-[124px] leading-[0.85] max-[1200px]:text-[120px]"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div
            id="right"
            className="h-full w-60 flex flex-col items-center justify-center text-right"
          >
            <div
              id="right-up"
              className="text-lg flex flex-col items-end gap-3 text-[0.83vw] max-[1200px]:text-[1vw]"
            >
              <h4>
                Your stay matters — rest peacefully and let your dreams flourish
                in a space crafted for ultimate relaxation and quality sleep.
              </h4>
              <h4>
                Step into a world where luxury meets comfort. Our interiors are
                designed to amaze, offering an extraordinary experience filled
                with warmth and style.
              </h4>
              <h4>
                End your day with serenity. Embrace quiet nights in a cozy
                environment that offers unmatched comfort and peace of mind.
              </h4>
              <h4>
                Make memories that last a lifetime. Whether big or small, every
                moment here is a celebration of joy, peace, and elegance.
              </h4>
              <h4>
                No more worries about your vehicle. Enjoy secure, easily
                accessible, and hassle-free parking designed to keep your
                convenience in mind.
              </h4>
              <h4>
                A flavorful journey awaits. Our restaurant is coming soon to
                serve you delicious meals, unforgettable tastes, and
                heartwarming service.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SheryImg;
