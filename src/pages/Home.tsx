import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center justify-items-center"
          >
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left lg:justify-self-end lg:pr-12">
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Fendy Yurista
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 mb-8"
              >
                I'm Computer Science Student Focusing on Software Engineering. I really love to explore new things.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
              >
                <Link
                  to="/projects"
                  className="px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200 shadow-lg hover:shadow-xl hover:shadow-purple-500/25"
                >
                  View My Projects
                </Link>
                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/assets/cv/CV_Fendy_Yurista.pdf";
                    link.download = "Fendy_Yurista_CV.pdf";
                    link.click();
                  }}
                  className="px-8 py-3 border-2 border-gray-600 text-gray-300 rounded-lg font-medium hover:border-purple-500 hover:bg-purple-900/20 transition-all duration-200 flex items-center space-x-2"
>
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex justify-center lg:justify-start space-x-6"
              >
                {[
                  { icon: Github, href: 'https://github.com/FendyY28', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/fendy-yurista', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:yuristafendy28@gmail.com', label: 'Email' },
                  { icon: Phone, href: 'https://wa.me/6287777371818', label: 'Whatsapp'}
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="p-3 text-gray-400 hover:text-purple-400 hover:bg-purple-900/20 rounded-full transition-all duration-200"
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </motion.div>
            </div>

            {/* Right Side - Profile Image */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-self-start lg:pl-12"
>
              <div className="relative lg:translate-x-8">
                <img
                  src="/assets/images/Profile.jpg"
                  alt="Profile"
                  className="w-64 h-64 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-purple-500 shadow-2xl shadow-purple-500/30"
                />
              {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-blue-500/20 rounded-full blur-lg"></div>
              </div>
          </motion.div>

          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            onClick={scrollToNext}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-purple-400 transition-colors duration-200"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              I'm a Computer Science Student, focusing on Software Engineering and I'm really passionate to learn new things.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 border border-purple-500 text-purple-400 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition-all duration-200"
            >
              Learn More About Me
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;