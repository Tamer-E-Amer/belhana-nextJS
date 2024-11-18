const LinkToFB = ({ link, position }) => {
  return (
    <a href={link} target="_blank">
      <div
        className={`bg-primary-orange px-2 w-[170px] xl:w-[270px] h-6 lg:h-8 rounded-full text-sm text-white flex items-center justify-center cursor-pointer hover:border hover:border-dark-blue hover:text-dark-blue hover:bg-white transition-all duration-300 ${
          position === "title" ? "absolute" : ""
        }  right-2 top-2`}
      >
        Go to Facebook page
      </div>
    </a>
  );
};

export default LinkToFB;
