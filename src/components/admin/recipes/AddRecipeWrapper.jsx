import { AddRecipeForm } from "@/components";
import { getCategories } from "@/lib/dataHandlers";

const AddRecipeWrapper = async () => {
  const categories = await getCategories();
  return (
    <div className="xl:basis-2/3 w-full h-full bg-white p-4 rounded-md">
      <AddRecipeForm categories={categories} />
    </div>
  );
};

export default AddRecipeWrapper;
