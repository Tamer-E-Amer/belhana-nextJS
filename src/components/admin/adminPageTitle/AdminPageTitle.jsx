"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { IoIosMenu } from "react-icons/io";

const AdminPageTitle = () => {
  const [isMobilemenuShown, setIsMobilemenuShown] = useState(false);
  const path = usePathname();
  const currentPage = path.split("/").filter(Boolean).pop();
  return (

    <h1 className="text-lg text-dark-gray font-semibold basis-2/3 first-letter:capitalize">
        {currentPage == "admin" ? "Dashboard" : currentPage}
      </h1>
  );
};

export default AdminPageTitle;
