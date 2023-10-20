import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Details from "./Components/Details/Details";
import Navbarsection from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Shop from "./Components/Shop/Shop";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbarsection />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/shop/:id" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
