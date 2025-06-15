
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext"; // ✅ Import your cart context

const CartIcon = () => {
  const { cart } = useCart(); // ✅ Use cart from context

  // Calculate total item count (e.g., sum of quantities)
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative">
  <button
    aria-label="Shopping Cart"
    className="p-2 rounded-full text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-200 ease-in-out"
  >
    <ShoppingCart size={20} />
  </button>
      {itemCount > 0 && (
    
        <div
        class="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full h-6 w-6 flex items-center justify-center border-2 border-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] animate-pulse"
      >
        
          <div className="text-sm font-semibold">
            {itemCount > 99 ? "99+" : itemCount}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartIcon;
