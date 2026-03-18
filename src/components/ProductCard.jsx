import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.image} />

      <h3 style={styles.title}>
        {product.title.substring(0, 50)}...
      </h3>

      <p style={styles.price}>
        ${product.price.toFixed(2)}
      </p>

      <div style={styles.actions}>
        <Link to={`/product/${product.id}`} style={styles.detailBtn}>
          Detail
        </Link>

        <button onClick={() => addItem(product)} style={styles.cartBtn}>
          + Keranjang
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'contain',
  },
  title: {
    fontSize: '0.9rem',
    margin: '0.5rem 0',
    flex: 1,
  },
  price: {
    fontWeight: 'bold',
    color: '#E67E22',
  },
  actions: {
    display: 'flex',
    gap: '0.5rem',
  },
  detailBtn: {
    flex: 1,
    padding: '0.5rem',
    textAlign: 'center',
    background: '#EBF5FB',
    color: '#1B4F72',
    borderRadius: '4px',
    textDecoration: 'none',
  },
  cartBtn: {
    flex: 1,
    padding: '0.5rem',
    background: '#27AE60',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};