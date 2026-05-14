import HeroSection from "./sections/HeroSection";
import CategorySection from "/src/components/ui/CategorySection";
import PopularCourses from "./sections/PopularCourses";
import WhyUs from "./sections/WhyUs";
import BestInstructors from "./sections/BestInstructors";
import Testimonials from "./sections/Testimonials";
import Pricing from "./sections/Pricing";
import CallToAction from "./sections/CallToAction";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <CategorySection />
      <PopularCourses />
      <WhyUs />
      <BestInstructors />
      <Testimonials />
      <Pricing />
      <CallToAction />
    </main>
  );
};
export default Home;
