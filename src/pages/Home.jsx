import ProductsWrapper from "../components/ProductWrapper";
import { useSearch } from "../context/SearchContext";
import "../styles/home.css";
import {useNavigate} from "react-router-dom"

const Home = () => {
  const { searchOpen } = useSearch();
  const navigate = useNavigate()
  return (
    <div className="relative">
      {/* Conditionally render a blur overlay above <main> */}
      {searchOpen && (
        <div className="absolute inset-0 z-10 backdrop-blur-sm bg-white/10 pointer-events-none" />
      )}
      <main className="relative z-0 transition-all duration-300 min-h-screen px-4 mt-4 sm:px-6 lg:px-12 overflow-x-hidden">
        <div className="flex flex-col justify-center">
          {/* Responsive section */}
          <section className="flex flex-col md:flex-row justify-center gap-4">
            {/* First div: hidden on mobile, shown on md+ with button */}
            <div className="hidden md:flex w-full md:w-1/3 bg-white rounded-lg h-[85vh] items-center justify-start">
              <div className="flex flex-col items-center justify-start ">
                <h2 className="font-extrabold font-mono text-start text-3xl text-black text-wrap">
                  BOLD, BIGGER AND IMPACTFUL EXPERIENCE
                </h2>
                <p className="text-black text-start font-mono text-xl mt-1">
                  Accessories For Me
                </p>
                <button
                  className="font-bold text-2xl rounded-lg border-none cursor-pointer  mt-2 bg-[black] text-[#796706] px-8 py-2"
                  onClick={() => navigate("/product")}
                >
                  Shop now
                </button>
              </div>
            </div>

            {/* Second div: always shown, but button only on mobile (<md) */}
            <div
              id="main-bg"
              className="w-full md:w-2/3 border-none rounded-2xl h-[85vh] relative flex items-end justify-end p-20"
            >
              {/* Button visible only on mobile (<md) */}
              <button
                id="home-btn"
                className="md:hidden font-bold text-2xl rounded-md border-none cursor-pointer  bg-[black] text-[#796706] px-4 py-2"
                onClick={() => navigate("/product")}
              >
                Shop now
              </button>
            </div>
          </section>

          {/* Responsive grid */}
          <ProductsWrapper mobile={4} desktop={8} />
          <h2 className="text-black font-bold text-2xl text-center mt-5">
            Fast selling Collections
          </h2>
          <section className="w-full flex justify-center">
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 w-full gap-8 mt-8 m-4 p-2">
              <div id="apple" className="bg-gray-100 h-64 rounded-lg flex flex-col justify-center items-center font-bold">
                <h2 className="font-mono text-2xl text-center">
                  Apple Products
                </h2>
                <button
                  id="home-button"
                  className="font-bold text-2xl rounded-md border-none cursor-pointer mt-4 bg-[black] text-[#796706] px-4 py-2 "
                  onClick={() => navigate("/brand/67e25f272580c101f6e84e9e")}
                >
                  Shop
                </button>
              </div>
              <div id="samsung" className="bg-gray-100 h-64 rounded-lg flex flex-col justify-center items-center font-bold">
                <h2 className="font-mono text-2xl text-center">
                  Samsung Products
                </h2>
                <button
                  id="home-button"
                  className="font-bold text-2xl rounded-md border-none cursor-pointer mt-4 bg-[black] text-[#796706] px-4 py-2"
                  onClick={() => navigate("brand/67e25dad2580c101f6e84e92")}
                >
                  Shop
                </button>
              </div>
              <div id="hp" className="bg-gray-100 h-64 rounded-lg flex flex-col justify-center items-center font-bold">
                <h2 className="font-mono text-2xl text-center">
                  Hewlett-Packard Products
                </h2>
                <button
                  id="home-button"
                  className="font-bold text-2xl rounded-md border-none cursor-pointer mt-4 bg-[black] text-[#796706] px-4 py-2 "
                  onClick={() => navigate("/brand/67e25de02580c101f6e84e94")}
                >
                  Shop
                </button>
              </div>
              <div id="dell" className="bg-gray-100 h-64 rounded-lg flex flex-col justify-center items-center font-bold">
                <h2 className="font-mono text-2xl text-center">
                  Dell Products
                </h2>
                <button
                  id="home-button"
                  className="font-bold text-2xl rounded-md border-none cursor-pointer mt-4 bg-[black] text-[#796706] px-4 py-2"
                  onClick={() => navigate("brand/67e25e392580c101f6e84e96")}
                >
                  Shop
                </button>
              </div>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
