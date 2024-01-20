import React from "react";
import { ProductsContext } from "./ProductsContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const ProductList = () => {
  const productData = useContext(ProductsContext);
  const products = productData.products;
  const [productList, setProductList] = useState();

  // useEffect(() => {
  //   setProductList(
  //     <div className="flex flex-col gap-4 p-4">
  //       {products.items?.map((product) => (
  //         <div
  //           key={product.id}
  //           className="flex bg-white rounded-lg p-2 flex-col shadow-md"
  //         >
  //           <h3 className="font-bold text-2xl">{product.name}</h3>
  //           <p>
  //             <span className="text-slate-400">Brand: </span>
  //             {product.brand}
  //           </p>
  //           <p>
  //             <span className="text-slate-400">Color: </span>
  //             {product.color}
  //           </p>

  //           <p className="font-bold text-lg">
  //             <span className="text-slate-500">Price: </span>
  //             {product.price}
  //           </p>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }, [productData]);
  // return <> {productList}</>;

  return (
    <div className="flex flex-col gap-4 p-4">
      <img src="http://placehold.it/200" alt="" />
      {products.items?.map((product) => (
        <div
          key={product.id}
          className="flex bg-white rounded-lg p-2 flex-col shadow-md"
        >
          <h3 className="font-bold text-2xl">{product.name}</h3>
          <p>
            <span className="text-slate-400">Brand: </span>
            {product.brand}
          </p>
          <p>
            <span className="text-slate-400">Color: </span>
            {product.color}
          </p>

          <p className="font-bold text-lg">
            <span className="text-slate-500">Price: </span>
            {product.price}
          </p>
        </div>
      ))}
    </div>
  );
};
