import Image from "next/image";

const AdminCategoryCard = ({ data }) => {
  return (
    <div className="w-full h-[80px] bg-white p-2 rounded-lg z-30">
      {/* icon and title */}
      <div className=" flex gap-2 items-start">
        <Image
          src={`/assets/icons/optimized/${data.img}`}
          alt="icon"
          height={30}
          width={30}
        />
        <span className="text-lg text-gray-text font-semibold">
          {data.title}
        </span>
      </div>
      {/* data */}
      <div className="flex gap-2 items-center justify-end">
        <span className="text-2xl text-dark-gray font-semibold">
          {Math.floor(Math.random() * (25 - 5 + 1)) + 5}
        </span>
        <span className="text-sm text-gray-text">Recipes</span>
      </div>
    </div>
  );
};

export default AdminCategoryCard;
