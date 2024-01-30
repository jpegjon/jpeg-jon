import localFont from "next/font/local";
import "./globals.css";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Jon Tsiknias — Developer",
  description: "Developer and project manager from Los Angeles.",
};

// font-extralight: 200
// font-light: 300
// font-normal: 400
// font-semibold: 600

const unica77 = localFont({
  src: [
    {
      path: "./fonts/Unica77LLWeb-Thin.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Unica77LLWeb-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Unica77LLWeb-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Unica77LLWeb-Bold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html className={unica77.className} lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
