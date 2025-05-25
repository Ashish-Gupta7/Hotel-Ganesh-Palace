import React from "react";

const About = ({ aboutRef }) => {
  return (
    <div ref={aboutRef} id="About" className="w-full px-16">
      <div className="w-full flex flex-col items-start justify-center">
        <h1 className="text-8xl">About Us</h1>
        <div className="w-full flex flex-col gap-10 py-6">
          <div className="owner w-full flex flex-col items-start justify-center gap-5">
            <h1 className="text-2xl">Founder & Owner</h1>
            <div className="flex items-center justify-center gap-10">
              <div className="flex items-center justify-center gap-5">
                {/* <div className="h-[24px] w-[24px]">
                <img src="/Images/Contact/Owner.png" alt="Owner" />
              </div> */}
                <h3 className="text-xl text-[#A87F59] font-semibold">
                  Deenanath Gupta
                </h3>
              </div>
              <div className="flex items-center justify-center gap-5">
                {/* <div className="h-[24px] w-[24px]">
                <img src="/Images/Contact/Owner.png" alt="Owner" />
              </div> */}
                <h3 className="text-xl text-[#A87F59] font-semibold">
                  Sahil Gupta
                </h3>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-start justify-center gap-5">
            <h1 className="text-2xl">Discover Our Brands</h1>
            <div className="flex flex-wrap items-center justify-center gap-28">
              <a
                href="https://www.justdial.com/Shahdol/S-S-Motors-Jaisinghnagar/9999P7652-7652-190815211228-N3T4_BZDET"
                className="hidden dark:block h-[60px] w-[60px] pb-32"
              >
                <img
                  src="/Images/Partners/DarkBG_SS_Motors.png"
                  alt="SS Motors"
                />
              </a>
              <a
                href="https://www.justdial.com/Shahdol/S-S-Motors-Jaisinghnagar/9999P7652-7652-190815211228-N3T4_BZDET"
                className="block dark:hidden h-[60px] w-[60px] pb-32"
              >
                <img
                  src="/Images/Partners/LightBG_SS_Motors.png"
                  alt="SS Motors"
                />
              </a>
              <a
                href="https://www.justdial.com/Shahdol/New-Ssmotors-Near-Near-Ganesh-Palace-Jaisinghnagar/9999P7652-7652-240210124605-V1N7_BZDET"
                className="h-[114px] w-[114px]"
              >
                <img
                  src="/Images/Partners/New_SS_Motors.png"
                  alt="New SS Motors"
                />
              </a>

              <a
                href="https://www.justdial.com/Shahdol/S-S-Motors-Jaisinghnagar/9999P7652-7652-190815211228-N3T4_BZDET"
                className="block dark:hidden h-[114px] w-[114px]"
              >
                <img
                  src="/Images/Partners/LightBG_Gupta_Motors.png"
                  alt="Gupta Motors"
                />
              </a>
              <a
                href="https://www.justdial.com/Shahdol/S-S-Motors-Jaisinghnagar/9999P7652-7652-190815211228-N3T4_BZDET"
                className="hidden dark:block h-[114px] w-[114px]"
              >
                <img
                  src="/Images/Partners/DarkBG_Gupta_Motors.png"
                  alt="Gupta Motors"
                />
              </a>
              <a href="" className="hidden dark:block h-[114px] w-[114px]">
                <img
                  src="/Images/Partners/DarkBG_Shrasti_Online.png"
                  alt="Shrasti Online"
                />
              </a>
              <a href="" className="block dark:hidden h-[114px] w-[114px]">
                <img
                  src="/Images/Partners/LightBG_Shrasti_Online.png"
                  alt="Shrasti Online"
                />
              </a>
            </div>
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="contact flex flex-col items-start gap-6">
              <h1 className="text-2xl">Contact for Bookings</h1>
              <div className="flex items-center justify-center gap-8">
                <div className="flex items-center justify-center gap-3">
                  <div className="h-[24px] w-[24px]">
                    <img src="/Images/Contact/Call.png" alt="Call" />
                  </div>
                  <h3 className="font-mono text-sm">+91 7748883352</h3>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="h-[24px] w-[24px]">
                    <img src="/Images/Contact/Email.png" alt="Email" />
                  </div>
                  <h3>guptamotorsjsn@gmail.com</h3>
                </div>
              </div>
            </div>
            <div className="contact flex flex-col items-end gap-4">
              <h1 className="text-xl pr-1">Connect with us</h1>
              <div className="flex items-center justify-center gap-5">
                <a
                  href="https://www.google.com/maps/place/Hotel+Ganesh+Palace/@23.6856537,81.3955685,16.78z/data=!4m9!3m8!1s0x39868f499bee420f:0x9efb44d25d6d5b13!5m2!4m1!1i2!8m2!3d23.685638!4d81.3985422!16s%2Fg%2F11rdb26p7k?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                  target="_blank"
                  className="h-[24px] w-[24px]"
                >
                  <img src="/Images/Contact/Location.png" alt="Location" />
                </a>
                <a
                  href="https://www.instagram.com/hotel_ganesh_palace/?hl=en"
                  target="_blank"
                  className="h-[24px] w-[24px]"
                >
                  <img src="/Images/Contact/Instagram.png" alt="Instagram" />
                </a>
                <a
                  href="https://wa.me/917748883352"
                  target="_blank"
                  className="h-[24px] w-[24px] hidden dark:block"
                >
                  <img
                    src="/Images/Contact/DarkBG_Whatsapp.png"
                    alt="Whatsapp"
                  />
                </a>
                <a
                  href="https://wa.me/917748883352"
                  target="_blank"
                  className="h-[24px] w-[24px] block dark:hidden"
                >
                  <img
                    src="/Images/Contact/LightBG_Whatsapp.png"
                    alt="Whatsapp"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end justify-center gap-5">
            <div className="flex items-center justify-center gap-5">
              <h3>Privacy & Policy</h3>
              <h3>Terms of Service</h3>
            </div>
            <h3 className="w-full text-center">
              © {new Date().getFullYear()} The Indian Hotels Company Limited.
              All Rights Reserved.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
