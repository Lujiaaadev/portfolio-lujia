'use client';
import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';
import Avatar from '../public/images/Lujia.jpg';
import Image from 'next/image';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython,
  FaGitAlt,
  FaDocker
} from 'react-icons/fa';
import { 
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiExpress,
  SiFigma
} from 'react-icons/si';
import { useEffect, useState } from 'react';

export function useTypewriter(texts: string[], typingSpeed: number = 100, deletingSpeed: number = 50, delayBetweenTexts: number = 2000) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting) {
        setCurrentText(current.substring(0, currentText.length + 1));
        
        if (currentText === current) {
          setIsDeleting(true);
          setTimeout(() => {}, delayBetweenTexts);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts, delayBetweenTexts, deletingSpeed, typingSpeed]);

  return currentText;
}

const techStack = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'Figma', icon: <SiFigma /> },
];

export default function Home() {
  const texts = [
    "Full-Stack Developer",
    "UI/UX Designer",
    "Software Engineer",
    "Web Developer",
    "Mobile App Developer"
  ];
  
  const typedText = useTypewriter(texts, 100, 50, 2000);

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen w-full overflow-x-hidden">
      <Navbar />
      
      <BackgroundBeamsWithCollision className="min-h-screen">
        <section 
          id="home" 
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
        >
          {/* Add padding-top to account for navbar height */}
          <div className="container mx-auto max-w-7xl py-24 sm:py-28 md:py-32"> {/* Increased padding */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Column - Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left space-y-4 sm:space-y-6 md:space-y-8 max-w-xl mx-auto md:mx-0 pt-16 md:pt-0"
              >
                <motion.p
                  className="text-purple-500 font-medium text-base sm:text-lg md:text-xl relative"
                >
                  {typedText}
                  <span className="absolute ml-1 -mt-1 inline-block w-[2px] h-[1.2em] bg-purple-500 animate-blink" />
                </motion.p>

            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Lujia Dev
                </span>
              </h1>
            </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-lg"
        >
          Crafting Digital Experiences Through Code & Creative Solutions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium text-white shadow-lg shadow-purple-500/30 text-sm sm:text-base"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 bg-white/10 rounded-full font-medium text-white backdrop-blur-sm hover:bg-white/20 transition-colors text-sm sm:text-base"
          >
            Download CV
          </motion.button>
        </motion.div>

        {/* Tech Stack */}
        <div className="grid grid-cols-5 sm:grid-cols-7 gap-2 sm:gap-3 mt-6 sm:mt-8">
  {techStack.map((tech, index) => (
    <motion.div
      key={tech.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all group"
    >
      <div className="text-base sm:text-lg text-gray-300 group-hover:text-purple-500 transition-colors">
        {tech.icon}
      </div>
      <span className="text-[8px] sm:text-[10px] mt-1 text-gray-400 group-hover:text-gray-300">
        {tech.name}
      </span>
    </motion.div>
  ))}
</div>
      </motion.div>

      {/* Right Column - Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[300px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px] aspect-square mx-auto order-1 md:order-2"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-[35%] bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-[45%] bg-gradient-to-r from-blue-500/30 to-violet-500/30 rounded-full blur-3xl"
          />
        </div>
        
        {/* Image container */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 backdrop-blur-sm">
          <Image
            src={Avatar}
            alt="Lujia Dev Profile"
            fill
            priority
            sizes="(max-width: 640px) 300px, (max-width: 768px) 340px, (max-width: 1024px) 380px, 420px"
            className="object-cover object-center hover:scale-105 transition-transform duration-700"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 via-transparent to-transparent" />
        </div>
      </motion.div>
      </div>
    </div>
  </section>
</BackgroundBeamsWithCollision>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I&apos;m a passionate full-stack developer with a keen eye for detail and a love for clean, efficient code. 
              Specializing in modern web technologies, I bring ideas to life through innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

    {/* Projects Section */}
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 flex flex-col h-full"
            >
              <div className="p-4 sm:p-6 lg:p-8 flex flex-col h-full">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-[#2a2a2a] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <a
              href="mailto:contact@lujiadev.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <EnvelopeIcon className="w-6 h-6" />
              Say Hello
            </a>
          </motion.div>
          <div className="mt-12 flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with Next.js and TypeScript",
    technologies: ["React", "Next.js", "TypeScript"]
  },
  // Add more projects
];

import { JSX } from 'react';

interface SocialLink {
  url: string;
  icon: JSX.Element;
}

const socialLinks: SocialLink[] = [
  // Add your social links
];

