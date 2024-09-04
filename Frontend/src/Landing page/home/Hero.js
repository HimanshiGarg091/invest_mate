import React from 'react';

function Hero() {
    return (
        <div className='container'>
            <div className='row'>
                <img src='media/homeHero.png' alt='hero img' className='mb-5' />
            </div>
            <h1>
                Invest in everything
            </h1>
            <p>
                Online platform to invest in stocks, derivatives, mutual funds, and more
            </p>
            <button className='p-3 btn btn-primary fs-5' style={{ width: '20%', margin: '0 auto' }}>
                Sign Up Now
            </button>
        </div>
    );
}

export default Hero;
