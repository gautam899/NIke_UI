import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col dark:shadow-xl dark:bg-slate-800 rounded-[20px]">
      <img
        src={imgURL}
        alt=""
        className="rounded-full object-cover h-[120px] w-[120px] mt-3"
      />
      <p className="mt-6 max-w-sm text-center info-text dark:dark-text-p">
        {feedback}
      </p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} width={24} height={24} className="object-contain m-0" />
        <p className="text-xl font-montserrat text-slate-gray dark:dark-text-p">
          ({rating})
        </p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold dark:dark-text-h">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
