import dynamic from "next/dynamic";
import { SearchBar, SortAndView } from "@/components";

// Data-Driven components
const RecipeView = dynamic(() =>
  import("@/components").then((mod) => mod.RecipeView)
);
const SideBarMenu = dynamic(() =>
  import("@/components").then((mod) => mod.SideBarMenu)
);
////////////////////////////////
import { ViewProvider } from "@/contexts/viewContext";
import { getAllRecipe, getCategories, getCategory } from "@/lib/actions";

// Meta data
export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const cat = await getCategory(slug);
  return {
    title: `${cat.title} category`,
    description: cat.description,
  };
};


const page = async ({ params }) => {
  const { slug } = params;

  const [categories, category] = await Promise.all([
    getCategories({ revalidate: 3600 }),
    getCategory(slug),
  ]);

  const categoryRecipe = await getAllRecipe(category._id, { revalidate: 3600 });
  return (
    <>
      <section className="container bg-white pt-12 flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-start">
        {/* side menu */}
        <SideBarMenu categories={categories} />
        {/* recipes */}
        <div className="w-full px-2">
          {/* Breadcrumps */}
          <div className="text-sm text-gray-title mb-2">{"Home > recipe"}</div>
          {/* search bar*/}
          <SearchBar />
          <ViewProvider>
            {/* sort and view */}
            <SortAndView />
            {/* recipe cards */}
            <RecipeView recipes={categoryRecipe} />
          </ViewProvider>
        </div>
      </section>
    </>
  );
};

export default page;
