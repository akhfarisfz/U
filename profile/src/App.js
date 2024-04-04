import bg from "../src/Asset/Bacground/bg1.jpg";
import "./App.css";
<<<<<<< Updated upstream
import Footer from "./Page1/Footer";
import Header from "./Page1/Header";
import Index from "./Page1/Index";
import Portofolio from "./Page2/Portofolio";
=======
import Header from "./Page1/Header";
import Index from "./Page1/Index";
// import Portofolio from "./Page2/Portofolio";
>>>>>>> Stashed changes

function App() {
  return (
    <div
      className="bg-fixed bg-cover bg-center "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Header />
      <Index />
<<<<<<< Updated upstream
      <Portofolio />
      <Footer />
=======
      {/* <Portofolio /> */}
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
