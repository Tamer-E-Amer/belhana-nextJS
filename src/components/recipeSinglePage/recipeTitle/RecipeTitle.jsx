import { LinkToFB, RecipeRank } from "@/components";
const RecipeTitle = ({ title, FBLink }) => {
  return (
    <>
      <div className="px-2 h-12 md:h-20 border-t border-t-gray-line relative  w-full ">
        {/* text title */}
        <h1 className="text-3xl lg:text5xl text-gray-title absolute  -top-20 xl:top-0 left-1/2 transform -translate-x-1/2 xl:-translate-y-1/2 bg-white  px-4 w-full xl:w-auto text-center">
          {title}
        </h1>
        {/* link to FB page*/}
        <LinkToFB position={"title"} link={FBLink} />
        {/* rank */}
        <RecipeRank position={"recipeDetailsTitle"} />
      </div>
    </>
  );
};

export default RecipeTitle;
