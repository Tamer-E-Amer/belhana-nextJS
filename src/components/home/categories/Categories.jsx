import { CategoryCard } from "@/components";
import { getCategories } from "@/lib/dataHandlers";
// const categories = [
//   {
//     id: 1,
//     title: "Meat",
//     img: "/assets/imgs/meat.png",
//   },
//   {
//     id: 2,
//     title: "Poultry",
//     img: "/assets/imgs/poultry.png",
//   },
//   {
//     id: 3,
//     title: "Fish",
//     img: "/assets/imgs/fish.png",
//   },
//   {
//     id: 4,
//     title: "Sweets",
//     img: "/assets/imgs/sweet.png",
//   },
//   {
//     id: 5,
//     title: "Stuffed food",
//     img: "/assets/imgs/stuffed.png",
//   },
//   {
//     id: 6,
//     title: "Soup",
//     img: "/assets/imgs/soup.png",
//   },
//   {
//     id: 7,
//     title: "Sandwitch",
//     img: "/assets/imgs/sandwitch.png",
//   },
//   {
//     id: 8,
//     title: "Rice",
//     img: "/assets/imgs/rice.png",
//   },
//   {
//     id: 9,
//     title: "Nodels",
//     img: "/assets/imgs/nodels.png",
//   },
//   {
//     id: 10,
//     title: "Pastry",
//     img: "/assets/imgs/pastry.png",
//   },
// ];

const Categories = async () => {
  const categories = await getCategories();
  const renderCategories = categories.map((cat) => (
    <div key={cat.id}>
      <CategoryCard img={cat.img} title={cat.title} slug={cat.slug} />
    </div>
  ));

  return (
    <>
      <section
        className="bg-radial-gradient from-dark-blue to-black  px-4 lg:px-0 py-8"
        id="categories"
      >
        <div className="container flex flex-col items-center justify-between gap-8">
          <p className="text-lg lg:text-xl text-white leading-relaxed lg:w-3/4  text-center">
            Our website offers wonderful recipes from various categories that
            you can enjoy with your family or even alone. I am pleased to have
            you choose one of the categories displayed in front of you, and all
            the recipes that fall under it will instantly appear. Enjoy your
            meal!
          </p>
          {/* caregory cards */}
          <div className="grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {renderCategories}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
