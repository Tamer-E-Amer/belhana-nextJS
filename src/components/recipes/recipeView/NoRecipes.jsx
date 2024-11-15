import Image from "next/image";

const NoRecipes = () => {
  return (
    <div className="my-4 text-lg min-h-[600px] text-red-500 w-full flex flex-col gap-2 items-center justify-center  font-semibold ">
      <div className="relative h-[223px] w-[340px] md:w-[437px] md:h-[286.35px]">
        <Image src={"/assets/imgs/optimized/noRecipe.webp"} alt="no recipe" fill={true} />
      </div>
      <h1 className="text-sm md:text-lg text-red-600 font-semibold">
        Sorry. There are no recipes for this category
      </h1>
      <h1 className="text-sm md:text-lg text-red-600 font-semibold">
        Follow us later to see new recipe
      </h1>
    </div>
  );
};

export default NoRecipes;
