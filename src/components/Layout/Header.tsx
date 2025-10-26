import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

const Header: React.FC = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // 👇 Detect scroll direction to toggle fade
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down past 100px → fade out
        setShowHeader(false);
      } else {
        // scrolling up or near top → fade in
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Desktop Floating Header (centered + fade animation) */}
      <AnimatePresence>
        {showHeader && (
          <motion.header
            key="desktop-header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="hidden md:block fixed top-8 left-1/2 -translate-x-1/2 z-50"
          >
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
                    <Sun
                      className={`w-5 h-5 absolute transition-all duration-300 ${
                        theme === 'light'
                          ? 'opacity-100 rotate-0 scale-100'
                          : 'opacity-0 rotate-180 scale-0'
                      }`}
                    />
                    <Moon
                      className={`w-5 h-5 absolute transition-all duration-300 ${
                        theme === 'dark'
                          ? 'opacity-100 rotate-0 scale-100'
                          : 'opacity-0 -rotate-180 scale-0'
                      }`}
                    />
                  </div>
                </button>
              </div>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
