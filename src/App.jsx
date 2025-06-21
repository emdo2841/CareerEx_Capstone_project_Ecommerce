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
import Checkout from "./pages/checkout";
import CheckoutSuccess from "./pages/Verify"
import Err from "./components/NetworkServerErr"
// import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductById";
import ProductsCategory from "./pages/categories";
import ProductsBrand from "./pages/Brand";
import FlashProducts from "./pages/flashdeals";

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
        <Route path="/brand/:id" element={<ProductsBrand />} />
        <Route path="/category/:id" element={<ProductsCategory />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/transact" element={<Checkout />} />
        <Route path="/verify" element={<CheckoutSuccess />} />
        <Route path="/flash-deals" element={<FlashProducts />} />
          
      </Routes>
      <Footer />

      {/* Error Boundary */}
    </>
  );
}

export default App;
