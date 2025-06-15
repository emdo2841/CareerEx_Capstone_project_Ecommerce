import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider
      value={{ searchOpen, setSearchOpen, searchQuery, setSearchQuery }}
    >
      {children}
    </SearchContext.Provider>
  );
};
