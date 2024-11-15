import Image from "next/image";
import { linkItems } from "../navbar/links";
import Link from "next/link";
const Footer = () => {
  const links = linkItems.map((link) => (
    <Link key={link.id} className=" hover:underline " href={link.href}>
      {link.title}
    </Link>
  ));
  return (
    <>
      <section className="bg-black text-lg  px-4 lg:px-0 py-8 h-auto lg:h-[200px]">
        {/* footer data */}
        <div className="container hidden lg:flex   items-start gap-16  my-4  text-white ">
          <Image
            src={"/assets/imgs/logo-footer.png"}
            width={244}
            height={63}
            alt="Logo"
          />
          {/* links */}
          <div className="flex items-center gap-8">{links}</div>
        </div>
        {/* copy rights */}
        <hr className="bg-gray-300 h-0" />
        <span className="text-white text-center inline-block w-full mt-4">
          &copy; All rights reserved 2024
        </span>
      </section>
    </>
  );
};

export default Footer;
