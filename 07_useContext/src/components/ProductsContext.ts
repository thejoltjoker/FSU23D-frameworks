import { createContext, useContext } from "react";
import { Product } from "../models/Product";
export type ProductsContent = {
  products: Product[];
  setProducts: (p: []) => void;
};
export const ProductsContext = createContext<ProductsContent>({
  products: [],
  setProducts: () => {},
});
export const useProductsContext = () => useContext(ProductsContext);
