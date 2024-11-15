import {
  MessageContentAndReplyWrapper,
  MessageDetails,
  MessageReply,
  MessagesTable,
} from "@/components";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MessageReplyFormProvider } from "@/contexts/messageReplyFormViewContext";
export const messagesData = [
  {
    id: 1,
    from: "T. Amer",
    avatar: "avatar",
    title: "new recipe for dieters",
    date: "01-05-2024",
  },
  {
    id: 2,
    from: "S. Ibrahim",
    avatar: "avatar2",
    title: "How to make italian Pizza",
    date: "11-05-2024",
  },
  {
    id: 3,
    from: "E. sPLIMAN",
    avatar: "avatar3",
    title: "comment about dumiati duck",
    date: "17-05-2024",
  },
  {
    id: 1,
    from: "K. Adam",
    avatar: "avatar4",
    title: "REgisteration problem",
    date: "22-05-2024",
  },
];
const MessagePage = () => {
  return (
    <div className="flex flex-col xl:flex-row items-start gap-4 h-full">
      {/* message list */}
      <div className="xl:basis-1/3 bg-white w-full  h-full rounded-md p-4">
        {/* title */}
        <div className="flex items-center gap-2">
          <h1 className="text-gray-title font-medium">All messages</h1>
          {/* message count */}
          <div className="bg-red h-6 w-6 bg-red-600 rounded-full text-white flex items-center justify-center">
            {messagesData.length}
          </div>
        </div>
        {/* message list */}
        <ScrollArea className="h-[280px] whitespace-nowrap">
          <MessagesTable header={true} data={messagesData} />
          <ScrollBar orientation="horizontal" />
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </div>
      {/* message contet */}
      <MessageReplyFormProvider>
        <MessageContentAndReplyWrapper />
      </MessageReplyFormProvider>
    </div>
  );
};

export default MessagePage;
