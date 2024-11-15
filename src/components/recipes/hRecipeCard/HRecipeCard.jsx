import Image from "next/image";
import { RecipeRank } from "@/components";
import Link from "next/link";
const HRecipeCard = ({ data }) => {
  const title =
    data.title.length > 12 ? `${data.title.substr(0, 11)}...` : data.title;

  const description = data?.description?.substr(0, 80);
  return (
    <div className="flex items-start justify-start gap-2 w-full md:w-[360px] ">
      {/* image */}

      <Image
        src={`/assets/imgs/optimized/${data.coverImage}`}
        alt="Recipe image"
        height={86}
        width={52}
      />
      {/* Data */}
      <div className="flex flex-col items-start justify-start w-full">
        {/* Title */}

        <div className="flex items-start justify-between gap-2 w-full  h-6 ">
          <Link
            href={`/belhana/recipe/${data.slug}`}
            className="hover:underline "
          >
            <div className=" text-sm md:text-xl text-dark-gray font-semibold w-full">
              {title}
              {/* {data.title} */}
            </div>
          </Link>
          <RecipeRank />
        </div>

        {/* Little description */}
        <p className="text-sm mt-2 text-gray-text leading-5  ">{`${description}...`}</p>
        {/* Rating */}
      </div>
    </div>
  );
};

export default HRecipeCard;
