import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 mb-12 text-yellow-950 bg-light">
      <Hero />
      {/* <MoreNews /> */}
    </main>
  );
}
