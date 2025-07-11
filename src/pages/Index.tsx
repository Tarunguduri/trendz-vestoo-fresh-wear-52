
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import CartIcon from '../components/CartIcon';
import Footer from '../components/Footer';
import FloatingClothes from '../components/FloatingClothes';

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      <FloatingClothes />
      <CartIcon />
      <div className="flex-1 flex flex-col items-center justify-center px-4 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-light tracking-wider mb-4 text-white">
            TRENDZ
          </h1>
          <h2 className="text-3xl md:text-4xl font-light tracking-widest mb-8 text-white">
            VESTOO
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 font-light tracking-wide">
            feel fresh to wear
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-200 px-12 py-4 text-lg font-medium tracking-wide smooth-transition hover-scale"
              >
                Shop Now
              </Button>
            </Link>
            <Link to="/know-more">
              <Button 
                variant="outline"
                size="lg" 
                className="border-white/20 hover:border-white hover:bg-white hover:text-black px-12 py-4 text-lg font-medium tracking-wide smooth-transition hover-scale"
              >
                Know More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
