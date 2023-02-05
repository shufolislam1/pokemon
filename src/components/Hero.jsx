import React, { useState } from "react";
import InfoCards from "./InfoCards";

const Hero = () => {
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
      <div className="grid grid-cols-5 gap-10  mt-10">
        {data?.map((oneData, index) => (
          <InfoCards key={index} oneData={oneData}></InfoCards>
        ))}
      </div>
    </div>
  );
};

export default Hero;
