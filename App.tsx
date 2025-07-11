import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Services from './components/Services';
import Stats from './components/Stats';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-300 antialiased selection:bg-purple-500/20 selection:text-purple-100">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Services />
        <Stats />
      </main>
      <Footer />
    </div>
  );
};

export default App;