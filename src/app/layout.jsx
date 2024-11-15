import "@/styles/globals.css";
export const metadata = {
  title: {
    default: "Belhana with Sameh Sedky",
    title: "%s | Belhana with Sameh Sedky",
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
