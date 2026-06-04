import { create } from 'zustand';

const useCartStore = create((set) => ({
  cartItems: [],

  addToCart: (product) => set((state) => {
    const existingItem = state.cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      return {
        cartItems: state.cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    }
    return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
  }),

  // NEW: Remove an item completely
  removeFromCart: (productId) => set((state) => ({
    cartItems: state.cartItems.filter((item) => item.id !== productId)
  })),

  // NEW: Increase or decrease quantity
  updateQuantity: (productId, amount) => set((state) => ({
    cartItems: state.cartItems.map((item) => {
      if (item.id === productId) {
        const newQuantity = item.quantity + amount;
        // Ensure quantity never goes below 1
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 }; 
      }
      return item;
    })
  })),
  // NEW: Empty the cart entirely after checkout
  clearCart: () => set({ cartItems: [] }),
}));

export default useCartStore;