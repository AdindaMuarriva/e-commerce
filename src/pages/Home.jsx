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
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">🛍️ E-Commerce</h1>

      <SearchBar onSearch={handleSearch} />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4"
          >
            <img
              src={item.image}
              className="h-40 w-full object-cover rounded-xl"
            />

            <p className="text-xs text-green-500">Stock: {item.stock}</p>
            <h3 className="mt-3 font-semibold text-lg">{item.name}</h3>
            <p className="text-xs text-gray-400">{item.brand}</p>
            
            <p className="text-blue-600 font-bold">
              Rp {item.price.toLocaleString()}
            </p>

            <p className="text-yellow-500 text-sm">⭐ {item.rating}</p>

            <Link to={`/product/${item.id}`}>
              <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600">
                Lihat Detail
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;