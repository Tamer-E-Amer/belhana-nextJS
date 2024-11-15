import { useContext } from "react";
import { MessageActionButton } from "@/components";
import Image from "next/image";
import { IoIosSend } from "react-icons/io";
import { TbLetterX } from "react-icons/tb";
import { MessageReplyFormContext } from "@/contexts/messageReplyFormViewContext";
const MessageReply = () => {
  const { setIsMessageReplyFormShown } = useContext(MessageReplyFormContext);

  return (
    <div className="space-y-4 bg-white rounded-md p-4 lg:p-8 relative">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl text-dark-gray font-semibold my-8">
          Reply to: Recipe to make PIZZA
        </h1>
        <div
          className="h-10 w-10 text-red-600 border border-gray-line rounded-tr-md  font-medium p-2  hover:cursor-pointer hover:bg-red-600 hover:border-red-600 hover:text-white transition  duration-300 flex items-center justify-center absolute top-0 right-0 lg:right-4"
          onClick={() => {
            setIsMessageReplyFormShown(false);
          }}
        >
          <TbLetterX className="text-2xl" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {/* avatar */}
          <Image
            src={`/assets/imgs/avatar3.png`}
            alt="avatar"
            height={40}
            width={40}
          />
          {/* name and date */}
          <div className="flex flex-col items-start">
            <span className="text-sm text-dark-gray font-semibold">
              S. Sedky
            </span>
            <span className="text-sm italic text-gray-title">17.05.2024</span>
          </div>
        </div>
        <span className="text-sm text-gray-title">sameh.sedky@gmail.com</span>
      </div>

      {/* messageBox */}
      <form action="" method="post" className="space-y-4">
        {/* <div className="border border-gray-ine rounded-mg p-4 h-[300px] rounded-md text-lg leading-relaxed">
          message data
        </div> */}
        <textarea
          name="replyMessage"
          rows={6}
          className="border border-gray-ine rounded-mg p-4 w-full rounded-md text-lg leading-relaxed"
        ></textarea>
        <div className="flex items-center gap-4">
          <MessageActionButton
            title="Send"
            icon={<IoIosSend className="text-2xl" />}
          />
        </div>
      </form>
    </div>
  );
};

export default MessageReply;
