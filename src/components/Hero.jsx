import React from 'react'

const Hero = () => {
    return (
        <div style={{backgroundImage: `url(https://i.ibb.co/fQBhJSb/Background.png)`, height:1000, width:1800}}>
            <div className='flex justify-center'>
                <img style={{marginTop: 50 , marginLeft:150}} src="https://i.ibb.co/sqX7Qc2/Logo.png" alt="pokemon" srcSet="" />
            </div>
            <div></div>
        </div>
    )
}

export default Hero;