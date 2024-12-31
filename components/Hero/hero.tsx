import React from 'react';
import Image from 'next/image';
import avatar from '@/public/images/Lujia.jpg';
import { FlipWords } from '../ui/flip-words';
import { FaDiscord } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import Starfield from '../ui/Starfield';

const Hero = () => {
  return (
    // Hero Section
    <section className="relative min-h-screen flex items-center bg-black py-16 px-4 sm:px-6 lg:px-8">
      {/* Add Starfield as the first child */}
      <Starfield 
        starCount={1000} 
        starColor={[255, 255, 255]} 
        speedFactor={0.05} 
        backgroundColor="black" 
      />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 mt-6">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-6">
            Hey, I&apos;m <span className="text-white text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-500 font-extrabold filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-shine">
            Lujia
          </span>
          </h1>
          <FlipWords 
          words={["Web Designer", "Software Engineer", "UI/UX Designer", "Mobile App Developer", "Web Developer"]}
          className="bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-500 text-transparent bg-clip-text 
            text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6
            [text-wrap:balance] [&_div]:animate-shimmer"
        />
          <p className="text-gray-400 text-lg mb-8 max-w-2xl">  
          Crafting stunning digital experiences with pixel
          -perfect precision. 
          From concept to code, I transform ideas into beautiful, high-performance websites 
          that leave a lasting impression.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-2">
        
          </div>
          <div className="flex gap-6 justify-center lg:justify-start">
          <a href="https://discord.com/users/@uixlujiaaa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
            <FaDiscord size={24} />
          </a>
          <a href="https://t.me/@uixLujiaaa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
            <FaTelegramPlane size={24} />
          </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 relative">
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-yellow-500 via-pink-500 animate-spin-slow p-[4px]">
            <div className="h-full w-full rounded-full bg-white dark:bg-gray-900">
              <Image
                src={avatar}
                alt="Profile Picture"
                fill
                className="rounded-full object-cover shadow-2xl animate-float"
                priority
              />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;