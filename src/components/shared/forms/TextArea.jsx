const TextArea = ({ label, id, name, cols, rows }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-2 items-start w-full text-lg  ">
      <label
        htmlFor="firstName"
        className=" text-gray-200 lg:w-[130px] xl:text-right "
      >
        {label}
      </label>

      <textarea
        name={name}
        id={id}
        cols={cols}
        rows={rows}
        className="w-full p-4  text-gray-200 bg-contact-inputs-bg  border border-gray-500"
      ></textarea>
    </div>
  );
};

export default TextArea;
