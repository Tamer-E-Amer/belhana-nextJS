"use client";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import { SideBarMenuItem, SideBarSpecItem } from "@/components";
import { useState } from "react";
const SideBarMenu = ({ categories }) => {
  const [isCategoryListDisplayed, setIsCateogryListDisplayed] = useState(false);
  const [isSpecDisplayed, setIsSpecDisplayed] = useState(false);
  const renderedCategories = categories.map((cat) => (
    <SideBarMenuItem key={cat._id} data={cat} />
  ));
  return (
    <div className="w-full bg-white  lg:w-[280px] mb-4 pt-4 pl-2">
      {/* Categories */}
      <div className="">
        <div
          className="w-full p-2 flex items-center justify-between gap-2  bg-gray-200 hover:cursor-pointer"
          onClick={() => {
            setIsCateogryListDisplayed((prev) => !prev);
          }}
        >
          <span className="text-lg font-semibold text-dark-gray">
            Categories
          </span>
          <span>
            {isCategoryListDisplayed ? (
              <IoIosArrowUp className="text-primary-orange text-2xl" />
            ) : (
              <IoIosArrowDown className="text-primary-orange text-2xl" />
            )}
          </span>
        </div>
        <aside
          className={`${
            isCategoryListDisplayed ? "grid" : "hidden"
          }  min-h-[300px]  grid-cols-2 lg:grid-cols-1 place-items-start pl-4  gap-4 mt-4 text-lg `}
        >
          {renderedCategories}
        </aside>
      </div>
      {/* filters */}
      <div className="pt-4">
        <div
          className="w-full p-2 flex items-center justify-between gap-2  bg-gray-200 hover:cursor-pointer"
          onClick={() => {
            setIsSpecDisplayed((prev) => !prev);
          }}
        >
          <span className="text-lg font-semibold text-dark-gray">
            Specifications
          </span>
          <span>
            {isSpecDisplayed ? (
              <IoIosArrowUp className="text-primary-orange text-2xl" />
            ) : (
              <IoIosArrowDown className="text-primary-orange text-2xl" />
            )}
          </span>
        </div>
        <div
          className={`${
            isSpecDisplayed ? "grid" : "hidden"
          } grid-cols-1  place-items-center lg:place-items-start pl-4 pr-4 md:pr-0  gap-4 my-4 lg:mb-8`}
        >
          <SideBarSpecItem label="Suitable for dieters" id="dieter" />
          <SideBarSpecItem label="Economic" id="economic" />
          <SideBarSpecItem label="Quick preparation" id="quick" />
        </div>
      </div>
    </div>
  );
};

export default SideBarMenu;
