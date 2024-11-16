import "@/styles/globals.css";
import { Navbar, Footer } from "@/components";
export const metadata = {
  title: {
    default: "Belhana with Sameh Sedky",
    template: "%s | Belhana with Sameh Sedky",
  },
  description: "Belhana web site is a site based on the Facebook page called Belhana welshiftishy to archive and manage the recipe in this page ",
};

export default function BelhanaLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
