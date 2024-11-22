"use client";
import { AdminCheckbox, Combobox, FormTitle } from "@/components";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { useState } from "react";
import { IoIosSave } from "react-icons/io";

const AddRecipeForm = ({ categories }) => {
  const [hasRecipeVideo, setHasRecipeVideo] = useState(false);

  return (
    <div className="xl:basis-2/3 w-full h-full bg-white p-4 rounded-md">
      <form action="" className="space-y-8">
        <FormTitle title="Add new category" />
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
            <label
              htmlFor="facebookLink"
              className="font-medium text-dark-gray "
            >
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
        {/* test Flex preparation time and checkboxes */}
        <div className="rounded-md bg-gray-100 p-4">
          <h3 className="font-medium text-dark-gray mb-2">Recipe properties</h3>
          <div className="w-full grid grid-cols-3 lg:grid-cols-4 gap-6 p-4 bg-gray-200 rounded-md">
            <AdminCheckbox
              title="Economic"
              htmlFor="economic"
              name="economic"
            />
            <AdminCheckbox title="Ramadan" htmlFor="ramadan" name="ramadan" />
            <AdminCheckbox
              title="For dieters"
              htmlFor="forDieters"
              name="forDieters"
            />
            <AdminCheckbox title="Fried" htmlFor="fried" name="fried" />
            <AdminCheckbox
              title="Featured"
              htmlFor="featured"
              name="featured"
            />
            <AdminCheckbox
              title="Has a video"
              htmlFor="hasAVideo"
              name="hasAVideo"
              onChange={(e)=>{setHasRecipeVideo(e.target.checked)}}
              checked={hasRecipeVideo}
            />
            {/* <div className="colspg">

            </div> */}
     
          </div>
          {hasRecipeVideo && (
            <div className="flex flex-col items-start gap-2 mt-4">
              <label
                htmlFor="recipeTitle"
                className="font-medium text-dark-gray "
              >
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
        </div>
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
        {/* save Button */}
        <div className="flex items-center justify-center gap-2 border text-white border-gray-line w-full py-2 p-x2 hover:cursor-pointer bg-dark-gray hover:bg-gray-text transition duration-300 rounded-md">
          <IoIosSave className="text-3xl " />
          <span className="text-lg  ">Save recipe</span>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
