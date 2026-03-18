import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [filtered, setFiltered] = useState(products);

  const handleSearch = (keyword) => {
    const result = products.filter((item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFiltered(result);
  };

  return (
    <div>
      <h1>Home</h1>

      <SearchBar onSearch={handleSearch} />

      {filtered.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <Link to={`/product/${item.id}`}>Detail</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;