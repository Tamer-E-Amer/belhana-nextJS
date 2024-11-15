"use client";
import { useContext } from "react";
import { GridRecipeCard, HRecipeCard, NoRecipes } from "@/components";
import { ViewContext } from "@/contexts/viewContext";

const RecipeView = ({ recipes }) => {
  const { view } = useContext(ViewContext);
  const noRecipes = !recipes || recipes.length == 0;
  const renderedRecipes = recipes.map((rec) => {
    if (view === "list") {
      return <HRecipeCard key={rec._id} data={rec} />;
    } else if (view === "grid") {
      return <GridRecipeCard key={rec._id} data={rec} />;
      // return <h1 key={index}>Test</h1>;
    }
  });
  return (
    <>
      {noRecipes ? (
        <NoRecipes />
      ) : (
        <section className="min-h-screen">
          <div
            className={`w-full p-2  grid grid-cols-1   ${
              view === "list"
                ? "md:grid-cols-2 place-items-start"
                : "md:grid-cols-3 place-items-center"
            }  gap-4`}
          >
            {renderedRecipes}
          </div>
        </section>
      )}
    </>
  );
};

export default RecipeView;
