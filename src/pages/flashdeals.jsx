
import api from "../context/api";
import { useState, useEffect } from "react";
import {
  Link,
  useNavigate,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { useCart } from "../context/CartContext";
import {ArrowBigRight, ArrowBigLeft} from "lucide-react"
import { Bars } from "react-loading-icons";
import Err from "../components/NetworkServerErr";
import { useSearch } from "../context/SearchContext";
import ErrorBoundary from "../components/ErrorBoundary";
import "../styles/product.css";
import Collections from "../components/Collections";

const FlashProducts = ({ limit = 20 }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { addToCart } = useCart();
  
  
  const url = "/product";
  const { searchOpen } = useSearch();

  useEffect(() => {
    const product =  async () => {
      try {
        const response = await api.get(
            `/product/flash-sale?page=${page}&limit=${limit}`
          );
        setProducts(response.data.data || []);
        setTotalProducts(response.data.total || 0);
      } catch (error) {
        console.log(error);
        setError(error.response?.data?.message || error.message);
      } finally {
        setLoading(false);
      }
    };
    product();
  }, [limit, page, url]);

  if (loading) {
    return (
      <div className="flex justify-center gap-8">
        {!isHome && (
          <aside className="hidden md:block md:w-64 lg:w-75 min-h-screen p-8 mt-8 ">
            <div className="flex flex-col gap-4">
              <Collections
                url="/brand"
                label="Brands"
                displayKey="name"
                getItemUrl={(item) => `/brand/${item._id}`}
              />
              <Collections
                url="/category"
                label="Collection"
                displayKey="name"
                getItemUrl={(item) => `/category/${item._id}`}
              />
              <button
                className="border-none bg-white shadow-md text-lg font-medium text-gray-700"
                onClick={() => navigate("/deals")}
              >
                Deals
              </button>
            </div>
          </aside>
        )}
        <div className=" bg-white min-h-screen w-full">
          <div className="flex items-center justify-center h-screen">
            <Bars stroke="#000" height={60} width={60} />
          </div>
        </div>
      </div>
    );
  }

  if (error) return <Err url={url} />;

  const totalPages = Math.ceil(totalProducts / limit);

  return (
    <ErrorBoundary>
      <div className="relative">
        {/* Conditionally render blur overlay when search is open */}
        {searchOpen && (
          <div className="absolute inset-0 z-10 backdrop-blur-sm bg-white/10 pointer-events-none" />
        )}

        

       
        <div>
          <div className="flex justify-center gap-8 ">
            {/* Sidebar - Only show if not home */}
            {!isHome && (
              <aside className="hidden md:block fixed top-20 left-0 md:w-64 lg:w-75 bg-white min-h-screen p-8 shadow-lg z-30">
                <div className="flex flex-col gap-4">
                  <Collections
                    url="/brand"
                    label="Brands"
                    displayKey="name"
                    getItemUrl={(item) => `/brand/${item._id}`}
                  />
                  <Collections
                    url="/category"
                    label="Collection"
                    displayKey="name"
                    getItemUrl={(item) => `/category/${item._id}`}
                  />
                  <button
                    className="border-none bg-white shadow-md text-lg font-medium text-gray-700 cursor-deals"
                    onClick={() => navigate("/flash-deals")}
                  >
                    Deals
                  </button>
                </div>
              </aside>
            )}

            {/* Main content area */}
            <div
              className={`flex-1 w-full pl-6 ${
                !isHome ? "md:pl-64 lg:pl-[20rem]" : ""
              }`}
            >
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center bg-white min-h-40 w-[90%] sm:gap-2 sm:m-2 lg:gap-6 md:gap-6  lg:m-8 md:6">
                {products.length > 0 ? (
                  products.map((product) => (
                    <div key={product._id} className="shadow-md">
                      <Link to={`/product/${product._id}`}>
                        <li
                          id="scale-in-hover"
                          className="aspect-[5/5] w-full bg-white p-4"
                        >
                          <img
                            className="rounded-lg"
                            src={product.images[0]}
                            alt={product.name}
                          />
                          <p className="font-medium">
                            {product.name || "Unnamed Product"}
                          </p>
                          <div className="flex justify-start gap-2">
                            <p>₦{product.discountedPrice}</p>
                            <p className="line-through font-san">
                              ₦{product.price}
                            </p>
                          </div>
                        </li>
                      </Link>
                      <button
                        id="add-cart"
                        className="bg-black border-none text-[#796706] text-md p-1 m-1 rounded-lg cursor-pointer"
                        onClick={() => addToCart(product)}
                      >
                        Add to cart
                      </button>
                    </div>
                  ))
                ) : (
                  <li className="col-span-full text-center text-gray-500 text-lg">
                    {q ? "No products found." : "No products available."}
                  </li>
                )}
              </ul>
            </div>
          </div>
          {totalPages > 1 && (
            <nav aria-label="Pagination Navigation" className="flex justify-center gap-2 my-4">
              {page > 1 && (<button
                className="border-none rounded-md cursor-pointer text-md font-mono font-bold text-black p-2"
                onClick={() => setPage((prev) => prev - 1)}
              >
                <ArrowBigLeft />
              </button>)}
              
              {page < totalPages && (<button
                className="border-none rounded-md cursor-pointer text-md text-black p-2"
                
                onClick={() => setPage((prev) => prev + 1)}
              >
                <ArrowBigRight />
              </button>)}
            </nav>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default FlashProducts;
