import { AddRecipeWrapper, RecentAddedRecipes } from "@/components";

const AdminRecipePage = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-4 items-center ">
      {/* RecipeForm */}
      <AddRecipeWrapper />
      {/* RecentAddedRecipes */}
      <RecentAddedRecipes />
    </div>
  );
};

export default AdminRecipePage;
