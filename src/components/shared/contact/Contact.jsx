import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { ContactForm } from "@/components";
const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-radial-gradient from-left-contact-blue via-mid-contact-blue to-black  px-4 lg:px-2 py-8  "
    >
      <div className="container flex flex-col  items-center justify-center xl:flex-row xl:justify-between xl:items-start   gap-4  my-4 px-4  ">
        {/* text and contact data */}
        <div className="w-full flex-1 flex flex-col items-center justify-center lg:items-start text-lg">
          <h3 className="text-white ">Contact me</h3>
          <p className="text-white  text-center lg:text-left  leading-relaxed my-6">
            I love hearing from my wonderful followers! Whether you have a
            question about a recipe, a suggestion for the page, or just want to
            share your cooking experiences, please do not hesitate to reach out.
            Your feedback and stories mean the world to me and help inspire new
            and exciting content for the Balhena Wa El Sheftchi community. Fill
            out the form below or use the provided contact details to get in
            touch. I look forward to connecting with you!
          </p>
          {/* orange contact card */}
          <div className="w-full  h-[560px] py-8 pl-4 bg-primary-orange relative text-lg">
            <h3 className="text-white ">Contact information</h3>
            <p className="text-dark-blue  w-full my-4">
              I am pleased to receive your comment and questions.
            </p>
            <div className="text-white flex items-center justify-start gap-2 my-6 w-full">
              <FaPhone className="text-2xl" />
              <span>+201011111111</span>
            </div>
            <div className="text-white flex items-center justify-start gap-2 my-6 w-full">
              <FaTelegramPlane className="text-2xl" />
              <span>+201011111111</span>
            </div>
            <div className="text-white flex items-center justify-start gap-2 my-6 w-full">
              <FaFacebook className="text-2xl" />
              <span>Belhana-we-elshiftishy</span>
            </div>
            <div className="text-white flex items-center  gap-2 my-6 w-full ">
              <MdEmail className="text-2xl" />
              <span className="inline-block ">
                contact@belhana-sameh-sedky.com
              </span>
            </div>
            {/* white decore */}
            <div className="absolute bottom-0 right-0">
              {/*  */}
              <Image
                src="/assets/imgs/optimized/contact_card_decore.webp"
                width={436}
                height={237}
                alt="Contact card decore"
              />
            </div>
          </div>
        </div>
        {/* contact form */}
        <div className="flex-1 w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
