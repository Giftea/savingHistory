import Features from "../components/Features";
import FuturePlan from "../components/HomePage/Future-Plan";
import Hero from "../components/HomePage/Hero";
import Newsletter from "../components/Newsletter";
import Stats from "../components/HomePage/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <FuturePlan />
      <Newsletter />
    </>
  );
}
