import bg from "../src/Asset/Bacground/bg1.jpg";
import "./App.css";
import Footer from "./Page1/Footer";
import Header from "./Page1/Header";
import Index from "./Page1/Index";
import Services from "./Page1/Services";
import Portofolio from "./Page2/Portofolio";

// import Portofolio from "./Page2/Portofolio";

function App() {
  return (
    <div
      className="bg-fixed bg-cover bg-center "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Header />
      <Index />
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
      <Services />
>>>>>>> c307d14ea2ffb530246d9e16c9d8a9afa28f4e28
=======
      <Services />
>>>>>>> 4da5642e04223af342e4b6d397fbabed398122d6
      <Portofolio />
      <Footer />
    </div>
  );
}

export default App;
