import { RecipeCategoryItem } from "@/components";

const RecipeCategory = ({ category }) => {
  return (
    <div className="flex items-center justify-start gap-2   w-full md:w-[420px]">
      {/* title */}
      <span className="text-dark-gray text-lg font-semibold">Category:</span>
      {/* categories */}
      <div className="flex items-center justify-start gap-2">
        {/* categoryItems */}
        <RecipeCategoryItem category={category} />
      </div>
    </div>
  );
};

export default RecipeCategory;
