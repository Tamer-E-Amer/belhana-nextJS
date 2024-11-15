import Link from "next/link";

export const linkItems = [
  {
    id: 1,
    title: "Home",
    href: "/belhana",
  },
  {
    id: 2,
    title: "Recipes",
    href: "/belhana#recipes",
  },
  {
    id: 3,
    title: "About",
    href: "/belhana#about",
  },
  {
    id: 4,
    title: "Categories",
    href: "/belhana#categories",
  },
  // {
  //   id: 5,
  //   title: "In Germany",
  //   href: "/in-germany",
  // },
  {
    id: 6,
    title: "Testimonials",
    href: "/belhana#testimonials",
  },
  {
    id: 7,
    title: "Contact me",
    href: "/belhana#contact",
  },
];

const links = () => {
  const renderItems = linkItems.map((link) => (
    <Link
      key={link.id}
      className="h-[60px] xl:h-[126px] w-[130px] hidden lg:flex items-center justify-center cursor-pointer hover:bg-primary-orange transition duration-300  "
      href={link.href}
    >
      {link.title}
    </Link>
  ));
  return <div className="flex items-center justify-start ">{renderItems}</div>;
};

export default links;
