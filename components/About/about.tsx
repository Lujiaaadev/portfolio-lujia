import Image from 'next/image';
import { FaCode, FaServer, FaMobile, FaDatabase } from 'react-icons/fa';

const About = () => {
  const skills = [
    { icon: <FaCode />, title: 'Frontend', text: 'React, Next.js, TypeScript, Tailwind' },
    { icon: <FaServer />, title: 'Backend', text: 'Node.js, Express, Python, Django' },
    { icon: <FaMobile />, title: 'Mobile', text: 'React Native, Flutter' },
    { icon: <FaDatabase />, title: 'Database', text: 'MongoDB, PostgreSQL, Firebase' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/professional-photo.jpg"
              alt="Professional Photo"
              fill
              className="object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-blue-600 rounded"></div>
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
                  <div className="text-blue-600 text-2xl mb-2">{skill.icon}</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{skill.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.text}</p>
                </div>
              ))}
            </div>

            {/* Experience Timeline */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Experience</h3>
              <div className="border-l-2 border-blue-600 pl-4 space-y-4">
                <div className="relative">
                  <div className="absolute -left-6 mt-1 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Senior Developer</h4>
                  <p className="text-gray-600 dark:text-gray-400">Tech Company • 2020 - Present</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-6 mt-1 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Full Stack Developer</h4>
                  <p className="text-gray-600 dark:text-gray-400">Software Agency • 2018 - 2020</p>
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