import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function Layout({ children, title }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar on route change or resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-surface">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <TopBar title={title} onMenuToggle={() => setSidebarOpen(prev => !prev)} />
      <main className="lg:ml-[280px] pt-20 lg:pt-24 px-4 sm:px-6 md:px-8 lg:px-12 pb-12">
        {children}
      </main>
    </div>
  );
}
