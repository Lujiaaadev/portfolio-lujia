import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import avatar from '@/public/images/Lujia.jpg';
import { FlipWords } from '../ui/flip-words';
import { FaDiscord } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-950 via-gray-950 to-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Hey, I&apos;m <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">Lujia</span>
          </h1>
          <FlipWords 
          words={["Web Designer", "Developer", "UI/UX Designer", "Full Stack Developer"]}
          className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text 
            text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6
            [text-wrap:balance] [&_div]:animate-shimmer"
        />
          <p className="text-gray-400 text-lg mb-8 max-w-2xl">  
          Crafting stunning digital experiences with pixel-perfect precision. 
          From concept to code, I transform ideas into beautiful, high-performance websites 
          that leave a lasting impression.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
          <Link 
          href="/projects"
          className="group relative px-8 py-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
            text-white rounded-full transition-all duration-300 ease-out
            hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]
            before:absolute before:inset-0
            before:bg-gradient-to-r before:from-blue-400 before:via-purple-500 before:to-pink-500
            before:rounded-full before:opacity-0 before:transition-opacity
            before:duration-300 before:animate-shimmer
            before:hover:opacity-100 overflow-hidden"
        >
          <span className="relative z-10">View Projects</span>
        </Link>
          </div>
          <div className="flex gap-6 justify-center lg:justify-start">
          <a href="https://discord.com/users/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
            <FaDiscord size={24} />
          </a>
          <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
            <FaTelegramPlane size={24} />
          </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 relative">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto">
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
    </section>
  );
};

export default Hero;