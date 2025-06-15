// src/components/CartCount.js
import { useCart } from "../context/CartContext";


const CartCount = () => {
  const { cart } = useCart();
  return (
    <div className="relative">
      <p className="text-sm font-medium" >Cart: {cart.length}</p>
    </div>
  );
};

export default CartCount;
