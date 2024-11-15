const Button = ({ text, icon }) => {
  return (
    <div className="flex flex-col xl:flex-row lg:gap-2 items-start h-8 w-full  ">
      <label
        htmlFor="firstName"
        className=" text-gray-200 lg:w-[130px] text-right"
      ></label>
      <div className="w-full text-lg   flex items-center justify-center gap-2 bg-primary-orange text-white py-2   cursor-pointer group">
        {icon}
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Button;
