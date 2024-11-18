import { ThreeActionButtons } from "@/components";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
const MessagesTable = ({ header, data }) => {
  const messages = data.map((message) => (
    <TableRow key={message.id}>
      {/* sender */}
      <TableCell className="">
        {/* user */}
        <div className="flex items-center gap-2">
          {/* avatar */}
          <Image
            src={`/assets/imgs/${message.avatar}.png`}
            alt="avatar"
            height={40}
            width={40}
          />
          {/* name and date */}
          <div className="flex flex-col items-start">
            <span className="text-sm text-dark-gray font-semibold">
              {message.from}
            </span>
            <span className="text-sm italic text-gray-title">
              {message.date}
            </span>
          </div>
        </div>
      </TableCell>
      {/* message title */}
      <TableCell className="text-dark-gray text-sm ">{message.title}</TableCell>
      {/* action icons */}
      <TableCell className="text-center">
        <ThreeActionButtons del={true} edit={true} facebook={false} />
      </TableCell>
    </TableRow>
  ));
  // TODO: MAke a tooltip to get the title of the message while hovering over the title in the message box
  return (
    <>
      <Table className="mt-4 min-w-full w-[500px]">
        {header && (
          <TableHeader>
            <TableRow>
              <TableHead className="w-[170px] ">From</TableHead>
              <TableHead>Message header</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
        )}
        <TableBody className="z-10">{messages}</TableBody>
      </Table>
    </>
  );
};

export default MessagesTable;
