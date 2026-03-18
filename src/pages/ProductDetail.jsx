import { useParams } from "react-router-dom";
import products from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === parseInt(id)
  );

  if (!product) return <h2>Produk tidak ditemukan</h2>;

  return (
    <div>
      <h1>Product Detail</h1>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;