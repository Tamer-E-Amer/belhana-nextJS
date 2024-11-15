import { ThreeActionButtons } from "@/components";
import Image from "next/image";

/**
 * @description this component is used to accept weather to add category or a recipe so it adjust the image of the added item according to the type of the added item
 *
 */
const RecentAddedItem = ({ data, type }) => {
  const description =
    data?.description && data.description.length > 150
      ? `${data?.description.substr(0, 60)} ...`
      : data?.description;

  const title =
    data?.title && data.title.length > 14
      ? `${data.title.substr(0, 14)}...`
      : data.title;
  return (
    <div className="flex items-start gap-2 w-full hover:cursor-pointer hover:bg-gray-100  py-2 pr-4">
      {type == "category" && (
        <Image
          src={`/assets/icons/optimized/${data.img}`}
          alt="recipe"
          height={32}
          width={32}
        />
      )}
      {type == "recipes" && (
        <Image
          src={`/assets/imgs/optimized/${data.coverImage}`}
          alt="recipe"
          height={28}
          width={60}
        />
      )}
      {/* data */}
      <div className="flex gap-2 flex-col items-start w-full">
        {/* title and action button */}
        <div className="flex  items-center   justify-between w-full">
          <div className="font-medium text-dark-gray  ">{title}</div>
          <ThreeActionButtons facebook={false} edit={true} del={true} />
        </div>
        <div className="w-full text-sm leading-relaxed text-gray-text">
          {description}
        </div>
      </div>

      {/* description */}
    </div>
  );
};

export default RecentAddedItem;
