import { useParams, useNavigate, useLocation } from "react-router-dom";
import {  useEffect, useState } from "react";
import { useSearch } from "../context/SearchContext";
import { useCart } from "../context/CartContext";
import "../styles/header.css"
import Collections from "../components/Collections";
import { Bars } from "react-loading-icons";
import ErrorBoundary from "../components/ErrorBoundary";
import api from "../context/api";
import ProductsWrapper from "../components/ProductWrapper";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { searchOpen } = useSearch()
  const location = useLocation();
    const isHome = location.pathname === "/";

  const url = `/product/${id}`;
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
 
  const [loading, setLoading] = useState(true);
 
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/product/${id}`);
        setProduct(res.data.data);
        setSelectedImage(res.data.data.images?.[0] || null);
      } catch (err) {
        setError(err.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);
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
                    className="border-none bg-white shadow-md text-lg font-medium text-gray-700"
                    onClick={() => navigate("/deals")}
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
              <section className="bg-white w-full min-h-screen px-4 py-6">
                <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto">
                  {/* Image section */}
                  <div className="w-full lg:w-1/2 space-y-4">
                    <div className="bg-gray-100 rounded-lg flex items-center justify-center p-4">
                      <img
                        src={selectedImage}
                        alt={product.name}
                        className="object-contain max-h-[400px] w-full rounded-lg"
                      />
                    </div>

                    <div className="flex gap-2 overflow-x-auto">
                      {product.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${product.name} ${i + 1}`}
                          onClick={() => setSelectedImage(img)}
                          className={`w-24 h-24 object-cover cursor-pointer border-2 rounded-md ${
                            selectedImage === img
                              ? "border-black"
                              : "border-transparent"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Details section */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-4">
                    <h1 className="text-3xl font-mono font-bold">
                      {product.name}
                    </h1>
                    <p className="text-gray-600 font-mono">
                      {product.description}
                    </p>

                    <div className="flex gap-4 text-sm text-gray-700">
                      <p className="text-2xl font-mono font-semibold">
                        {product.category?.name}
                      </p>
                      <p className="text-2xl font-mono font-semibold">
                        {product.brand?.name}
                      </p>
                    </div>

                    <div className="flex gap-4 items-center">
                      <p className="text-xl text-green-600 font-bold">
                        ₦{product.discountedPrice}
                      </p>
                      <p className="line-through text-gray-400">
                        ₦{product.price}
                      </p>
                    </div>

                    <button
                      onClick={() => addToCart(product)}
                      className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 w-fit"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <ProductsWrapper mobile={4} desktop={8} />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ProductDetails;
