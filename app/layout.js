import Navbar from "@/components/common/Navbar";
import "./globals.css";
import { Catamaran, Roboto } from "next/font/google"; // Import both fonts
import localFont from "next/font/local";
// Configure the local font
const myLocalFont = localFont({
  src: [
    {
      path: "../public/fonts/SourceSansPro-Semibold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/SourceSansPro-Bold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-sspro", // Define a CSS variable for the local font
});
const catamaran = Catamaran({ subsets: ["latin"] });

export const metadata = {
  title: "Cenith Bag Store",
  description:
    "Secure and reliable bag storage solutions for your peace of mind.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${catamaran.className} ${myLocalFont.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
