import "./globals.css"

import { Nav } from "./_components/nav";
import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Skills } from "./_components/skills";
import { Projects } from "./_components/projects";
import { Carousel } from "./_components/sub_components/carousel";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <div className="w-full">

        {/* navegation */}
        <Nav />

        {/* introduction */}
        <Hero />

        {/* about */}
        <About />

        {/* skills */}
        <Skills />

        {/* projects */}
        <Projects />

        <Carousel />

        {/* footer */}
        <Footer />
   
    </div>      

  );

}
