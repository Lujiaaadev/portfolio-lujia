import avatar from '@/public/images/Lujia-pic.png';
import { FaCode, FaServer, FaMobile, FaDatabase } from 'react-icons/fa';
import Image from 'next/image';

const GradientDefinition = () => (
  <svg width="0" height="0">
    <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop stopColor="#06b6d4" offset="0%" />
      <stop stopColor="#a855f7" offset="50%" />
      <stop stopColor="#eab308" offset="100%" />
    </linearGradient>
  </svg>
);

const About = () => {
  const skills = [
    { 
      icon: (
        <div className="relative">
          <GradientDefinition />
          <FaCode style={{ fill: "url(#iconGradient)" }} />
        </div>
      ),
      title: 'Frontend',
      text: 'React, Next.js, TypeScript, Tailwind'
    },
    {
      icon: (
        <div className="relative">
          <GradientDefinition />
          <FaServer style={{ fill: "url(#iconGradient)" }} />
        </div>
      ),
      title: 'Backend',
      text: 'Node.js, Express, Python, Django'
    },
    {
      icon: (
        <div className="relative">
          <GradientDefinition />
          <FaMobile style={{ fill: "url(#iconGradient)" }} />
        </div>
      ),
      title: 'Mobile',
      text: 'React Native, Flutter, Android Studio'
    },
    {
      icon: (
        <div className="relative">
          <GradientDefinition />
          <FaDatabase style={{ fill: "url(#iconGradient)" }} />
        </div>
      ),
      title: 'Database',
      text: 'MongoDB, PostgreSQL, Firebase'
    },
  ];

  

  return (
    <section id="about" className="py-20 bg-[#1a1a1a] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative h-[650px] rounded-lg overflow-hidden before:absolute before:inset-0 before:-z-10 before:p-1 before:rounded-lg before:content-[''] before:bg-gradient-to-r before:from-cyan-500 before:via-purple-500 before:to-yellow-500 before:animate-gradient-xy">
  <div className="h-full w-full bg-black rounded-lg"> {/* Added black background container */}
    <Image
      src={avatar}
      alt="Lujia Picture"
      fill
      className="object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
      priority
    />
  </div>
</div>
          {/* Content Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold light:text-gray-900 dark:text-white mb-4 animate-shine">
                About Me
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 via-pink-500 
                [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]
                transform transition-transform duration-300 rounded-full"></div>
            </div>

            <p className="light:text-gray-600 dark:text-gray-300 text-lg">
              I&apos;m a passionate Full Stack Developer with 5+ years of experience building web applications.
              I specialize in JavaScript technologies across the MERN stack, with a strong foundation in
              modern frontend frameworks and backend development.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="p-4  bg-black hover:bg-gradient-to-br hover:from-cyan-950/50 hover:via-purple-950/50 hover:to-yellow-950/50 p-6 rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(6,182,212,0.5),0_0_15px_rgba(168,85,247,0.5),0_0_15px_rgba(234,179,8,0.5)] transition-all duration-300"
                >
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-yellow-400 text-2xl mb-2">{skill.icon}</div>
                  <h3 className="font-semibold light:text-gray-900 dark:text-white mb-2">{skill.title}</h3>
                  <p className="light:text-gray-600 dark:text-gray-400 text-sm">{skill.text}</p>
                </div>
              ))}
            </div>

            {/* Experience Timeline */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold light:text-gray-900 dark:text-white">Experience</h3>
              <div className="relative">
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-yellow-400"></div>
                <div className="pl-4 space-y-4">
                  <div className="relative">
                    <div className="absolute -left-6 mt-1 w-4 h-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-yellow-400 rounded-full"></div>
                    <h4 className="text-lg font-medium light:text-gray-900 dark:text-white">Senior Developer</h4>
                    <p className="light:text-gray-600 dark:text-gray-400">Tech Company • 2020 - Present</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-6 mt-1 w-4 h-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-yellow-400 rounded-full"></div>
                    <h4 className="text-lg font-medium light:text-gray-900 dark:text-white">Full Stack Developer</h4>
                    <p className="light:text-gray-600 dark:text-gray-400">Software Agency • 2018 - 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;