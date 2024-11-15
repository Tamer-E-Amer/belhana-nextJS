import Link from "next/link";

import { settingsAndLogoutLinks } from "@/data/adminMenuLinks";
const ProfileMenu = ({ onClickHandeler }) => {
  const profileLinks = settingsAndLogoutLinks.map((link) => (
    <Link
      href={link.link}
      key={link.id}
      className="w-full py-6 h-[47px]  flex gap-2 items-center  justify-end group hover:cursor-pointer hover:bg-gray-400 pr-4 text-white "
      onClick={onClickHandeler}
    >
      <div className="text-lg">{link.title}</div>
      <div className="text-gray-200 text-3xl">{link.icon}</div>
    </Link>
  ));
  return (
    <div className="absolute top-14 right-2 z-50 w-full md:w-[340px] rounded-t-md md:rounded-tl-none h-auto bg-gray-500  py-4 ">
      {profileLinks}
      {/* triangle */}
      <div className="absolute w-0 h-0 border-r-transparent border-l-transparent border-r-[10px] border-l-[10px] border-b-[10px] border-b-gray-500 top-[-8px] right-2"></div>
    </div>
  );
};

export default ProfileMenu;
