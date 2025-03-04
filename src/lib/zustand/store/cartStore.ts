import { create } from "zustand";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => {
  // get cart from localStorage when init
  const storedCart = typeof window !== "undefined" ? localStorage.getItem("cart") : null;
  const initialCart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];

  return {
    cart: initialCart,
    addToCart: (product) =>
      set((state) => {
        console.log({product})
        const existingProduct = state.cart.find((item) => item.id === product.id);
        let updatedCart;

        if (existingProduct) {
          // if exist item, just increase quantity
          updatedCart = state.cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
          );
        } else {
          // if new item, add
          updatedCart = [...state.cart, { ...product }];
        }

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
      }),

    removeFromCart: (id) =>
      set((state) => {
        const updatedCart = state.cart.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
      }),

    clearCart: () => {
      localStorage.removeItem("cart");
      set({ cart: [] });
    },
  };
});
