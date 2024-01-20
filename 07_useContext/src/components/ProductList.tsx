import { useProductsContext } from "./ProductsContext";
const ProductList = () => {
  const { products } = useProductsContext();
  return <div>{products}</div>;
};
export default ProductList;
