"use client"

import { FaEnvelope, FaPhone, FaMapMarkerAlt,  FaDiscord, FaTelegram } from 'react-icons/fa';

const contactInfo = [
  {
    icon: (
      <div className="relative">
        <svg width="0" height="0">
          <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#06b6d4" offset="0%" /> {/* cyan-500 */}
            <stop stopColor="#a855f7" offset="50%" /> {/* purple-500 */}
            <stop stopColor="#eab308" offset="100%" /> {/* yellow-500 */}
          </linearGradient>
        </svg>
        <FaEnvelope className="text-2xl" style={{ fill: "url(#contactGradient)" }} />
      </div>
    ),
    title: "Email",
    content: "dev.lujiaaa@gmail.com",
    link: "mailto:dev.lujiaaa@gmail.com"
  },
  {
    icon: (
      <div className="relative">
        <svg width="0" height="0">
          <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#06b6d4" offset="0%" />
            <stop stopColor="#a855f7" offset="50%" />
            <stop stopColor="#eab308" offset="100%" />
          </linearGradient>
        </svg>
        <FaPhone className="text-2xl" style={{ fill: "url(#contactGradient)" }} />
      </div>
    ),
    title: "Phone",
    content: "@uixLujiaaa on TG",
    link: "https://t.me/lujiadev_services",
    target: "_blank"
  },
  {
    icon: (
      <div className="relative">
        <svg width="0" height="0">
          <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#06b6d4" offset="0%" />
            <stop stopColor="#a855f7" offset="50%" />
            <stop stopColor="#eab308" offset="100%" />
          </linearGradient>
        </svg>
        <FaMapMarkerAlt className="text-2xl" style={{ fill: "url(#contactGradient)" }} />
      </div>
    ),
    title: "Location",
    content: "Melbourne, Australia",
    link: "https://maps.app.goo.gl/zVn2e9Rbg7ExenoM6",
    target: "_blank"
  }
];

const socialLinks = [
  { icon: <FaDiscord />, url: "https://discord.gg/PbmJG5YmMn" },
  { icon: <FaTelegram />, url: "https://t.me/lujiadev_services" }
];

const Contact = () => {
  return (
    <section id='contact' className="py-20 bg-gradient-to-br from-black via-gray-950 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-shine mb-4">
            Let&apos;s Connect
          </h2>
          <div className="w-80 h-1 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-yellow-500 via-pink-500 
                [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]
                transform transition-transform duration-300"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations! 🤝 ✨ 📨
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target={info.target}
              rel="noopener noreferrer"
              className="group p-6 bg-[#1a1a1a] hover:bg-gradient-to-br hover:from-cyan-950/50 hover:via-purple-950/50 hover:to-yellow-950/50 p-6 rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(6,182,212,0.5),0_0_15px_rgba(168,85,247,0.5),0_0_15px_rgba(234,179,8,0.5)] transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-purple-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-gray-400">{info.content}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transform hover:-translate-y-1 transition-all duration-300 text-2xl"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
              {/* Credit Line */}
              <div className="text-center text-gray-400 mt-16 text-sm">
          made with <span className="text-red-500">♥</span> by Lujiadev
        </div>
      
    </section>
  );
};

export default Contact;