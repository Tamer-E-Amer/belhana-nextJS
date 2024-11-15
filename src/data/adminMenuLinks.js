import { GiRiceCooker } from "react-icons/gi";
import { GoSignOut } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { MdCategory, MdDashboard, MdMail } from "react-icons/md";

export const adminSidebarLinks = [
    {
      id: 1,
      title: "Dashboard",
      link: "/admin",
      icon: <MdDashboard  />,
    },
    {
      id: 2,
      title: "Messages",
      link: "/admin/messages",
      icon: <MdMail  />,
    },
    {
      id: 3,
      title: "Recipes",
      link: "/admin/recipes",
      icon: <GiRiceCooker  />,
    },
    {
      id: 4,
      title: "Categories",
      link: "/admin/categories",
      icon: <MdCategory  />,
    },
    // {
    //   id: 5,
    //   title: "Profile",
    //   link: "/admin/profile",
    //   icon: <FaUserTie className="text-3xl text-gray-title" />,
    // },
  ];
  
  export const settingsAndLogoutLinks = [
    {
      id: 11,
      title: "settings",
      link: "/admin/settings",
      icon: <IoMdSettings />,
    },
    {
      id: 12,
      title: "Log out",
      link: "/admin/log-out",
      icon: <GoSignOut  />,
    },
  ];