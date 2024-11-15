import Link from "next/link";
import { linkItems } from "./links";
const MobileMenu = ({onClickHandler}) => {
  const links = linkItems.map((link) => (
    <Link
      href={`${link.href}`}
      className="py-2 text-lg text-center cursor-pointer hover:bg-primary-orange"
      key={link.id}
      onClick={onClickHandler}
    >
      {link.title}
    </Link>
  ));
  return (
    <>
      <div className="w-full h-[calc(100vh-60px)] bg-radial-gradient to-black  from-dark-blue absolute top-[52px] right-0 lg:hidden  flex flex-col z-50">
        {links}
      </div>
    </>
  );
};

export default MobileMenu;
