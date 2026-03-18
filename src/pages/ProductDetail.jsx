import { useParams } from "react-router-dom";
import products from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === parseInt(id)
  );

  if (!product) return <h2>Produk tidak ditemukan</h2>;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white rounded-2xl shadow p-6 grid md:grid-cols-2 gap-6">
        
        {/* IMAGE */}
        <img
          src={product.image}
          className="w-full h-[300px] object-cover rounded-xl"
        />

        {/* INFO */}
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>

          <p className="text-yellow-500 mt-1">⭐ {product.rating}</p>

          <p className="text-2xl text-blue-600 font-semibold mt-2">
            Rp {product.price.toLocaleString()}
          </p>

          <p className="text-gray-600 mt-3">
            {product.description}
          </p>

          {/* META */}
          <div className="mt-4 space-y-1 text-sm">
            <p><b>Brand:</b> {product.brand}</p>
            <p><b>Category:</b> {product.category}</p>
            <p><b>Stock:</b> {product.stock}</p>
          </div>

          {/* BUTTON */}
          <button className="mt-5 w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition">
            🛒 Add to Cart
          </button>
        </div>
      </div>

      {/* SPECS */}
      <div className="bg-white mt-6 p-6 rounded-2xl shadow">
        <h2 className="font-bold text-lg mb-3">Spesifikasi</h2>

        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <p><b>Processor:</b> {product.specs.processor}</p>
          <p><b>RAM:</b> {product.specs.ram}</p>
          <p><b>Storage:</b> {product.specs.storage}</p>
          <p><b>Display:</b> {product.specs.display}</p>
          <p><b>Battery:</b> {product.specs.battery}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;