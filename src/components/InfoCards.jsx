import React from "react";


// **************This component is to show the loaded data in card*****************

const InfoCards = ({ oneData }) => {

  const openDetails = () => {
    // <div>
    //   {/* The button to open modal */}
    //   {/* <label htmlFor="my-modal" className="btn">open modal</label> */}

    //   {/* Put this part before </body> tag */}
    //   <input type="checkbox" id="my-modal" className="modal-toggle" />
    //   <div className="modal">
    //     <div className="modal-box">
    //       <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
    //       <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    //       <div className="modal-action">
    //         <label htmlFor="my-modal" className="btn">Yay!</label>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  }

  return (
    <div>
      {/* <div className="hidden lg:block"> */}
      <div className="relative bg-no-repeat bg-cover ">
        <div className="flex justify-center my-6">

        <div className="card bg-base-100 hover:bg-blue-400 shadow-xl max-w-xs hover:scale-110 transition duration-300 ease-in-out">
          <figure className="px-10 pt-10">
            <img src={oneData?.image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{oneData?.name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button onClick={openDetails} className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        </div>
        {/* </div> */}
      </div>
      {/* carousel when screen is small */}
      {/* <div className="flex lg:hidden">
        
      </div> */}
    </div>
  );
};

export default InfoCards;
