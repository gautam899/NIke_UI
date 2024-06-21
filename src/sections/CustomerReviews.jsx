/* eslint-disable no-unused-vars */
import { useContext } from "react";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
import { DarkModeContext } from "../DarkModeContext";

const CustomerReviews = () => {
  const {dark,toggleDarkMode} = useContext(DarkModeContext);
  return (
    <section className="max-container">
      <h3 className="text-center font-palanquin text-4xl font-bold dark:dark-text-h">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center dark:dark-text-p">
        Hear genuine stories from our satisfied customers about their
        exceptional experience with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
