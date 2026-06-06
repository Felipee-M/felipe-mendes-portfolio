import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Tools } from "@/components/sections/Tools";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Tools />
      <Contact />
      <Footer />
    </main>
  );
}