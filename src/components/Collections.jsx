// import { useState, useRef, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom"
// import api from "../context/api";

// export default function Collections({url}) {
//   const [open, setOpen] = useState(false);
//   const menuRef = useRef();
//   const [brands, setBrands] = useState([])
//   const [error, setError] = useState('')
//   const navigate = useNavigate()

//   useEffect(() => {
//     const fetchBrands = async () => {
//       try {
//         const res = await api.get(
//           url || "/brand", label = "Collections" 
//         );
//         setBrands(res.data.data || []);
//       } catch (err) {
//         console.error("Error fetching brands:", err);
//         setError(err.message || "Failed to fetch brands");
//       }
//     };

//     fetchBrands();

//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);
  

//   return (
//     <div className="relative inline-block text-left" ref={menuRef}>
//       <button
//         onClick={() => setOpen(!open)}
//         className="inline-flex justify-center w-full rounded-md border-none shadow-sm mt-4 px-4 py-2 bg-white text-lg font-medium text-gray-700 hover:bg-gray-50"
//       >
//         {label}
//         <svg
//           className="-mr-1 ml-2 h-5 w-5"
//           fill="none"
//           viewBox="0 0 20 20"
//           stroke="currentColor"
//         >
//           <path d="M5 8l5 5 5-5" />
//         </svg>
//       </button>

//       {/* Changed from absolute to relative */}
//       {open && (
//         <div className="mt-2 w-60 rounded-md shadow-md bg-white border border-gray-200 z-10">
//           <div className="py-1">
//             {brands.length > 0 ? (
//               brands.map((brand) => (
//                 <button
//                   key={brand._id}
//                   onClick={() => navigate(`/brand/${brand._id}`)}
//                   className="border-none w-full text-left px-4 py-2 text-sm text-gray-700 shadow-xs m-1 cursor-pointer"
//                 >
//                   {brand.name}
//                 </button>
//               ))
//             ) : (
//               < div className="px-4 py-2 text-sm text-gray-500">
//                 {error || "No brands available"}
//               </div>
//             )}

          
          
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../context/api";

export default function Collections({
  url,
  label = "Collections",
  displayKey = "name",
  getItemUrl,
}) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await api.get(url || "/brand");
        setItems(res.data.data || []);
      } catch (err) {
        console.error("Error fetching items:", err);
        setError(err.message || "Failed to fetch items");
      }
    };

    fetchItems();

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [url]);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex justify-center w-full rounded-md border-none shadow-sm mt-14 px-4 py-2 bg-white text-lg font-medium text-gray-700 hover:bg-gray-50"
      >
        {label}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path d="M5 8l5 5 5-5" />
        </svg>
      </button>

      {open && (
        <div className="mt-2 w-60 rounded-md shadow-md bg-white border border-gray-200 z-10">
          <div className="py-1">
            {items.length > 0 ? (
              items.map((item) => (
                <button
                  key={item._id}
                  onClick={() => navigate(getItemUrl(item))}
                  className="border-none w-full text-left px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                >
                  {item[displayKey]}
                </button>
              ))
            ) : (
              <div className="px-4 py-2 text-sm text-gray-500">
                {error || "No items available"}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
