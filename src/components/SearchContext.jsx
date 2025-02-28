import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [search, setSearch] = useState("");

    return (
        <SearchContext.Provider value={{ results, setResults, search, setSearch }}>
            {children}
        </SearchContext.Provider>
    );
};