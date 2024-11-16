"use client";
import { MdStar } from "react-icons/md";
import { GoPerson } from "react-icons/go";
// modal
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
const TestimonialCard = ({ data }) => {
  const dir = ["", "-"];
  const [selectedDir, setSelectedDir] = useState(dir[1]);

  useEffect(() => {
    // Any client-side logic that updates `selectedDir`
    const dirIndex = Math.floor(Math.random() * dir.length);
    setSelectedDir(dir[dirIndex]);
  }, []);

  // const selectedDir = dir[dirIndex];
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div
            className={`w-full lg:w-[360px] bg-white p-4 space-y-2 border-2 border-gray-200 hover:border-gray-400 hover:cursor-pointer ${
              selectedDir == "-" ? `lg:-rotate-6` : `lg:rotate-6`
            }`}
          >
            <p className="text-sm text-gray-500 leading-relaxed h-[96px]">
              {data.text}
            </p>
            <hr className="h-0.5 bg-gray-200" />
            {/* user */}
            <div className="flex items-center justify-between">
              {/* user data */}
              <div className="flex items-center gap-4">
                {/* avatar */}
                <div className="h-12 w-12 rounded-full border border-gray-400 flex items-center justify-center">
                  <GoPerson className="text-4xl text-gray-500" />
                </div>
                {/* name and date */}
                <div className="space-y-0">
                  <h3 className="text-lg font-semibold text-dark-gray">
                    {data.user.name}
                  </h3>
                  <h3 className="text-sm  text-gray-500">{data.user.date}</h3>
                </div>
              </div>
              {/* ratings */}
              <div className="flex items-center jystify-center gap-2">
                <MdStar className="text-xl text-yellow-600" />
                <MdStar className="text-xl text-yellow-600" />
                <MdStar className="text-xl text-yellow-600" />
                <MdStar className="text-xl text-yellow-600" />
                <MdStar className="text-xl text-yellow-600" />
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl flex items-center justify-center">
          <DialogHeader>
            <DialogTitle className="mb-2">Read the comment...</DialogTitle>
            <DialogDescription>
              <div
                className={`w-full  bg-white p-4 space-y-2 border-2 border-gray-200`}
              >
                <p className="text-lg text-gray-900 font-semibold leading-relaxed h-auto">
                  {data.text}
                </p>
                <hr className="h-0.5 bg-gray-200" />
                {/* user */}
                <div className="flex items-center justify-between">
                  {/* user data */}
                  <div className="flex items-center gap-4">
                    {/* avatar */}
                    <div className="h-12 w-12 rounded-full border border-gray-400 flex items-center justify-center">
                      <GoPerson className="text-4xl text-gray-500" />
                    </div>
                    {/* name and date */}
                    <div className="space-y-0">
                      <h3 className="text-lg font-semibold text-dark-gray">
                        {data.user.name}
                      </h3>
                      <h3 className="text-sm  text-gray-500">
                        {data.user.date}
                      </h3>
                    </div>
                  </div>
                  {/* ratings */}
                  <div className="flex items-center jystify-center gap-2">
                    <MdStar className="text-xl text-yellow-600" />
                    <MdStar className="text-xl text-yellow-600" />
                    <MdStar className="text-xl text-yellow-600" />
                    <MdStar className="text-xl text-yellow-600" />
                    <MdStar className="text-xl text-yellow-600" />
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TestimonialCard;
