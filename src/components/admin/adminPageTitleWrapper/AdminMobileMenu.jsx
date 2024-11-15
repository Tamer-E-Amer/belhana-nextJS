import { adminSidebarLinks } from "@/data/adminMenuLinks";
import Link from "next/link";
const AdminMobileMenu = ({ onClickHandeler }) => {
  const links = adminSidebarLinks.map((link) => (
    <Link
      href={link.link}
      key={link.id}
      className="w-full py-6 h-[47px]  lg:rounded-tl-2xl lg:rounded-bl-2xl flex gap-2 items-center  justify-start group hover:cursor-pointer hover:bg-gray-400 pl-4 text-white"
      onClick={onClickHandeler}
    >
      <div className="text-gray-200 text-3xl">{link.icon}</div>
      <div className="text-lg">{link.title}</div>
    </Link>
  ));
  return (
    <>
      <div className="md:hidden absolute top-14 z-50 w-full rounded-t-md h-auto bg-gray-500  py-4 ">
        {links}
      </div>
      {/* triangle */}
      <div className="absolute md:hidden w-0 h-0 border-r-transparent border-l-transparent border-r-[10px] border-l-[10px] border-b-[10px] border-b-gray-500 bottom-1 left-2"></div>
    </>
  );
};

export default AdminMobileMenu;
