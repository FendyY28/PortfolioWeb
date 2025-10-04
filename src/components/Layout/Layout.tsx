import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AnimatedBackground from '../UI/AnimatedBackground';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />
      <Header />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;