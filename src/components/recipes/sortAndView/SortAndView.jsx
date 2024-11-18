"use client";
import { ViewContext } from "@/contexts/viewContext";
import { useContext } from "react";
import { FaList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";

const SortAndView = () => {
  const { view, setView } = useContext(ViewContext);
  return (
    <div className="px-2 flex items-center justify-start gap-4 mb-4">
      <IoGridSharp
        className="text-3xl text-gray-title hover:cursor-pointer hover:text-dark-blue"
        onClick={() => {
          setView("grid");
        }}
      />
      <FaList
        className="text-3xl text-gray-title hover:cursor-pointer hover:text-dark-blue"
        onClick={() => {
          setView("list");
        }}
      />
    </div>
  );
};

export default SortAndView;
