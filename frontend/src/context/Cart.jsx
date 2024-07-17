import { createContext, useContext, useState } from "react";

const CartDisplayContext = createContext();

export const useCartDisplayContext = () => useContext(CartDisplayContext);

export default function CartDisplayProvider({ children }) {
  const [cartDisplay, setCartDisplay] = useState(false);

  return (
    <CartDisplayContext.Provider value={{ cartDisplay, setCartDisplay }}>
      {children}
    </CartDisplayContext.Provider>
  );
}
