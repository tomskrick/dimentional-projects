import React from 'react';
import banner from '../../../assets/images/chair.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
const Banner = () => {
    return (
        <div className="hero py-20 my-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Getting started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;