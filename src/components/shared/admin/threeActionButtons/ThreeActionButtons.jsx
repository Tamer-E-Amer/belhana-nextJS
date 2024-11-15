/**
 * @description This component renders action buttons such as delete, edit, and Facebook
 * based on parameters. It's used in various components such as recipes or users.
 * @param {boolean} facebook - If true, displays the Facebook button.
 * @param {boolean} del - If true, displays the Delete button.
 * @param {boolean} edit - If true, displays the Edit button.
 */

import { FaFacebookF } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { TbLetterX } from "react-icons/tb";

const ThreeActionButtons = ({ facebook, del, edit }) => {
  return (
    <div className="flex items-center justify-center gap-2 ">
      {facebook && (
        <div className="w-6 h-6 border border-gray-400 text-center hover:cursor-pointer hover:border-dark-blue flex items-center justify-center">
          <FaFacebookF className="text-sm text-gray-text " />
        </div>
      )}
      {edit && (
        <div className="w-6 h-6 border border-gray-400 text-center hover:cursor-pointer hover:border-dark-blue flex items-center justify-center">
          <MdEdit className="text-lg text-gray-text " />
        </div>
      )}
      {del && (
        <div className="w-6 h-6 border border-gray-400 text-center hover:cursor-pointer hover:border-dark-blue flex items-center justify-center">
          <TbLetterX className="text-lg text-gray-text " />
        </div>
      )}
    </div>
  );
};

export default ThreeActionButtons;
