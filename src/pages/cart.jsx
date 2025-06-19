

// import React from "react";
// import { useCart } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();
//   const navigate = useNavigate();

//   if (cart.length === 0) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p className="text-xl">Your cart is empty</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col space-y-4 p-4 h-screen">
//       {cart.map((item) => (
//         <div
//           key={item._id}
//           className="flex justify-between items-center w-full p-2 border rounded-md"
//         >
//           <div>
//             <p className="font-bold">{item.name}</p>
//             <p className="text-gray-600">
//               NGN {item.discountedPrice} x {item.quantity}
//             </p>
//           </div>
//           <div className="flex items-center space-x-2">
//             <button
//               className="px-2 py-1 text-sm border rounded disabled:opacity-50"
//               onClick={() => updateQuantity(item._id, item.quantity - 1)}
//               disabled={item.quantity <= 1}
//             >
//               -
//             </button>
//             <span>{item.quantity}</span>
//             <button
//               className="px-2 py-1 text-sm border rounded"
//               onClick={() => updateQuantity(item._id, item.quantity + 1)}
//             >
//               +
//             </button>
//             <button
//               className="px-2 py-1 text-sm bg-red-500 text-white rounded"
//               onClick={() => removeFromCart(item._id)}
//             >
//               Remove
//             </button>
//           </div>
//         </div>
//       ))}

//       <p className="text-lg font-bold">Total: NGN {getTotalPrice()}</p>
//       <button
//         className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
//         onClick={() => navigate(`/transact`)}
//       >
//         Checkout
//       </button>
//     </div>
//   );
// };

// export default Cart;
import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/header.css"

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <p className="text-xl text-gray-800">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <h2 className="text-3xl font-medium text-black mb-6">Your Cart</h2>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center p-4 rounded-lg shadow-md border border-gray-100 bg-white"
          >
            <div>
              <p className="font-semibold text-gray-900">{item.name}</p>
              <p className="text-gray-600 text-sm">
                NGN {item.discountedPrice} × {item.quantity}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1 text-sm border rounded-md text-black border-gray-300 disabled:opacity-50"
                onClick={() => updateQuantity(item._id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span className="px-2 font-medium text-black">
                {item.quantity}
              </span>
              <button
                className="px-3 py-1 text-sm border rounded-md text-black border-gray-300"
                onClick={() => updateQuantity(item._id, item.quantity + 1)}
              >
                +
              </button>
              <button
                className="px-3 py-1 text-sm bg-red-500 text-white rounded-md"
                onClick={() => removeFromCart(item._id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <p className="text-lg font-bold text-black">
          Total: NGN {getTotalPrice()}
        </p>
        <button id="header-button"
          className="px-5 py-2 bg-black text-[#796706] font-medium rounded-md hover:bg-gray-900"
          onClick={() => navigate(`/transact`)}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
