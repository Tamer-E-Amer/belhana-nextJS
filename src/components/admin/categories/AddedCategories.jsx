import { RecentAddedItem } from "@/components";
import { getCategories } from "@/lib/dataHandlers";

const AddedCategories = async () => {
  const categoriesData = await getCategories();
  const categories = categoriesData.map((cat) => (
    <RecentAddedItem key={cat.id} data={cat} type="category" />
  ));
  return <div className="space-y-4 px-4  w-full ">{categories}</div>;
};

export default AddedCategories;
