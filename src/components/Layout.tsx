import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <div className="min-h-screen bg-surface">
      <Sidebar />
      <TopBar title={title} />
      <main className="ml-[280px] pt-24 px-12 pb-12">
        {children}
      </main>
    </div>
  );
}
