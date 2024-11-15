import { ThreeActionButtons } from "@/components";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
const UsersTable = () => {
  const usersData = [
    {
      id: 1,
      avatar: "avatar.png",
      userName: "T. Amer",
      regDate: "22-05-2024",
      status: "active",
      role: "admin",
    },
    {
      id: 2,
      avatar: "avatar2.png",
      userName: "S. Sedky",
      regDate: "01-05-2024",
      status: "active",
      role: "admin",
    },
    {
      id: 3,
      avatar: "avatar3.png",
      userName: "J. Doe",
      regDate: "21-05-2024",
      status: "susbend",
      role: "user",
    },
    {
      id: 4,
      avatar: "avatar4.png",
      userName: "S. Cali",
      regDate: "22-06-2024",
      status: "active",
      role: "user",
    },
  ];

  const usersRows = usersData.map((user) => (
    <TableRow key={user.id}>
      <TableCell className="font-medium">
        <div className="flex items-center gap-2">
          {/* image */}
          <div className="relative w-10 h-10 border-dark-gray rounded-full overflow-hidden bg-red-300">
            <Image
              src={`/assets/imgs/${user.avatar}`}
              alt={user.userName}
              fill
            />
          </div>
          {/* title */}
          <div>{user.userName}</div>
        </div>
      </TableCell>
      <TableCell>{user.regDate}</TableCell>
      <TableCell>{user.status}</TableCell>
      <TableCell className="text-center">{user.role}</TableCell>
      <TableCell className="text-center">
        <ThreeActionButtons facebook={false} edit={true} del={true} />
      </TableCell>
    </TableRow>
  ));
  return (
    <div className="mt-4">
      <ScrollArea  className="h-[530px]   whitespace-nowrap">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px]">User name</TableHead>
            <TableHead>Registration date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Role</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{usersRows}</TableBody>
      </Table>
      <ScrollBar orientation="horizontal" />
      <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
};

export default UsersTable;
