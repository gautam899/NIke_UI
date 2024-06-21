const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeImg }) => {
  const handleClick = () => {
    //This function will figure out if the currently selected shoes is the one that is showing.
    //if that is not the case we will set it to the shoe that we clicked.

    if (bigShoeImg != imgURL.bigShoe) {
      changeBigShoeImg(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      }
 cursor-pointer max-sm:flex-1 `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:h-40 sm:w-40 rounded-xl max max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoes collection"
          width={127}
          height={103}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
