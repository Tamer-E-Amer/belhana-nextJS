const SideBox = ({ title, link, height, children }) => {
  return (
    <div
      className={`  px-4 rounded-lg bg-white `}
      style={{ height: `${height}px` }}
    >
      {/* title */}
      <div className=" flex items-center justify-between  bg-white py-4 ">
        {/* title text */}
        <h1 className="text-lg text-dark-gray font-semibold">{title}</h1>
        <span className="text-sm text-primary-orange hover:cursor-pointer hover:underline">
          {link}
        </span>
      </div>
      {/* content */}
      <div>{children}</div>
    </div>
  );
};

export default SideBox;
