import Featured from "./Components/FeaturedSection";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import LatestWork from "./Components/LatestWork";
import Marketing from "./Components/MarketingSection";
import Nav from "./Components/Navbar";
import Testimonials from "./Components/Testimonials";
import WhyUS from "./Components/WhyUs";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <GlobalStyles />
      <Nav />
      <Hero />
      <Featured />
      <Marketing />
      <WhyUS />
      <LatestWork />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
