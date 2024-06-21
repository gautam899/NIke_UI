/* eslint-disable no-unused-vars */
import { useContext } from "react";
import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";
import { DarkModeContext } from "../DarkModeContext";
import { Link } from "react-router-dom";
const PopularProducts = () => {
  const { dark, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <section id="products" className="max-container max-sm:mt-12 dark:bg-dark">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold dark:dark-text-h">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray dark:dark-text-p">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 ">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <PopularProductCard key={product.id} {...product} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
