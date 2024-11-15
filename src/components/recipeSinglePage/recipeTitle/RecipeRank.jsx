import { MdStar } from "react-icons/md";
const RecipeRank = ({ position }) => {
  return (
    <div
      className={` flex items-start justify-end  gap-2 ${
        position === "recipeDetailsTitle"
          ? "absolute left-2 top-0 xl:-top-10"
          : ""
      }  h-8 w-[150px]`}
    >
      {/* starts */}
      <div className="flex items-center justify-start text-sm lg:text-xl my-1">
        <MdStar className=" text-yellow-600" />
        <MdStar className=" text-yellow-600" />
        <MdStar className=" text-yellow-600" />
        <MdStar className=" text-yellow-600" />
        <MdStar className=" text-yellow-600" />
      </div>
      {/* value */}
      <span className="text-dark-gray text-sm md:text-lg font-semibold">
        5.0
      </span>
    </div>
  );
};

export default RecipeRank;
