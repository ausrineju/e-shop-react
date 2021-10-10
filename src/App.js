import "./App.css";
import Header from "./Header/Header.js";
import Carousel from "./Slider/Slider.js";
import ProductsList from "./Products/ProductList.js";
import Footer from "./Footer/Footer.js";

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <ProductsList />
      <Footer />
    </div>
  );
}

export default App;
