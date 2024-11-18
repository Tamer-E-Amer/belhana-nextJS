"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { adminSidebarLinks,settingsAndLogoutLinks } from "@/data/adminMenuLinks";

const AdminSidebar = () => {
  const path = usePathname();
  const dashboardLinks = adminSidebarLinks.map((link) => (
    <Link
      href={`${link.link}`}
      key={link.id}
      className={`w-full py-6 h-[47px]  lg:rounded-tl-2xl lg:rounded-bl-2xl flex gap-2 items-center justify-center lg:justify-start group hover:cursor-pointer hover:bg-admin-bg pl-0 lg:pl-4 ${
        path === link.link ? "bg-admin-bg" : ""
      } `}
    >
      <div className="text-3xl text-gray-title">{link.icon}</div>
      <div className="text-lg text-dark-gray hidden lg:block">{link.title}</div>
    </Link>
  ));

  const settingsAndLogout = settingsAndLogoutLinks.map((link) => (
    <Link
      href={`${link.link}`}
      key={link.id}
      className={`w-full py-6 h-[47px] lg:rounded-tl-2xl lg:rounded-bl-2xl   flex gap-2 items-center justify-center lg:justify-start group hover:cursor-pointer hover:bg-admin-bg pl-0  lg:pl-4 ${
        link.id === 12
          ? "py-8 border-t lg:rounded-tl-none lg:rounded-bl-none border-t-gray-300"
          : ""
      } $ ${link.link !="/admin/log-out" &&  path.startsWith('/admin/settings')   ? "bg-admin-bg" : ""}`}
    >
      <div className="text-3xl text-gray-title">{link.icon}</div>
      <div className="text-lg text-dark-gray hidden lg:block">{link.title}</div>
    </Link>
  ));
  return (
    <div className="hidden md:flex flex-col w-auto lg:w-[230px] h-screen min-h-[550px] pt-4   ">
      {/* logo */}
      <div className="lg:px-4">
        <Image
          src={"/assets/imgs/logo-dashboard.png"}
          alt="logo"
          height={65}
          width={231}
          className="hidden lg:block"
        />
      </div>
      {/* logo mobile */}
      <div className="flex items-center justify center w-full px-4">
        <Image
          src={"/assets/imgs/logo-mobile.png"}
          alt="logo"
          height={37.28}
          width={48.44}
          className="lg:hidden"
        />
      </div>
      {/* links */}
      <div className=" space-y-4 pt-12">{dashboardLinks}</div>
      {/* Settings and logout */}
      <div className="space-y-4 mt-auto ">{settingsAndLogout}</div>
    </div>
  );
};

export default AdminSidebar;
