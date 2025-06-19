// components/ProductsWrapper.jsx
import Product from "../pages/Product";
import useIsMobile from "../components/useIsMobile";

const ProductsWrapper = ({mobile, desktop}) => {
  const isMobile = useIsMobile(); // breakpoint defaults to 768px

  return <Product limit={isMobile ? mobile : desktop} />;
};

export default ProductsWrapper;
