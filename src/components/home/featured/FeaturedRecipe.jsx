import { MasonaryRecipes } from "@/components";
import { getFeaturedRecipe } from "@/lib/actions";

const FeaturedRecipe = async () => {
  const featuredRecipes = await getFeaturedRecipe();
  return (
    <>
      <section className="bg-white w-full  px-4 md:px-0 py-8" id="recipes">
        <div className="container flex flex-col items-center justify-between gap-8">
          <p className="text-lg lg:text-xl text-dark-gray leading-relaxed lg:w-3/4  text-center">
            As we always strive to bring you recipes that capture your hearts, I
            am excited to share that in this section of the website, we will be
            presenting a variety of recipes across different categories. We are
            confident that you will enjoy and love them all
          </p>
          {/* recipes images */}
          <MasonaryRecipes recipeData={featuredRecipes} />
        </div>
      </section>
    </>
  );
};

export default FeaturedRecipe;
