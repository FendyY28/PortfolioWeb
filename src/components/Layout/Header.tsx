import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Desktop Floating Header */}
      <header className="hidden md:block fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <nav className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-300/50 dark:border-gray-600/50 rounded-2xl shadow-2xl px-6 py-3">
          <div className="flex items-center gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-200 rounded-xl ${
                  isActive(item.path)
                    ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50'
                    : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100/80 dark:hover:bg-gray-800/80'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2" />

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5">
                <Sun className={`w-5 h-5 absolute transition-all duration-300 ${theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'}`} />
                <Moon className={`w-5 h-5 absolute transition-all duration-300 ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'}`} />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-gray-900 dark:text-white">
              <Code className="w-6 h-6 text-purple-400" />
              <span>FY</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 text-base font-medium rounded-xl transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50'
                      : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-2 w-full px-4 py-2 text-base font-medium rounded-xl text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                <div className="relative w-5 h-5">
                  <Sun className={`w-5 h-5 absolute transition-all duration-300 ${theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'}`} />
                  <Moon className={`w-5 h-5 absolute transition-all duration-300 ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'}`} />
                </div>
                <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;