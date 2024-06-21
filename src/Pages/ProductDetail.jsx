/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { products } from "../constants";

// First of all we will need the id of the product that we are getting from the url
import { useParams } from "react-router-dom";
import { DarkModeContext } from "../DarkModeContext";

const ProductDetail = () => {
  const { dark, toggleDarkMode } = useContext(DarkModeContext);
  const { productId } = useParams();
  const product = products.find((p) => p.id.toString() === productId);
  const [activeImg, setActiveImg] = useState(product.imgURL);
  const [amount, setAmount] = useState(1);
  const decreaseAmount = () => {
    setAmount((prev) => Math.max(prev - 1, 1));
  };
  const increaseAmount = () => {
    setAmount((prev) => prev + 1);
  };
  // if product not found return product not found
  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center ">
      {/* In here we will have 2 divs */}
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img
          src={activeImg}
          alt=""
          className="w-full h-full aspect-square object-cover rounded-xl"
        />
        <div className="flex flex-row justify-between sm:h-24 h-20">
          {product.images.map((imageObj, index) => (
            <img
              src={Object.values(imageObj)[0]}
              alt={`Product Image ${index + 1}`}
              key={index}
              className={`w-20 h-20 sm:w-24 sm:h-24 rounded-md cursor-pointer border-2 ${
                Object.values(imageObj)[0] === activeImg
                  ? "border-coral-red"
                  : "border-transparent"
              }
 cursor-pointer max-sm:flex-1 `}
              onClick={() => setActiveImg(Object.values(imageObj)[0])}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className=" text-violet-600 font-semibold">
            Special Sneaker
          </span>
          <h1 className="text-4xl font-bold text-black dark:dark-text-h">
            {product.name}
          </h1>
        </div>
        <p className="text-gray-700 dark:dark-text-p">
          Let your attitude have the edge with flame-like caging that adds heat
          to the streets while airy mesh keeps you cool. The Air Max Plus gives
          you a tuned Nike Air experience that offers premium stability and
          unbelievable cushioning.
        </p>
        <h6 className="text-coral-red font-bold text-3xl ">{product.price}</h6>
        <div className="flex sm:flex-row gap-5 flex-col items-start  sm:gap-14">
          <div className="flex flex-row items-center">
            <button
              className="bg-gray-100 py-2 px-5 text-violet-800 rounded-lg text-3xl"
              onClick={decreaseAmount}
            >
              -
            </button>
            <span className="text-coral-red text-xl py-4 px-6 rounded-lg font-bold">
              {amount}
            </span>
            <button
              className="bg-gray-100 py-2 px-4 text-3xl font-bold rounded-lg text-violet-800"
              onClick={increaseAmount}
            >
              +
            </button>
          </div>
          <button className="bg-coral-red font-bold tracking-wide mt-2 text-white py-3 px-16 rounded-xl">
            Add to Cart
          </button>
        </div>

        <div>
          <h3 className="text-xl text-coral-red font-semibold tracking-wide underline cursor-pointer">
            Size
          </h3>
          <div className="mt-4 flex gap-5">
            <button className="size_chart-button">6</button>
            <button className="size_chart-button">7</button>
            <button className="size_chart-button">8</button>
            <button className="size_chart-button">9</button>
            <button className="size_chart-button">10</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
