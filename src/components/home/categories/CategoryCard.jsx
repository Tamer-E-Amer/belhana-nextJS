import Link from "next/link";

const CategoryCard = ({ img, title, slug }) => {
  return (
    <Link href={`/belhana/categories/${slug}`} prefetch={false}>
      <div className="cursor-pointer relative flex items-center justify-center group overflow-hidden">
        <img src={`assets/imgs/optimized/${img}`} alt={title} loading="lazy" />

        <div className=" absolute -bottom-20 group-hover:bottom-0 transition-all duration-500 w-full text-sm md:text-lg text-center text-white bg-primary-orange/80 py-4">
          {title}
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
