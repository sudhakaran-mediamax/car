import "./App.scss";
import Cars from "./components/Cars/Cars";
import Counter from "./components/counter/Counter";
import Demo from "./components/demo/Demo";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Offers from "./components/offers/Offers";
import Popular from "./components/popular/Popular";
import Services from "./components/service/Services";
import Hero from "./layouts/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Cars />
      <Services />
      <Offers />
      <Popular />
      <Demo />
      <Counter />
      <Footer />
    </>
  );
}

export default App;
