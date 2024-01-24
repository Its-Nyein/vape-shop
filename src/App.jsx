import "./App.css";
import BestDeals from "./components/BestDeals";
import Final from "./components/Final";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Program from "./components/Program";
import Released from "./components/Released";

function App() {
  return (
    <>
      <HeroSection />
      <BestDeals />
      <Program />
      <Released />
      <Final />
      <Footer />
    </>
  );
}

export default App;
