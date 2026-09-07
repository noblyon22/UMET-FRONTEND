import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
  <div className="flex min-h-screen bg-gray-50">
    <Sidebar />
    <div className="flex flex-col flex-1 min-w-0">
      <Navbar />
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  </div>
);

export default PageLayout;
