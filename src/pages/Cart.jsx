import { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "MacBook Pro M3",
      price: 25000000,
      quantity: 1,
      image: "/images/macbook-pro-m3.jpg"
    }
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

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 Cart</h1>

      <div className="grid md:grid-cols-3 gap-6">
        
        {/* LIST */}
        <div className="md:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow flex items-center gap-4"
            >
              <img
                src={item.image}
                className="w-24 h-24 object-cover rounded"
              />

              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-blue-600">
                  Rp {item.price.toLocaleString()}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="bg-gray-200 px-3 py-1 rounded"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SUMMARY */}
        <div className="bg-white p-6 rounded-xl shadow h-fit">
          <h2 className="font-bold text-lg mb-3">Ringkasan</h2>

          <p className="mb-2">
            Total:
          </p>

          <p className="text-xl font-bold text-blue-600">
            Rp {total.toLocaleString()}
          </p>

          <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;