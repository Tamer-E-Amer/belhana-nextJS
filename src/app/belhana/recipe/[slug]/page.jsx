import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import {
  LinkToFB,
  RecipeDescription,
  RecipeTitle,
  Specifications,
} from "@/components";

// Dynamic importing
const CommentCard = dynamic(() =>
  import("@/components").then((mod) => mod.CommentCard)
);
const LikesAndComments = dynamic(() =>
  import("@/components").then((mod) => mod.LikesAndComments)
);

import { getRecipe } from "@/lib/dataHandlers";
import { getImageBlurDataURL } from "@/scripts/getImageBlurDataURL";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const recipe = await getRecipe(slug);
  return {
    title: recipe.title,
    description: recipe.description,
  };
};

const RecipeSinglePage = async ({ params }) => {
  const { slug } = params;
  // get recipe data
  const recipe = await getRecipe(slug);
  const blurDataURL = await getImageBlurDataURL(`${recipe.coverImage}`);
  return (
    <>
      <section className="container px-4 bg-white pt-32 flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-start">
        {/* recipe title */}
        <div className="lg:hidden w-full h-full ">
          <RecipeTitle title={`${recipe.title}`} FBLink={recipe.pathToFBPage} />
        </div>
        {/* recipe cover Image */}
        <div className="w-[360px] md:w-[412px] lg:w-1/3 flex items-center justify-center h-[676px] px-4 relative ">
          <Image
            src={`/assets/imgs/optimized/${recipe.coverImage}`}
            fill={true}
            alt="recipe img"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        </div>
        {/* data */}
        <div className="w-full lg:w-2/3">
          {/* recipe title */}
          <div className="w-full hidden lg:block">
            <RecipeTitle
              title={`${recipe.title}`}
              FBLink={`${recipe.pathToFBPage}`}
            />
          </div>
          <RecipeDescription description={`${recipe.description}`} />
          <Specifications
            prepareTime={`${recipe.avgTimeTobeFinished}`}
            isForDieters={`${recipe.suitableToDieters ? "Yes" : "NO"}`}
            isEconomic={`${recipe.isEconomic ? "Yes" : "NO"}`}
            category={`${recipe.categoryTitle}`}
          />
          <LikesAndComments />

          {/* title in the mobile screens */}
          <div className="lg:hidden w-full px-2">
            <LinkToFB position={""} link={`${recipe.pathToFBPage}`} />
          </div>
          <Link href={"/belhana/recipe"}>
            <div className="w-full border my-4 p-2 flex items-center justify-center cursor-pointer text-xl bg-gray-200 hover:bg-radial-gradient from-dark-blue to-black from-50% hover:text-white text-gray-600 transitio duration-300">
              More recipes...
            </div>
          </Link>
          {/* comments */}
          <div className="px-2 my-8 h-[360px] overflow-y-scroll">
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default RecipeSinglePage;
