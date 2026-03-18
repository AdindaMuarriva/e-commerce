import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, totalPrice, removeItem, clearCart, increaseQty, decreaseQty } = useCart();

  if (items.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <h2>Keranjang Kosong</h2>
        <p>Belum ada produk di keranjang.</p>
      </div>
    );
  }

  return (
    <div style={container}>
      <h2>Keranjang Belanja</h2>

      {items.map((item) => (
        <div key={item.id} style={itemStyle}>
          <img src={item.image} alt={item.title} style={imgStyle} />

          <div style={{ flex: 1 }}>
            <h4>{item.title}</h4>
            <p>
              ${item.price.toFixed(2)} x {item.quantity}
            </p>
          </div>

          <p>
            ${(item.price * item.quantity).toFixed(2)}
          </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <button onClick={() => decreaseQty(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => increaseQty(item.id)}>+</button>
        </div>
        
          <button onClick={() => removeItem(item.id)}>
            Hapus
          </button>
        </div>
      ))}

      <div style={{ textAlign: 'right' }}>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button onClick={clearCart}>Checkout</button>
      </div>
    </div>
  );
}

const container = {
  padding: '2rem',
  maxWidth: '800px',
  margin: '0 auto',
};

const itemStyle = {
  display: 'flex',
  gap: '1rem',
  padding: '1rem',
  borderBottom: '1px solid #eee',
};

const imgStyle = {
  width: '60px',
  height: '60px',
  objectFit: 'contain',
};