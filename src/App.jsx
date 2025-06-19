import Header from "./components/Header";
import { useSearch } from "./context/SearchContext";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import Products from "./pages/Product";
import Cart from "./pages/cart";
import Search from "./components/Search";
import Footer from "./components/Footer";
import ErrorPage from "./pages/Error";
import VoiceScreenshot from "./components/VoiceScreenShoot"


import Err from "./components/NetworkServerErr"
// import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductById";

function App() {
  const { searchOpen } =
    useSearch();
  const navigate = useNavigate();
 

  return (
    <>
      <VoiceScreenshot triggerKeyword="take screenshot" />
      <Header />

      {/* Modal stays on top */}
      {searchOpen && <Search />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/search" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />

      {/* Error Boundary */}
    </>
  );
}

export default App;
