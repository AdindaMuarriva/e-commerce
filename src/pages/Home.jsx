import { useState, useEffect } from 'react';
import { getProducts, getCategories } from '../services/api';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const [productsData, categoriesData] = await Promise.all([
          getProducts(),
          getCategories(),
        ]);

        setProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

    const filteredProducts = products
    .filter((p) =>
        selectedCategory === 'all' ? true : p.category === selectedCategory
    )
    .filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Katalog Produk</h2>
      <SearchBar search={search} setSearch={setSearch} />

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setSelectedCategory('all')}>
          Semua
        </button>

        {categories.map((cat) => (
          <button key={cat} onClick={() => setSelectedCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      <div style={gridStyle}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '1.5rem',
};