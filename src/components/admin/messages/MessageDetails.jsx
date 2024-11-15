import { MessageActionButton } from "@/components";
import Image from "next/image";
import { CgMailReply } from "react-icons/cg";
import { MdAdd } from "react-icons/md";
import { TbLetterX } from "react-icons/tb";
import { MessageReplyFormContext } from "@/contexts/messageReplyFormViewContext";
import { useContext } from "react";
const MessageDetails = () => {
  const { isMessageReplyFormShown, setIsMessageReplyFormShown } = useContext(
    MessageReplyFormContext
  );

  return (
    <div className="space-y-4 bg-white rounded-md px-4 py-8  lg:p-8 ">
      {/* Header */}
      <h1 className="text-3xl xl:text-4xl text-dark-gray font-semibold text-center">
        Recipe to make PIZZA
      </h1>
      {/* user */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {/* avatar */}
          <Image
            src={`/assets/imgs/avatar.png`}
            alt="avatar"
            height={40}
            width={40}
          />
          {/* name and date */}
          <div className="flex flex-col items-start">
            <span className="text-sm text-dark-gray font-semibold">T.Amer</span>
            <span className="text-sm italic text-gray-title">11.05.2024</span>
          </div>
        </div>
        <span className="text-sm text-gray-title">test.email@gmail.com</span>
      </div>
      {/* messageBox */}
      <div className="border border-gray-ine rounded-mg p-4 h-[300px] rounded-md text-lg leading-relaxed">
        message data
      </div>
      {/* message Action buttons */}
      <div className="flex items-center gap-4 flex-wrap">
        <MessageActionButton
          title="Reply"
          isDefault={true}
          icon={<CgMailReply className="text-2xl" />}
          onClick={() => {
            setIsMessageReplyFormShown(true);
          }}
        />
        <MessageActionButton
          title="Add to Testimonials"
          icon={<MdAdd className="text-2xl" />}
        />
        <MessageActionButton
          title="Delete"
          icon={<TbLetterX className="text-2xl text-red-600" />}
        />
      </div>
    </div>
  );
};

export default MessageDetails;
