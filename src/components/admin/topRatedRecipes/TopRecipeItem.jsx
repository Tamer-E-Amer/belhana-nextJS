import Image from "next/image";

const TopRecipeItem = ({ data }) => {
  
  const title =
    data.title.length > 12 ? `${data.title.substr(0, 11)}...` : data.title;
  const description =
   data?.description && data?.description.length > 50 ? `${data?.description.substr(0, 50)}...` : data?.description;

  // const description = data.description.substr(0, 50);
  return (
    <div className="flex items-start gap-2">
      {/* image */}
      <Image
        src={`/assets/imgs/optimized/${data.coverImage}`}
        alt="recipe"
        height={86}
        width={52}
      />
      {/* data */}
      <div className="flex flex-col items-start justify-start gap-0">
        <span className="font-medium text-dark-gray ">{title}</span>
        <span className="text-sm text-gray-text">{description}</span>
      </div>
    </div>
  );
};

export default TopRecipeItem;
