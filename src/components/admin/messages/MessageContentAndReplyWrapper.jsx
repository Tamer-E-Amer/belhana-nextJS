"use client";
import { useContext } from "react";
import { MessageDetails, MessageReply } from "@/components";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  MessageReplyFormContext,
} from "@/contexts/messageReplyFormViewContext";

const MessageContentAndReplyWrapper = () => {
  const { isMessageReplyFormShown } = useContext(MessageReplyFormContext);
  return (
    <div className="basis-2/3   h-full rounded-md  w-full">
      <ScrollArea className="h-full ">
        <div className="flex flex-col gap-4">
          {/* message details */}
          <MessageDetails />
          {/* message reply */}
          {isMessageReplyFormShown && <MessageReply />}
        </div>
      </ScrollArea>
    </div>
  );
};

export default MessageContentAndReplyWrapper;
