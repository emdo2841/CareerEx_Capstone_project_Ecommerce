
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import "../styles/header.css"
import { useSearch } from "../context/SearchContext";
import CartIcon from "./CartIcon"
import CartCount from "../utilities/cartCount"

const Header = () => {
  const buttons = [
    { name: "Shop", link: "/shop" },
    {name: "Products", link:"product"},
    { name: "Deals", link: "/hot-deals" },
    { name: "About", link: "/about" },
  ];
  const [menuOpen, setMenuOpen] = useState(false)
  const {  setSearchOpen } = useSearch();
  const navigate = useNavigate();

  return (
    <header className="text-gray-800 bg-white py-4 px-8 sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between">
        <Link to={"/"}>
          <h1 className="font-serif text-2xl font-bold bg-gradient-to-r from-[#FFD700] to-black bg-clip-text text-transparent">
            <span className="text-4xl">EJ</span>{" "}
            <span className="text-sm text-gray-700">premium</span>
          </h1>
        </Link>

        <nav className="flex items-center space-x-16">
          <div className="hidden md:flex lg:flex items-center space-x-6">
            {buttons.map((button) => (
              <button
                id="header-button"
                key={button.name}
                onClick={() => navigate(button.link)}
                className="bg-white text-black font-semibold  px-4 py-2 rounded-md border-none cursor-pointer"
              >
                {button.name}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-end space-x-4">
            <Search
              id="search"
              className="w-6 h-6 text-black cursor-pointer"
              onClick={() => setSearchOpen(true)}
            />
            <button
              id="cart-button"
              onClick={() => navigate("/cart")}
              className="bg-white text-black font-semibold  rounded-md px-4 py-2  border-none cursor-pointer "
            >
              <CartIcon size={24} itemCount={<CartCount />} />
            </button>
            {/* mobile navigation */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black md:hidden border-none"
            >
              {menuOpen ? (
                <X className="cursor-pointer" size={22} />
              ) : (
                <Menu className="cursor-pointer" size={22} />
              )}
            </button>
          </div>
        </nav>
      </div>
      {menuOpen && (
        <nav className="lg:hidden md:hidden bg-gray-100 pb-4 space-x-2 m-2 absolute top-16 left-0 w-full shadow-lg transition-transform duration-300 ease-in-out transform translate-y-0 z-[9999]">
          {buttons.map((button) => (
            <Link
              key={button.name}
              to={button.link}
              onClick={() => setMenuOpen(false)}
              className="block py-2 px-4 mt-2 border-none text-black cursor-pointer font-semibold  w-full"
            >
              {button.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
