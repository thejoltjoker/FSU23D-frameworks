import { useEffect, useState } from "react";
import "./App.css";
import { ProductsContext } from "./components/ProductsContext";
import ProductList from "./components/ProductList";

interface ApiData {
  items: [];
}

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data: ApiData = await response.json();

        setProducts([...data.items]);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ProductsContext.Provider value={{ products, setProducts }}>
        <ProductList />
      </ProductsContext.Provider>
    </>
  );
}

export default App;
