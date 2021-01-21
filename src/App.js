import "./App.css";
import MainCard from "./components/MainCard";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import AboutUs from "./components/AboutUs";
import Avalibal from "./components/Avalibal";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <MainCard />
      <Categories />
      <Featured />
      <AboutUs />
      <Avalibal />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
