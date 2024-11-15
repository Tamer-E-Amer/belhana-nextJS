import { RecipeCategory } from "@/components";
import SpecificationItem from "./SpecificationItem";
import { GoStopwatch } from "react-icons/go";
import { IoIosFitness } from "react-icons/io";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const Specifications = ({
  prepareTime,
  isForDieters,
  isEconomic,
  category,
}) => {
  return (
    <div className="flex flex-col flex-wrap items-start justify-start md:flex-row md:items-center md:justify-start px-2 gap-8  py-2 h-auto my-8">
      {/* Category */}
      <RecipeCategory category={category} />
      {/* specifications */}
      <div className="flex flex-col items-start justify-start  md:flex-row gap-8 ">
        <SpecificationItem
          icon={<GoStopwatch className="text-2xl text-gray-title" />}
          title={"Perparation time"}
          value={prepareTime}
          key={1}
        />
        <SpecificationItem
          icon={<IoIosFitness className="text-2xl text-gray-title" />}
          title={"Suitable to dieters"}
          value={isForDieters}
          key={2}
        />
        <SpecificationItem
          icon={
            <RiMoneyDollarCircleLine className="text-2xl text-gray-title" />
          }
          title={"Economic recipe"}
          value={isEconomic}
          key={3}
        />
      </div>
    </div>
  );
};

export default Specifications;
