import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ShimmerCard from "./ShimmerCard";
import js from "@eslint/js";
import { Link } from "react-router";
import { FcClearFilters } from "react-icons/fc";

// import { ProductData } from "../utils/ProductData";
const Body = () => {
  const [topRatedProducts, setTopRatedProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [serchText, setSearchText] = useState("");

  const changeText = (event) => {
    setSearchText(event.target.value);
  };

  //use to api through call all products.
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const result = await fetch("https://fakestoreapi.com/products");
    const json = await result.json();
    setTopRatedProducts(json);
    setAllProducts(json);
  };

  const topRatedProductsData = () => {
    setTopRatedProducts(topRatedProducts.filter((product) => product.rating.rate >= 4));
    console.log(topRatedProducts);
  };

  const searchProducts = () => {
    const filteredProduct = allProducts.filter((product) =>
      product.title.toLowerCase().includes(serchText.toLowerCase())
    );
    setTopRatedProducts(filteredProduct);
  };

  if (topRatedProducts.length === 0) {
    return (
      <div className="flex flex-wrap justify-center gap-10 product-items">
        {Array.from({ length: 14 }).map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    );
  }
// clear all products 
  const ClearFilters= () => {
     setTopRatedProducts(allProducts);
     setSearchText("");
  }
  return (
    <section className="flex flex-col gap-4 px-2 py-2 ">
      <div
        className="flex
             gap-3"
      >
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="w-80 px-4 py-2 pr-10 text-sm text-gray-700 bg-white border border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Search..."
            value={serchText}
            onChange={changeText}
          />
          <button
            onClick={searchProducts}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus: ring-offset-2"
          >
            Search
          </button>
        </div>

        <button
          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus: ring-offset-2"
          onClick={topRatedProductsData}
        >
          Top Rated Products
        </button>

        <button
          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus: ring-offset-2"
          onClick={ClearFilters}
        >
          Clear Filter
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-4 product-items">
        {topRatedProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCard
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Body;
