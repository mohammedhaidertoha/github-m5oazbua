import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-pa-black">
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
