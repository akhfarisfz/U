import bg from "../src/Asset/Bacground/bg1.jpg";
import "./App.css";
import Footer from "./Page1/Footer";
import Header from "./Page1/Header";
import Index from "./Page1/Index";
import Portofolio from "./Page2/Portofolio";

function App() {
  return (
    <div
      className="bg-fixed bg-cover bg-center "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Header />
      <Index />
      <Portofolio />
      <Footer />
    </div>
  );
}

export default App;
