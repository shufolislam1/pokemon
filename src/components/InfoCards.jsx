import React from "react";

// **************This component is to show the loaded data in card*****************

const InfoCards = ({ oneData }) => {
  return (
    <div>
      <div className="hidden lg:block">
        <div className="relative overflow-hidden bg-no-repeat bg-cover ">
          <div className="card bg-base-100 hover:bg-blue-400 shadow-xl max-w-xs hover:scale-110 transition duration-300 ease-in-out">
            <figure className="px-10 pt-10">
              <img src={oneData?.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{oneData?.name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* carousel when screen is small */}
      {/* <div className="lg:hidden">
        <div className="flex">
        f
        </div>
      </div> */}
    </div>
  );
};

export default InfoCards;
