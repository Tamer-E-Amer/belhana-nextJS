"use client";
import { Checkbox } from "@/components/ui/checkbox";
const SideBarSpecItem = ({ label, id }) => {
  return (
    <div className="w-full bg-primary-orange/15 flex items-center justify-start gap-2 text-dark-gray  group">
      <Checkbox id={id} className="w-6 h-6" />
      <label
        htmlFor={id}
        className="text-lg group-hover:cursor-pointer group-hover:underline"
      >
        {label}
      </label>
    </div>
  );
};

export default SideBarSpecItem;
