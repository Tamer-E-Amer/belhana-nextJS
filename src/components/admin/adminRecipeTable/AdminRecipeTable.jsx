import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllRecipe } from "@/lib/dataHandlers";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { LiaEdit } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";
const AdminRecipeTable = async () => {
  const recipesRes = await getAllRecipe();
  const recipes = recipesRes.map((rec) => (
    <TableRow key={rec.id}>
      {/* title */}
      <TableCell className="font-medium">
        <div className=" flex gap-2 items-center">
          <Image
            src={`/assets/imgs/optimized/${rec.coverImage}`}
            alt="icon"
            height={30}
            width={30}
          />
          <a href={`/belhana/recipe/${rec.slug}`} target="_blank">
            <span className=" text-gray-text font-semibold">{rec.title}</span>
          </a>
        </div>
      </TableCell>
      {/* comments */}
      <TableCell className="text-dark-gray  ">45422</TableCell>
      {/* likes */}
      <TableCell className="text-dark-gray  ">60000</TableCell>
      {/* rates */}
      <TableCell className="text-dark-gray  ">*****</TableCell>
      {/* suitable for dieters */}
      <TableCell className="text-dark-gray  ">
        {rec.suitableToDieters ? (
          <span className="inline-block w-16 border rounded-full bg-green-500  text-center text-white">
            Yes
          </span>
        ) : (
          <span className="inline-block w-16 border rounded-full  bg-red-400 text-center text-white">
            No
          </span>
        )}
        {/* economic */}
      </TableCell>
      <TableCell className="text-dark-gray  ">
        {rec.isEconomic ? (
          <span className="inline-block w-16 border rounded-full  bg-primary-orange text-center text-white">
            Yes
          </span>
        ) : (
          <span className="inline-block w-16 border rounded-full  bg-dark-blue text-white text-center">
            Yes
          </span>
        )}
      </TableCell>

      {/* action icons */}
      <TableCell>
        <div className="flex items-center  gap-2 ">
          <LiaEdit className="text-xl text-gray-text hover:cursor-pointer hover:text-primary-orange h-full" />
          <RiDeleteBin6Line className="text-xl text-gray-text hover:cursor-pointer hover:text-primary-orange" />
        </div>
      </TableCell>
    </TableRow>
  ));
  return (
    <ScrollArea style={{ height: "480px" }}>
      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Title</TableHead>
            <TableHead>Comments</TableHead>
            <TableHead>Likes</TableHead>
            <TableHead className="w-[150px]">Rate</TableHead>
            <TableHead>For dieters</TableHead>
            <TableHead>Economic</TableHead>
            <TableHead>Actions</TableHead>
            {/* <TableHead className="text-right">Amount</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody className="w-full">
          {recipes} {/* Ensure recipes is an array of TableRow components */}
        </TableBody>
      </Table>
    </ScrollArea>
  );
};

export default AdminRecipeTable;
