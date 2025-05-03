import dynamic from "next/dynamic";
import { Hero, BackToTopBtn } from "@/components";

// Data-Driven components
const Categories = dynamic(
  () => import("@/components").then((mod) => mod.Categories),
  { loading: () => <p>Loading .. please wait</p> }
);
const FeaturedRecipes = dynamic(
  () => import("@/components").then((mod) => mod.FeaturedRecipes),
  { loading: () => <p>Loading .. please wait</p> }
);

const About = dynamic(() => import("@/components").then((mod) => mod.About));
const Contact = dynamic(() =>
  import("@/components").then((mod) => mod.Contact)
);
const Testimonials = dynamic(() =>
  import("@/components").then((mod) => mod.Testimonials)
);
export default function Home() {
  return (
    <>
      <Hero />
      {/* <TestFetch /> */}
      <FeaturedRecipes />
      <Categories />
      <BackToTopBtn />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}
