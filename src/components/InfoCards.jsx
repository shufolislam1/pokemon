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
      {/* carousel when screen is large */}
      {/* <div className="flex lg:hidden">
        <div className="carousel w-full ml-80">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="relative overflow-hidden bg-no-repeat bg-cover ">
              <div className="card bg-base-100 hover:bg-blue-400 shadow-xl max-w-xs hover:scale-110 transition duration-300 ease-in-out">
                <figure className="px-10 pt-10">
                  <img
                    src={oneData?.image}
                    alt="Shoes"
                    className="rounded-xl"
                  />
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
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="relative overflow-hidden bg-no-repeat bg-cover ">
              <div className="card bg-base-100 hover:bg-blue-400 shadow-xl max-w-xs hover:scale-110 transition duration-300 ease-in-out">
                <figure className="px-10 pt-10">
                  <img
                    src={oneData?.image}
                    alt="Shoes"
                    className="rounded-xl"
                  />
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
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="relative overflow-hidden bg-no-repeat bg-cover ">
              <div className="card bg-base-100 hover:bg-blue-400 shadow-xl max-w-xs hover:scale-110 transition duration-300 ease-in-out">
                <figure className="px-10 pt-10">
                  <img
                    src={oneData?.image}
                    alt="Shoes"
                    className="rounded-xl"
                  />
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
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="relative overflow-hidden bg-no-repeat bg-cover ">
              <div className="card bg-base-100 hover:bg-blue-400 shadow-xl max-w-xs hover:scale-110 transition duration-300 ease-in-out">
                <figure className="px-10 pt-10">
                  <img
                    src={oneData?.image}
                    alt="Shoes"
                    className="rounded-xl"
                  />
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
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default InfoCards;
