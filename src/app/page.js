import Image from "next/image";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Bio />
      <Skills />
      <Footer />
    </main>
  );
}
