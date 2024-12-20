import {  TopRecipeItem } from "@/components";
import { getAllRecipe } from "@/lib/actions";
import { ScrollArea } from "@/components/ui/scroll-area";

const TopRatedRecipes = async () => {
  const recipesData = await getAllRecipe();
  const recipes = recipesData.map((rec) => (
    <div key={rec.id} className="flex items-start justify-between gap-2 w-full">
      <TopRecipeItem key={rec.id} data={rec} />
      <span className="text-lg text-green-700 font-semibold">541120</span>
    </div>
  ));
  return (
    <ScrollArea className="h-[410px] ">
      <div className="flex flex-col gap-4 items-start ">{recipes}</div>
    </ScrollArea>
  );
};

export default TopRatedRecipes;
