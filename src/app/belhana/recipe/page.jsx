import { SearchBar, SortAndView,SideBarMenu,RecipeView } from "@/components";
import { ViewProvider } from "@/contexts/viewContext";
import { getAllRecipe, getCategories } from "@/lib/dataHandlers";
// Data-Drivenn component
// const SideBarMenu = dynamic(() =>
//   import("@/components").then((mod) => mod.SideBarMenu)
// );
// const RecipeView = dynamic(() =>
//   import("@/components").then((mod) => mod.RecipeView)
// );

const page = async () => {
  const categories = await getCategories();
  const recipes = await getAllRecipe();
  return (
    <>
      <ViewProvider>
        <section className="container bg-white pt-12 flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-start">
          {/* side menu */}
          <SideBarMenu categories={categories} />
          {/* recipes */}
          <div className="w-full px-2">
            {/* Breadcrumps */}
            <div className="text-sm text-gray-title mb-2">
              {"Home > recipe"}
            </div>
            {/* search bar*/}
            <SearchBar />
            {/* sort and view */}
            <SortAndView />
            {/* recipe cards */}
            <RecipeView recipes={recipes} />
          </div>
        </section>
      </ViewProvider>
    </>
  );
};

export default page;
