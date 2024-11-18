"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const SideBarMenuItem = ({ data }) => {
  const { title, img, slug } = data;
  const params = useParams();

  return (
    <>
      <Link
        href={`${
          Object.keys(params).length === 0 ? `categories/${slug}` : slug
        }`}
      >
        <div className="flex items-center justify-start gap-2 group cursor-pointer w-[200px]">
          <Image
            src={`/assets/icons/optimized/${img}`}
            alt={title}
            width={30}
            height={30}
          />
          <span className="inline-block text-dark-gray group-hover:underline ">
            {title}
          </span>
        </div>
      </Link>
    </>
  );
};

export default SideBarMenuItem;
