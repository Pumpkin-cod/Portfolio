import React, { useEffect, useState } from 'react';
import pumpkinCodLogo from '../assets/1.png'; // Make sure to have your logo image in the assets folder
import backgroundImage from '../assets/bg1.png';
import '../App.css'; // Import CSS file for animations

const Hero: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Set animate to true after a short delay to trigger the animation
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 500);

    // Clear the timeout on component unmount to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col relative cursive-font"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="flex items-center justify-between w-full px-4 z-10">
        <img src={pumpkinCodLogo} alt="PumpkinCod Logo" className="w-24 h-auto mb-8 rounded-full mt-12 ml-16" />
        <div className="flex space-x-4 pr-12">
          <a href="#about" className="btn text-white pr-8 text-2xl hover:text-rose-500">About</a>
          <a href="#projects" className="btn text-white pr-8 text-2xl hover:text-rose-500">Projects</a>
          <a href="#footer" className="btn text-white pr-8 text-2xl hover:text-rose-500">Contact</a>
        </div>
      </div>
      <div className={`text-center text-white z-10 my-auto ${animate ? 'slide-in' : ''}`}>
        <h1 className="text-6xl text-white font-bold mb-4 cursive-font">HI THERE!</h1>
        <h2 className='text-4xl text-rose-400 cursive-font mb-4'>I'm Catherine Gyamfi</h2>
        <h2 className="text-4xl text-rose-300 cursive-font">Welcome to my page.</h2>
      </div>
    </div>
  );
}

export default Hero;
