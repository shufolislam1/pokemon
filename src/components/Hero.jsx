import React, { useState } from 'react'

const Hero = () => {
    const [data, setData] = useState({});
    const gqlQuery = `query pokemons($limit: Int, $name: String!) {
        pokemons(limit: $limit, name: $name) {
          count
          next
          previous
          status
          message
          id
          name
          results {
            url
            name
            image
            types
          }
          sprites {
            front_default
          }
          moves {
            move {
              name
            }
          }
          types {
            type {
              name
            }
          }
        }
      }`;
    //   const details = `query pokemon($name: String!) {
    //     pokemon(name: $name) {
    //       id
    //       name
    //       sprites {
    //         front_default
    //       }
    //       moves {
    //         move {
    //           name
    //         }
    //       }
    //       types {
    //         type {
    //           name
    //         }
    //       }
    //     }
    //   }`
      const gqlVariables = {
        limit: 10,
        "name": "ditto"
      };
      
      fetch('https://graphql-pokeapi.graphcdn.app/', {
        credentials: 'omit',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: gqlQuery,
          variables: gqlVariables,
        }),
        method: 'POST',
      })
        .then((res) => res.json())
        // .then((res) => setData(res.data.pokemons.results[0]));
        .then((res) => console.log(res));

    return (
        <div style={{ backgroundImage: `url(https://i.ibb.co/fQBhJSb/Background.png)`, height: 1000, width: 1800 }}>
            <div className='flex justify-center'>
                <img style={{ marginTop: 50, marginLeft: 150 }} src="https://i.ibb.co/sqX7Qc2/Logo.png" alt="pokemon" srcSet="" />
            </div>
            <div className='relative overflow-hidden bg-no-repeat bg-cover '>
                <div className="card w-96 bg-base-100 hover:bg-blue-400 shadow-xl max-w-xs hover:scale-110 transition duration-300 ease-in-out">
                    <figure className="px-10 pt-10">
                        <img src={data?.image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{data?.name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;