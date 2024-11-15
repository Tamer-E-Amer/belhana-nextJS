"use client";
import { useState } from "react";
import {
  AdminMobileMenu,
  AdminPageTitle,
  ProfileMenu,
  ProfileNotificationSearch,
} from "@/components";
import { IoIosMenu } from "react-icons/io";

const AdminPageTitleWrapper = () => {
  const [isMobilemenuShown, setIsMobilemenuShown] = useState(false);
  const [isProfileMenuShown, setIsProfieMenuShown] = useState(false);

  const closeProfileMenu = ()=>{setIsProfieMenuShown(false)}
  return (
    <div className="flex items-center justify-between gap-4 mb-4 relative">
      <IoIosMenu
        className="text-6xl text-gray-text md:hidden hover:cursor-pointer hover:text-dark-blue "
        onClick={() => {
          setIsMobilemenuShown((prev) => !prev);
          
          setIsProfieMenuShown(false);
        }}
      />
      <AdminPageTitle />
      <ProfileNotificationSearch
        onClickHandeler={() => {
          setIsProfieMenuShown((prev) => !prev);
          setIsMobilemenuShown(false);
        
        }}
        
      />
      {/* test Mobile menu */}
      {isMobilemenuShown && (
        <AdminMobileMenu
          onClickHandeler={() => {
            setIsMobilemenuShown(false);
          }}
        />
      )}
      {isProfileMenuShown && <ProfileMenu onClickHandeler={()=>setIsProfieMenuShown(false)}/>}
    </div>
  );
};

export default AdminPageTitleWrapper;
