const RecipeCategoryItem = ({ category }) => {
  return (
    <div className="text-gray-title border border-gray-line h-6 w-32 flex items-center justify-center cursor-pointer rounded-full hover:bg-dark-gray hover:text-white transition-all duration-300">
      {category}
    </div>
  );
};

export default RecipeCategoryItem;
