import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Cari produk..."
      value={keyword}
      onChange={handleChange}
    />
  );
};

export default SearchBar;