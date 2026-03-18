import { createContext, useContext, useReducer } from 'react';

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let newItems;

      if (existingIndex >= 0) {
        newItems = state.items.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      return {
        items: newItems,
        totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
      };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(
        (item) => item.id !== action.payload
      );

      return {
        items: newItems,
        totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
      };
    }

    case 'INCREASE_QTY': {
        const newItems = state.items.map((item) =>
            item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return {
            items: newItems,
            totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
            totalPrice: newItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
            ),
        };
        }

        case 'DECREASE_QTY': {
        const newItems = state.items
            .map((item) =>
            item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0);

        return {
            items: newItems,
            totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
            totalPrice: newItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
            ),
        };
        }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
}

const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (product) =>
    dispatch({ type: 'ADD_ITEM', payload: product });

  const removeItem = (id) =>
    dispatch({ type: 'REMOVE_ITEM', payload: id });

  const clearCart = () =>
    dispatch({ type: 'CLEAR_CART' });

  const increaseQty = (id) =>
    dispatch({ type: 'INCREASE_QTY', payload: id });

  const decreaseQty = (id) =>
    dispatch({ type: 'DECREASE_QTY', payload: id });

  return (
    <CartContext.Provider
      value={{ ...state, addItem, removeItem, clearCart, increaseQty, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}