import { useState, useMemo, useCallback } from "react";

export function useCart() {
  const [cart, setCart] = useState([]);

  const total = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart],
  );

  const addToCart = useCallback(product => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback(productId => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item,
      ),
    );
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    total,
  };
}
