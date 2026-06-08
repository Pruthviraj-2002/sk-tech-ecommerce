import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  // Initial empty cart
  cartItems: [],

  // Add a product (or increase quantity if it's already there)
  addToCart: (product) => {
    const items = get().cartItems;
    const existingItem = items.find((item) => item.id === product.id);

    if (existingItem) {
      set({
        cartItems: items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      });
    } else {
      set({ cartItems: [...items, { ...product, quantity: 1 }] });
    }
  },

  // Remove a specific item entirely
  removeFromCart: (id) => {
    set({ cartItems: get().cartItems.filter((item) => item.id !== id) });
  },

  // Increase or decrease quantity on the Cart page
  updateQuantity: (id, change) => {
    set({
      cartItems: get().cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          // Prevent dropping below 1 item (use the trash can to remove)
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
        }
        return item;
      }),
    });
  },

  // Empty the cart (used on successful checkout)
  clearCart: () => set({ cartItems: [] }),
}));

export default useCartStore;