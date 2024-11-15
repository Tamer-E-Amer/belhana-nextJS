const Input = ({ label, id, name }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-2 items-start w-full text-lg ">
      <label
        htmlFor="firstName"
        className=" text-gray-200  lg:w-[130px] xl:text-right"
      >
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={id}
        className="w-full p-4  text-gray-200 bg-contact-inputs-bg h-8 border border-gray-500"
      />
    </div>
  );
};

export default Input;
