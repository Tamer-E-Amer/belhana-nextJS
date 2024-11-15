import { GoPerson } from "react-icons/go";

const CommentCard = () => {
  return (
    <div className={"my-4"}>
      {/* avatar and name*/}
      <div className="flex items-center gap-4">
        {/* avatar */}
        <div className="h-8 w-8 rounded-full border border-gray-400 flex items-center justify-center">
          <GoPerson className="text-4xl text-gray-500" />
        </div>
        {/* name and date */}
        <div className="space-y-0">
          <h3 className="text-lg font-semibold text-dark-gray">Tamer A.</h3>
          <h3 className="text-sm  text-gray-500 italic">12-04-2024</h3>
        </div>
      </div>
      {/* comment text */}
      <p className={"text-lg text-gray-text pl-12 pt-2 leading-relaxed"}>
        Sameh, you are a genius in the kitchen! My husband keeps joking that you
        are the reason he is had to buy new pants. We just can not stop eating
        your amazing creations!
      </p>
    </div>
  );
};

export default CommentCard;
