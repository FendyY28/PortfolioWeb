import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    { icon: Github, href: 'https://github.com/FendyY28', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/fendy-yurista', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:yuristafendy28@gmail.com', label: 'Email' },
    { icon: Phone, href: 'https://wa.me/6287777371818', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          
          {/* Title */}
          <h3 className="text-base font-semibold text-gray-700 dark:text-gray-300">
            Contact Me
          </h3>

          {/* Contact Icons */}
          <div className="flex space-x-6">
            {contactInfo.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label === 'Email' ? undefined : '_blank'}
                  rel={contact.label === 'Email' ? undefined : 'noopener noreferrer'}
                  className="group text-gray-400 dark:text-gray-400 transition-all duration-300 transform 
                             hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]"
                >
                  <Icon className="w-7 h-7 text-gray-400 group-hover:text-purple-500 transition-colors duration-300" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 dark:text-gray-500 text-sm">
            <p>© {currentYear} Made by Fendy Yurista</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
