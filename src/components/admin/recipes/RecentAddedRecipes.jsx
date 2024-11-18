import { RecentAddedItem } from "@/components";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getAllRecipe } from "@/lib/dataHandlers";

const RecentAddedRecipes = async () => {
  const recipesData = await getAllRecipe();
  const recipes = recipesData.map((recipe,index) => (
    <RecentAddedItem key={index} data={recipe} type="recipes" />
  ));
  return (
    <div className="xl:basis-1/3 w-full bg-white p-4 h-full rounded-md space-y-4 ">
      <h1 className="font-medium text-dark-gray">Recent Added Recipes</h1>
      <ScrollArea className="h-[600px] ">
        <div className="space-y-4">{recipes}</div>
      </ScrollArea>
    </div>
  );
};

export default RecentAddedRecipes;
