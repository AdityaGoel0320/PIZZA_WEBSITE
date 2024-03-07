import React from 'react';
import { imageUrl } from '../assets/FrontendUtils'; // Adjust the import based on your file structure

const Hero = () => {
    return (
        <>
            <div className="hero min-h-screen relative" style={{ backgroundImage: `url(${imageUrl('pizzaBackground.jpeg')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="hero-overlay bg-opacity-60" style={{ backdropFilter: 'blur(1.5px)' }}></div>
                <div className=" p-12  hero-content text-center text-neutral-content relative">
                    <div className="max-w-md text-white font-bold">
                        <h1 className="mb-5 text-4xl md:text-5xl font-bold">Indulge in Pizza Paradise! 😊</h1>
                        <p className="mb-5  md:text-xl">Discover a world of flavor and delight. Our pizzas are made with passion, just for you. Unleash your taste buds and get ready for a slice of heaven.</p>
                        <button className="btn btn-primary hover:bg-white hover:text-black">Order Now -</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
