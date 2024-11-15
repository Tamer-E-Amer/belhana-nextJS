import React from "react";

const SpecificationItem = ({ icon, title, value }) => {
  return (
    <div className="flex items-center justify-start md:justify-center gap-2  ">
      <span>{icon}</span>
      <span className="text-dark-gray text-lg font-semibold">{title}:</span>
      <span className="text-gray-title text-lg font-semibold">{value}</span>
    </div>
  );
};

export default SpecificationItem;
