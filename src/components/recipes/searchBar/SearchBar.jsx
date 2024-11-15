import { FiSearch } from "react-icons/fi";
const SearchBar = () => {
  return (
    <div className="border border-gray-300 w-full  flex items-center justify-start px-2 my-4">
      <FiSearch className="text-2xl text-gray-text" />
      <input
        type="text"
        name="recipeSearch"
        id="recipeSearch"
        className="outline-none border-none p-2 text-sm py-2 text-center w-full"
        placeholder="Search Recipe here..."
      />
    </div>
  );
};

export default SearchBar;
