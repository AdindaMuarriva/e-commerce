import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header style={styles.header}>
      <Link to="/" style={styles.logo}>
        <h1>CBSE Store</h1>
      </Link>

      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/cart" style={styles.link}>
          Cart ({totalItems})
        </Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    background: '#1B4F72',
    color: 'white',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    textDecoration: 'none',
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
};