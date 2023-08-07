// MainLayout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default MainLayout;


