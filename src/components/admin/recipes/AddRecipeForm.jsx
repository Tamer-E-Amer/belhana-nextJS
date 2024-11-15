"use client";
import { Combobox, FormTitle } from "@/components";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { useState } from "react";
import { IoIosSave } from "react-icons/io";

const AddRecipeForm = ({ categories }) => {
  const [hasRecipeVideo, setHasRecipeVideo] = useState(false);

  return (
    <>
      <FormTitle title="Add new recipe"/>

       <form action="" className="space-y-4">
     
      {/* title */}
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="recipeTitle" className="font-medium text-dark-gray ">
          Tile
        </label>
        <input
          type="text"
          name="recipeTitle"
          id="recipeTitle"
          className="w-full outline-none border border-gray-line rounded-md px-4 py-2 font-medium text-dark-gray"
        />
      </div>
      {/* Description */}
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="decription" className="font-medium text-dark-gray ">
          Description
        </label>
        {/* <input
      type="text"
      name="recipeTitle"
      id="recipeTitle"
      className="w-full outline-none border border-gray-line rounded-full px-4 py-2 font-medium text-dark-gray"
    /> */}
        <textarea
          name="description"
          id="description"
          rows="10"
          className="w-full outline-none border border-gray-line rounded-md px-4 py-2 font-medium text-dark-gray"
        ></textarea>
      </div>
      {/* flex Category and Facebook link */}
      <div className="flex flex-col xl:flex-row items-center xl:justify-between gap-4">
        {/* Category */}
        <div className="flex flex-col items-start gap-2 xl:basis-1/2 w-full ">
          <label htmlFor="" className="font-medium text-dark-gray ">
            Category
          </label>
          <div className="w-full outline-none border border-gray-line rounded-md   font-medium text-dark-gray">
            <Combobox data={categories} />
          </div>
        </div>
        {/* facebook */}
        <div className="flex flex-col items-start gap-2 xl:basis-1/2 w-full">
          <label htmlFor="facebookLink" className="font-medium text-dark-gray ">
            Facebook link
          </label>
          <input
            type="text"
            name="facebookLink"
            id="facebookLink"
            className="w-full outline-none border border-gray-line rounded-md px-4 py-2 font-medium text-dark-gray"
          />
        </div>
      </div>
      {/* flex preparation time and checkboxes  */}
      <div className=" flex flex-col xl:flex-row items-center xl:justify-between gap-4">
        {/* preparation time */}
        <div className="w-full flex flex-col items-start gap-2">
          <label htmlFor="prepTime" className="font-medium text-dark-gray ">
            Preperation time
          </label>
          <input
            type="text"
            name="prepTime"
            id="prepTime"
            className="w-full outline-none border border-gray-line rounded-md px-4 py-2 font-medium text-dark-gray"
          />
        </div>
        {/* Checkboxes */}

        <div className="w-full grid grid-cols-3 lg:grid-cols-4 gap-4 ">
          <div className="flex flex-col items-start gap-2 w-[80px] ">
            <label htmlFor="isEconomic" className="font-medium text-dark-gray ">
              Economic
            </label>
            <Checkbox id="economics" className="h-6 w-6" />
          </div>
          <div className="flex flex-col items-start gap-2 w-[80px] ">
            <label htmlFor="ramadan" className="font-medium text-dark-gray ">
              Ramadan
            </label>
            <Checkbox id="ramadan" className="h-6 w-6" />
          </div>
          <div className="flex flex-col items-start gap-2 w-[80px] ">
            <label htmlFor="forDieters" className="font-medium text-dark-gray ">
              For dieters
            </label>
            <Checkbox id="forDieters" className="h-6 w-6" />
          </div>
          <div className="flex flex-col items-start gap-2 w-[80px] ">
            <label htmlFor="fried" className="font-medium text-dark-gray ">
              Fried
            </label>
            <Checkbox id="fried" className="h-6 w-6" />
          </div>
          <div className="flex flex-col items-start gap-2 w-[80px] ">
            <label htmlFor="video" className="font-medium text-dark-gray ">
              Has video
            </label>
            <Checkbox
              id="video"
              className="h-6 w-6"
              checked={hasRecipeVideo}
              onCheckedChange={setHasRecipeVideo}
            />
          </div>
          <div className="flex flex-col items-start gap-2 w-[80px] ">
            <label htmlFor="featured" className="font-medium text-dark-gray ">
              Is featured
            </label>
            <Checkbox id="featured"  className="h-6 w-6" />
          </div>
        </div>
      </div>
      {/* Video link */}
      {hasRecipeVideo && (
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="recipeTitle" className="font-medium text-dark-gray ">
            Video link
          </label>
          <input
            type="text"
            name="video"
            id="video"
            className="w-full outline-none border border-gray-line rounded-md px-4 py-2 font-medium text-dark-gray"
          />
        </div>
      )}
      {/* cover image upload */}
      <label
        className="h-[300px] w-full p-4 border border-dashed rounded-md border-gray-line flex items-center justify-center hover:cursor-pointer hover:border-2 hover:border-gray-title"
        htmlFor="coverImage"
      >
        <div className="space-y-4 flex flex-col items-center ">
          <h1 className="font-medium">Upload cover image</h1>
          <Image
            src="/assets/imgs/upload-icon.png"
            width={87.2}
            height={81.39}
            alt="upload icon"
          />
        </div>
        <input
          type="file"
          name="coverImage"
          id="coverImage"
          accept="image/*"
          className="hidden"
        />
      </label>
      <div className="flex items-center justify-center gap-2 border text-white border-gray-line w-full py-2 p-x2 hover:cursor-pointer bg-dark-gray hover:bg-gray-text transition duration-300 rounded-md">
        <IoIosSave className="text-3xl " />
        <span className="text-lg  ">Save recipe</span>
      </div>
    </form>
    </>
    
  );
};

export default AddRecipeForm;
