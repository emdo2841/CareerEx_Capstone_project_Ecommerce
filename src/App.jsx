import Header from "./components/Header";
import { useSearch } from "./context/SearchContext";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import Products from "./pages/Product";
import Search from "./components/Search";

import Err from "./components/NetworkServerErr"
// import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";

function App() {
  const { searchOpen } =
    useSearch();
  const navigate = useNavigate();
 

  return (
    <>
      <Header />

    

      {/* Modal stays on top */}
      {searchOpen && (
        <Search />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/search" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
