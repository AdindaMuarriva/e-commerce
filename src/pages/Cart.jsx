import { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Laptop", quantity: 1 }
  ]);

  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  return (
    <div>
      <h1>Cart</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQty(item.id)}>+</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;