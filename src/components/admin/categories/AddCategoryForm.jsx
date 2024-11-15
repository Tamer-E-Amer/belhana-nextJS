import { FormTitle } from "@/components";
import Image from "next/image";
import { IoIosSave } from "react-icons/io";

const AddCategoryForm = () => {
  return (
    <div className="xl:basis-2/3 w-full h-full bg-white p-4 rounded-md">
      <form action="" className="space-y-4">
        <FormTitle title="Add new category"/>
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
          <label htmlFor="recipeTitle" className="font-medium text-dark-gray ">
            Description
          </label>

          <textarea
            name="description"
            id="description"
            rows="10"
            className="w-full outline-none border border-gray-line rounded-md px-4 py-2 font-medium text-dark-gray"
          ></textarea>
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

        {/* icon upload */}
        <label
          className="h-[150px] w-full p-4 border border-dashed rounded-md border-gray-line flex items-center justify-center hover:cursor-pointer hover:border-2 hover:border-gray-title"
          htmlFor="coverImage"
        >
          <div className="space-y-4 flex flex-col items-center ">
            <h1 className="font-medium">Upload Icon</h1>
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
          <span className="text-lg  ">Save category</span>
        </div>
      </form>
    </div>
  );
};

export default AddCategoryForm;
