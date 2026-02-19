import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/layout/ChatWidget";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Features } from "@/components/sections/Features";
import { Newsletter } from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
        <Newsletter />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
