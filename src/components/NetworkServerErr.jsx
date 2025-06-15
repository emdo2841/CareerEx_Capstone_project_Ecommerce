import { useNavigate } from "react-router-dom";
import '../styles/err.css'

const Err = ({ url }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-140 bg-white">
      <div className="bg-gray-100 shadow-lg rounded-xl p-6 w-[340px] text-center">
        <p className="text-black font-sans mb-4">
          Oops! Something went wrong... please try again.
        </p>
        <button
          id="err-btn"
          className="px-4 py-2 rounded-lg bg-[#796706] text-black cursor-pointer hover:bg-yellow-400"
          onClick={() => navigate(url)}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Err;
