import { useSearch } from "../context/SearchContext";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import {useEffect, useRef} from "react"

const Search = () => {
  const { searchQuery, setSearchOpen, setSearchQuery } = useSearch();
  const inputRef = useRef(null);
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    setSearchOpen(false);
    setSearchQuery("");
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setSearchOpen]);

  // Close modal when clicking outside
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setSearchOpen(false);
    }
  };

  useEffect(() => {
    inputRef.current?.focus(); // 👈 2. Focus input on mount
  }, []);
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/20"
      onClick={handleOutsideClick}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-6 w-full h-40 max-w-md relative"
        onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to parent
      >
        <h2 className="text-lg font-semibold mb-4">Search</h2>
        <div className="relative w-full">
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSearch();
              }
            }}
            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Search products..."
          />
          <span
            onClick={handleSearch}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSearch();
              }
            }}
            role="button"
            tabIndex={0}
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
          >
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Search;