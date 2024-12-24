import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Hi, I&apos;m <span className="text-blue-500">Lujia</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-6">
            Web Designer & Developer
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl">
            I build exceptional and accessible digital experiences for the web. 
            Passionate about creating elegant solutions to complex problems.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <Link 
              href="/projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              View Projects
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-3 border border-blue-600 text-blue-500 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
            >
              Contact Me
            </Link>
          </div>
          <div className="flex gap-6 justify-center lg:justify-start">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-blue-500 transition-colors">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 relative">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto">
            <Image
              src="/your-profile-picture.jpg"
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