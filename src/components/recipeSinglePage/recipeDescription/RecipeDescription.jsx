const RecipeDescription = ({ description }) => {
  return (
    <>
      <div className="px-2 space-y-4">
        <p className="text-gray-text leading-relaxed text-lg text-center lg:text-left">
          {description}
        </p>
      </div>
    </>
  );
};

export default RecipeDescription;
