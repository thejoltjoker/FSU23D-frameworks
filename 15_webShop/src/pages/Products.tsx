import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import { ApiResponse } from "../models/ApiResponse";

const Products = () => {
  const [products, setProducts] = useState<Product[]>();
  const [categories, setCategories] = useState<string[]>();

  useEffect(() => {
    if (products) return;

    let ignore = false;

    fetch("/api/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: ApiResponse) => {
        if (!ignore) setProducts(data.items);
      })
      .catch((err: Error) => {
        console.error("Error fetching data:", err);
      });

    return () => {
      ignore = true;
    };
  });

  return (
    <>
      <div className="relative flex max-h-[50vh] min-h-40 w-full overflow-hidden object-cover">
        <div className="absolute flex h-full w-full items-center justify-center text-center">
          <h2 className=" text-4xl text-white">Explore our collections</h2>
        </div>
        <img
          src="/img/gantas-vaiciulenas-FVz5fDfGFFw-unsplash.jpg"
          alt=""
          className="self-center xl:mt-[14vh]"
        />
      </div>
      <div className="mx-auto max-w-screen-xl p-4">
        <h3 className="text-lg font-semibold">Products</h3>
        <div>
          <ul className="flex gap-4 py-4">
            {products &&
              products
                .map((product) => product.category)
                .filter(
                  (value, index, current_value) =>
                    current_value.indexOf(value) === index,
                )
                .map((category) => (
                  <li className="rounded-sm border border-gray-300 px-4 py-2 text-xs uppercase tracking-widest text-gray-400 transition hover:bg-gray-100 hover:text-gray-900">
                    {category}
                  </li>
                ))}
          </ul>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {products?.map((product) => {
            return (
              <div className="text-sm text-xs uppercase tracking-widest">
                <img src="https://placehold.co/600" alt="" />
                <div className="my-4 grid grid-cols-2 gap-2">
                  <h4 className=" text-gray-500">{product.name}</h4>
                  <p className=" ml-auto ">${product.price}</p>
                  <p className=" text-gray-400">{product.material}</p>
                  <p className=" ml-auto text-gray-400">{product.color}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      ;
    </>
  );
};

export default Products;
