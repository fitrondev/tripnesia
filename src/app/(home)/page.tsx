import About from "@/components/layouts/About";
import Contact from "@/components/layouts/Contact";
import Destinations from "@/components/layouts/Destinations";
import Hero from "@/components/layouts/Hero";
import Package from "@/components/layouts/Package";
import Testimonials from "@/components/layouts/Testimonials";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Destinations />
      <Package />
      <Testimonials />
      <Contact />
    </main>
  );
};
export default Home;
