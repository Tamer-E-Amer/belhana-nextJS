import Image from "next/image";
import Link from "next/link";

const GridRecipeCard = ({ data }) => {
  const { coverImage, title, slug } = data;
  return (
    <div className="w-[340px] md:w-[222px] h-[364px] cursor-pointer overflow-hidden group relative ">
      <Image
        src={`/assets/imgs/optimized/${coverImage}`}
        fill={true}
        alt={title}
      />

      {/* title */}
      <Link href={`/belhana/recipe/${slug}`}>
        <div className="hidden absolute -bottom-10 group-hover:flex  group-hover:bottom-0 right-0 transition-all duration-300 text-sm text-white   items-center justify-center w-full h-12 bg-primary-orange ">
          {data.title}
        </div>
      </Link>
    </div>
  );
};

export default GridRecipeCard;
