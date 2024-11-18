"use client";
import Link from "next/link";
import SpecificationItem from "../specifications/SpecificationItem";
import { FaRegHeart, FaHeart, FaRegComment } from "react-icons/fa";
import { useState } from "react";

const LikesAndComments = () => {
  const [isLiked, setIsLiked] = useState(false);
  const makeLikes = () => {
    setIsLiked((prev) => !prev);
  };
  return (
    <div className="mx-2 my-8 flex items-center justify-start gap-2 lg:gap-12 flex-wrap">
      <div className="flex otems-center justify-center gap-2">
        {isLiked === true ? (
          <FaHeart
            className="text-2xl text-red-600 hover:cursor-pointer"
            onClick={makeLikes}
          />
        ) : (
          <FaRegHeart
            className="text-2xl hover:cursor-pointer"
            onClick={makeLikes}
          />
        )}
     
        <span className="text-sm text-gray-title font-bold">5525</span>
      </div>
      <SpecificationItem
        icon={<FaRegComment className="text-2xl text-gray-title" />}
        title={"Comments"}
        value={422}
      />
      <div className="flex items-center justify-center gap-2">
        <img src="/assets/icons/leave-comment-arrow.png" alt="arrow" />
        <Link href={"#"} className="hover:underline">
          <span className="text-gray-text text-lg">Leave a comment</span>
        </Link>
      </div>
    </div>
  );
};

export default LikesAndComments;
