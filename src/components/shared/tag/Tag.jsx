const Tag = ({ bgColor, children }) => {
  let bg = "";
  switch (bgColor) {
    case "green":
      bg = "#32BF3B";
      break;
    case "red":
      bg = "#E54B4B";
      break;
    case "blue":
      bg = "#0D1047";
      break;
    case "orange":
      bg = "#FB9300";
      break;

    default:
      break;
  }
  return (
    <div className=" flex items-center justify-center">
      <div
        className="w-4 h-4 lg:w-8 lg:h-8 rounded-full flex items-center justify-center text-white"
        style={{ backgroundColor: bg }}
      >
        {children}
      </div>
    </div>
  );
};

export default Tag;
