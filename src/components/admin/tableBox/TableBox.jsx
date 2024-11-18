import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCategories } from "@/lib/actions";
import { FiSearch } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
const TableBox = async ({ title, children }) => {
  const categoriesRes = await getCategories();
  const categories = categoriesRes.map((cat) => (
    <SelectItem key={cat.id} value={cat.title}>
      {cat.title}
    </SelectItem>
  ));
  let searchPlaceHolder = "";
  switch (title) {
    case "Users":
      searchPlaceHolder = "Search users...";
      break;
    case "Recipes":
      searchPlaceHolder = "Search Recipes...";
      break;

    default:
      break;
  }
  return (
    <div className=" p-4 w-full bg-white h-[630px] rounded-md  ">
      {/* table header */}
      <div className="flex items-center  gap-4">
        {/* title */}
        <h1 className="font-medium text-dark-gray">{title}</h1>
        {/* category list */}
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select categories" />
          </SelectTrigger>
          <SelectContent>{categories}</SelectContent>
        </Select>
        {/* search */}
        <div className="w-1/3 h-10 px-2 border border-gray-200 rounded-md lg:flex items-center justify-between hidden">
          <input
            type="search"
            name="recipeSearch"
            placeholder={searchPlaceHolder}
            className="border-none outline-none w-full rounded-md"
          />
          <FiSearch className="text-2xl text-gray-200" />
        </div>
        {/* add icon */}
        <IoMdAdd className="text-4xl text-primary-orange ml-auto hover:cursor-pointer" />
      </div>
      {children}
    </div>
  );
};

export default TableBox;
