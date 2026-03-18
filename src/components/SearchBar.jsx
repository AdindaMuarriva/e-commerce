export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Cari produk..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        padding: '0.5rem 1rem',
        width: '100%',
        maxWidth: '300px',
        marginBottom: '1rem',
        borderRadius: '20px',
        border: '1px solid #ccc',
      }}
    />
  );
}