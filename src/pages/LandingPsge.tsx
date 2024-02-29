import Clients from "../components/landing/Clients";
import Contactus from "../components/landing/Contactus";
import Extension from "../components/landing/Extension";
import Footer from "../components/landing/Footer";
import HowItWorks from "../components/landing/HowItWorks";
import Pricing from "../components/landing/Pricing";
import Hero from "../components/landing/hero";
import Navbar from "../components/landing/navbar";

function LandingPage() {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 dark:border-gray-700">
      <Navbar />
      <Hero />
      <Clients />
      <HowItWorks />
      <Extension />
      <Pricing />
      <Contactus />
      <Footer />
    </div>
  );
}
export default LandingPage;
