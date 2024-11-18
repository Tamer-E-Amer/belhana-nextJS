import { AdminCategoryCard } from "@/components";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getCategories } from "@/lib/dataHandlers";

const CategoryCardsWrapper = async () => {
  const categoriesData = await getCategories();
  const categories = categoriesData.map((cat) => (
    <AdminCategoryCard key={cat.id} data={cat} />
  ));
  return (
    <ScrollArea className="h-[180px] w-full mb-4 ">
      <div className=" grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4   gap-4 justify-items-center ">
        {categories}
      </div>
    </ScrollArea>
  );
};

export default CategoryCardsWrapper;
