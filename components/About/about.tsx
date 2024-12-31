import avatar from '@/public/images/Lujia-pic.png';
import { FaCode, FaServer, FaMobile, FaDatabase } from 'react-icons/fa';
import Image from 'next/image';

const About = () => {
  const skills = [
    { icon: <FaCode className="text-yellow-400 animate-shine" />, title: 'Frontend', text: 'React, Next.js, TypeScript, Tailwind' },
    { icon: <FaServer className="text-yellow-400" />, title: 'Backend', text: 'Node.js, Express, Python, Django' },
    { icon: <FaMobile className="text-yellow-400" />, title: 'Mobile', text: 'React Native, Flutter, Android Studio' },
    { icon: <FaDatabase className="text-yellow-400" />, title: 'Database', text: 'MongoDB, PostgreSQL, Firebase' },
  ];

  return (
    <section id="about" className="py-20 bg-[#1a1a1a] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative h-[650px] rounded-lg overflow-hidden">
            <Image
              src={avatar}
              alt="Lujia Picture"
              fill
              className="object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4 animate-shine">
                About Me
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[5%] via-cyan-400 via-[35%] via-purple-400 via-[65%] via-yellow-500 via-[95%] to-transparent rounded-full"></div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-lg">
              I&apos;m a passionate Full Stack Developer with 5+ years of experience building web applications.
              I specialize in JavaScript technologies across the MERN stack, with a strong foundation in
              modern frontend frameworks and backend development.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-yellow-400 text-2xl mb-2">{skill.icon}</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{skill.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.text}</p>
                </div>
              ))}
            </div>

            {/* Experience Timeline */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Experience</h3>
              <div className="relative">
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-yellow-400"></div>
                <div className="pl-4 space-y-4">
                  <div className="relative">
                    <div className="absolute -left-6 mt-1 w-4 h-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-yellow-400 rounded-full"></div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Senior Developer</h4>
                    <p className="text-gray-600 dark:text-gray-400">Tech Company • 2020 - Present</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-6 mt-1 w-4 h-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-yellow-400 rounded-full"></div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Full Stack Developer</h4>
                    <p className="text-gray-600 dark:text-gray-400">Software Agency • 2018 - 2020</p>
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