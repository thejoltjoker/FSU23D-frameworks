import React from "react";
import { useEffect, useState } from "react";
import { ProductList } from "./ProductList";
import { ProductsContext } from "./ProductsContext";

function ProductPage() {
  const [products, setProducts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <ProductsContext.Provider value={{ products }}>
      <ProductList products={products} />
    </ProductsContext.Provider>
  );
}
export default ProductPage;
