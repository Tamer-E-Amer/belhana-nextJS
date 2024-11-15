import {
  AddCategoryForm,
  AddedCategories,
  RecentAddedItem,
  RecentAddedRecipeItem,
} from "@/components";
import { ScrollArea } from "@/components/ui/scroll-area";

const AdminCategoriesPage = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-4 items-center ">
      {/* RecipeForm */}
      <AddCategoryForm />
      {/* RecentAddedRecipes */}
      <div className="xl:basis-1/3 w-full bg-white  h-full rounded-md space-y-4 ">
        <h1 className="font-medium text-dark-gray pl-4 pt-4">
          Recent Added Categories
        </h1>
        <ScrollArea className="h-[500px]">
          <AddedCategories />
        </ScrollArea>
      </div>
    </div>
  );
};

export default AdminCategoriesPage;
