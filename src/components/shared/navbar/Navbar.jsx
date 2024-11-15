"use client";
import { useState } from "react";
import Image from "next/image";
import { AuthButtons, Links, MobileMenu } from "@/components";
import { CgMenuHotdog } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
const Navbar = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <>
      {/* navbar */}
      <nav className="bg-gradient-to-l from-black from-70% to-dark-blue text-white text-lg border-b border-gray-400  ">
        {/* small orange wide bar */}
        <div className="w-full py-[4px] bg-primary-orange"></div>
        <div className="container flex items-center justify-between gap-4 px-4  relative">
          {/*  large logo */}
          <Link href={"/belhana"} className="hidden  xl:block">
            {" "}
            <Image
              src={"/assets/imgs/logo.png"}
              alt="logo"
              width={285}
              height={80}
            />
          </Link>
          {/* small logo */}
          <Link href={"/belhana"} className="my-2  xl:hidden">
            <Image
              width={48.44}
              height={37.28}
              src={"/assets/imgs/logo-mobile.png"}
              alt="logo"
            />
          </Link>
          {/* nav links */}
          <Links />
          {/* auth-buttons */}
          <AuthButtons />
          <div className="flex items-center gap-4 xl:hidden">
            <Link href="/belhana/login"><FaUser className="text-xl cursor-pointer hover:text-primary-orange transition-none duration-300 " /></Link>
            <CgMenuHotdog
              className="text-3xl lg:hidden  cursor-pointer hover:text-primary-orange transition-none duration-300"
              onClick={() => {
                setIsMenuShown((prev) => !prev);
              }}
            />
          </div>
          {isMenuShown && <MobileMenu menuState={isMenuShown} onClickHandler={()=>{setIsMenuShown(false)}} />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
