"use client"
import { LuUserSquare } from "react-icons/lu";
import { MdSecurity } from "react-icons/md";
import { LiaInfoCircleSolid } from "react-icons/lia";
import { usePathname } from "next/navigation";
import Link from "next/link";
const SettingsSidebar = () => {
    const path = usePathname()
    console.log("Setting path", path)
    const settingsData = [
        {
            id:1,
            title:"Account",
            link:"/admin/settings",
            description:"Manage your Personal Information of your account ",
            icon:<LuUserSquare className="text-3xl text-gray-title"/>
        },
        {
            id:2,
            title:"Security",
            link:"/admin/settings/security",
            description:"Manage you password",
            icon:<MdSecurity className="text-3xl text-gray-title"/>
        },
        {
            id:3,
            title:"Contact data",
            link:"/admin/settings/contact-data",
            description:"Manage contact data of your web site such as phones, address and social media links",
            icon:<LiaInfoCircleSolid className="text-3xl text-gray-title"/>
        },
    ]

    const settingsLinks = settingsData.map(link=>(
        <Link href={link.link} key={link.id} className={`flex gap-2 items-center justify-center xl:justify-start xl:items-start p-4 xl:h-28 hover:cursor-pointer hover:bg-gray-200 transition duration-300 
        ${path === link.link?"bg-gray-300":""} `}>
            {/* icon */}
            <div className="w-10 h-10 xl:h-16 xl:w-16   flex items-center justify-center">
                {link.icon}
            </div>
            {/* data */}
            <div className="hidden xl:flex flex-col gap-2 ">
                <span className="text-lg inline-block text-dark-gray font-semibold">{link.title}</span>
                <span className="text-sm inline-block  text-gray-text leading-relaxed">{link.description}</span>
            </div>
        </Link>
    ))
  return (
    <div className=" flex xl:flex-col bg-white xl:basis-2/5 h-full xl:divide-y ">
       {settingsLinks}
    </div>
  )
}

export default SettingsSidebar
