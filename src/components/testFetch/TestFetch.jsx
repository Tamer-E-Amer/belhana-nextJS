import { getCategories } from "@/lib/dataHandlers";

const TestFetch = async () => {
  const categoryResp = await getCategories();
  //   console.log("categories:", categoryResp);
  const categories = categoryResp.map((cat) => (
    <div key={cat._id}>{cat.title}</div>
  ));
  return (
    <>
      <section
        id="contact"
        className="bg-radial-gradient from-left-contact-blue via-mid-contact-blue to-black  px-4 lg:px-0 py-8 text-white "
      >
        <h1>Categories</h1>
        <h2>{categories}</h2>
      </section>
    </>
  );
};

export default TestFetch;
