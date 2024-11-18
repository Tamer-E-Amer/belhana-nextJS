import { Tag, ThreeActionButtons } from "@/components";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllRecipe } from "@/lib/actions";
import Image from "next/image";
import { TbLetterX } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";

const RecipeTable = async () => {
  const recipesResp = await getAllRecipe();
  const recipes = recipesResp.map((recipe) => (
    <TableRow key={recipe.id}>
      <TableCell className="font-medium">
        <div className="flex items-center gap-2">
          {/* image */}
          <div className="relative w-10 h-10 border-dark-gray rounded-full overflow-hidden bg-red-300">
            <Image
              src={`/assets/imgs/optimized/${recipe.coverImage}`}
              alt={recipe.title}
              fill
            />
          </div>
          {/* title */}
          <div>{`${
            recipe.title.length > 12
              ? `${recipe.title.slice(0, 12)}...`
              : `${recipe.title}`
          }`}</div>
        </div>
      </TableCell>
      <TableCell>452145</TableCell>
      <TableCell>74400</TableCell>
      <TableCell>*****</TableCell>
      {/* dieters */}
      <TableCell className="text-center">
        {recipe.suitableToDieters ? (
          <Tag bgColor="green">
            <FaCheck className="text-white text-sm lg:text-lg" />
          </Tag>
        ) : (
          <Tag bgColor="red">
            <TbLetterX className="text-white text-sm lg:text-lg" />
          </Tag>

        )}
      </TableCell>
      {/* economic */}
      <TableCell className="text-center ">
        {recipe.isEconomic ? (
          <Tag bgColor="blue">
            <FaCheck className="text-white text-sm lg:text-lg" />
          </Tag>
        ) : (
          //   "Yes"
          <Tag bgColor="orange">
            <TbLetterX className="text-white text-sm lg:text-lg" />
          </Tag>
        )}
      </TableCell>
      {/* actions */}
      <TableCell className="text-center">
        <ThreeActionButtons facebook={true} del={true} edit={true} />
      </TableCell>
    </TableRow>
  ));
  return (
    <div className="mt-4">
      <ScrollArea  className="h-[530px]   whitespace-nowrap">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px] font-semibold">Title</TableHead>
              <TableHead>Comments</TableHead>
              <TableHead>Likes</TableHead>
              <TableHead>Rate</TableHead>
              <TableHead className="text-center">For dieters</TableHead>
              <TableHead className="text-center">Economic</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="overflow-x-scroll">{recipes}</TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
};

export default RecipeTable;
