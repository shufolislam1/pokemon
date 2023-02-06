import React, { useState } from "react";
import InfoCards from "./InfoCards";
import { useMediaQuery } from 'react-responsive';
import Carousel from "./Carousel";


// ******In this component, data loaded via Graphql API and passed them through props to InfoCards compoennts. Beside, design part of Hero/top is in this component*********

const Hero = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 768 });

  const [data, setData] = useState([]);
  const gqlQuery = `query pokemons($limit: Int) {
        pokemons(limit: $limit) {
          results {
            name
            image
          } 
        }
      }


      `;
  const gqlVariables = {
    limit: 10,
    // id: "1",
    // "name": "ditto"
  };

  fetch("https://graphql-pokeapi.graphcdn.app/", {
    credentials: "omit",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: gqlQuery,
      variables: gqlVariables,
    }),
    method: "POST",
  })
    .then((res) => res.json())
    .then((res) => setData(res?.data?.pokemons?.results));
  // .then((res) => console.log(res));


  
  return (
    <div
      style={{
        backgroundImage: `url(https://i.ibb.co/fQBhJSb/Background.png)`,
        height: 1000,
        width: 1800,
      }}
    >
      <div className="flex justify-center">
        <img
          style={{ marginTop: 50, marginLeft: 150 }}
          src="https://i.ibb.co/sqX7Qc2/Logo.png"
          alt="pokemon"
          srcSet=""
        />
      </div>
      <div className="grid lg:grid-cols-5 sm:grid-cols-1 gap-10 mt-10 max-w-screen-2xl mx-auto">
        {data?.map((oneData, index) => (
          // <div className="col-span-1">
          isLargeScreen?
          <InfoCards key={index} oneData={oneData}></InfoCards>
          :<Carousel key={index} oneData={oneData}></Carousel>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
