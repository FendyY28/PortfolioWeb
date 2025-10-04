import React from 'react';
import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: Github,
      href: 'https://github.com/FendyY28',
      label: 'GitHub',
      text: 'FendyY28'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/fendy-yurista',
      label: 'LinkedIn',
      text: 'fendy-yurista'
    },
    {
      icon: Mail,
      href: 'mailto:yuristafendy28@gmail.com',
      label: 'Email',
      text: 'yuristafendy28@gmail.com'
    },
    {
      icon: Phone,
      href: 'https://wa.me/6287777371818',
      label: 'WhatsApp',
      text: '+62 877-7737-1818'
    },
  ];

  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl">
            {contactInfo.map((contact) => {
              const Icon = contact.icon;
              return (
                <div key={contact.label} className="flex flex-col items-center text-center space-y-2">
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300 font-medium">{contact.label}</span>
                  </div>
                  <a
                    href={contact.href}
                    target={contact.label === 'Email' ? undefined : '_blank'}
                    rel={contact.label === 'Email' ? undefined : 'noopener noreferrer'}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm break-all"
                  >
                    {contact.text}
                  </a>
                </div>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500">
            <p className="flex items-center justify-center space-x-1">
              <span>© {currentYear} Made with</span>
              <Heart className="w-4 h-4 text-purple-400 fill-current" />
              <span>by Fendy Yurista</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;