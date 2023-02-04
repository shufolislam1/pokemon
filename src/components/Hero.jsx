import React from 'react'

const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(https://i.ibb.co/fQBhJSb/Background.png)`, height: 1000, width: 1800 }}>
            <div className='flex justify-center'>
                <img style={{ marginTop: 50, marginLeft: 150 }} src="https://i.ibb.co/sqX7Qc2/Logo.png" alt="pokemon" srcSet="" />
            </div>
            <div className='relative overflow-hidden bg-no-repeat bg-cover '>
                <div className="card w-96 bg-base-100 shadow-xl max-w-xs hover:scale-110 transition duration-300 ease-in-out">
                    <figure className="px-10 pt-10">
                        <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
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