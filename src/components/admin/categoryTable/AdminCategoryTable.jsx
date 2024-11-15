import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { getCategories } from "@/lib/dataHandlers";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import { LiaEdit } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";
const AdminCategoryTable = async () => {
  const categoriesData = await getCategories();
  const categories = categoriesData.map((cat) => (
    <TableRow key={cat.id}>
      <TableCell className="font-medium">
        <div className=" flex gap-2 items-start">
          <Image
            src={`/assets/icons/optimized/${cat.img}`}
            alt="icon"
            height={30}
            width={30}
          />
          <span className=" text-gray-text font-semibold">{cat.title}</span>
        </div>
      </TableCell>
      <TableCell className="text-dark-gray  ">5</TableCell>
      {/* action icons */}
      <TableCell className="flex items-center justify-center gap-2">
        <LiaEdit className="text-xl text-gray-text hover:cursor-pointer hover:text-primary-orange" />
        <RiDeleteBin6Line className="text-xl text-gray-text hover:cursor-pointer hover:text-primary-orange" />
      </TableCell>
      {/* <TableCell className="text-right">$250.00</TableCell> */}
    </TableRow>
  ));
  return (
    <div className="bg-white px-4 rounded-lg  w-full">
      {/* title bar*/}
      <div className="flex items-center justify-between sticky top-0 bg-white py-4 z-50">
        {/* title text */}
        <div className="flex gap-2">
          <h1 className="text-lg font-semibold text-dark-gray">Categories</h1>
          <div
            className=" w-6 h-6 rounded-full bg-primary-orange text-white text-sm text-semi
         flex items-center justify-center "
          >
            10
          </div>
        </div>
        {/* add Category */}
        <div className="flex items-center gap-2 group hover:cursor-pointer">
          <IoMdAdd className="text-2xl text-primary-orange" />
          {/* <span className="text-sm text-dark-gray font-semibold group-hover:underline">
            Add category
          </span> */}
        </div>
      </div>
      {/* category table */}
      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px] ">Category</TableHead>
            <TableHead>Recipes</TableHead>
            <TableHead>Actions</TableHead>
            {/* <TableHead className="text-right">Amount</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody className="z-10">{categories}</TableBody>
      </Table>
    </div>
  );
};

export default AdminCategoryTable;
