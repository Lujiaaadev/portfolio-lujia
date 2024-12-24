"use client"

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaEnvelope className="text-2xl" />,
    title: "Email",
    content: "your.email@example.com",
    link: "mailto:your.email@example.com"
  },
  {
    icon: <FaPhone className="text-2xl" />,
    title: "Phone",
    content: "+1 234 567 8900",
    link: "tel:+12345678900"
  },
  {
    icon: <FaMapMarkerAlt className="text-2xl" />,
    title: "Location",
    content: "Your City, Country",
    link: "#"
  }
];

const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/yourusername" },
  { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername" },
  { icon: <FaTwitter />, url: "https://twitter.com/yourusername" },
  { icon: <FaInstagram />, url: "https://instagram.com/yourusername" }
];

const Contact = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Connect
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="group p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
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
              className="text-gray-400 hover:text-purple-500 transform hover:-translate-y-1 transition-all duration-300 text-2xl"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;