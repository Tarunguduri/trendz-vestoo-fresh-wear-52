
import React from 'react';

const FloatingClothes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating T-shirt */}
      <div className="absolute top-20 left-10 animate-bounce-slow opacity-20">
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 30 L30 20 L35 15 L65 15 L70 20 L80 30 L75 35 L75 85 L25 85 L25 35 Z" 
                stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.1)"/>
          <path d="M35 15 L35 25 L65 25 L65 15" stroke="white" strokeWidth="2"/>
        </svg>
      </div>

      {/* Floating Jacket */}
      <div className="absolute top-40 right-20 animate-float opacity-15">
        <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 35 L25 25 L30 20 L35 15 L45 15 L50 20 L70 20 L75 15 L85 15 L90 20 L95 25 L105 35 L100 40 L100 100 L20 100 L20 40 Z" 
                stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.1)"/>
          <path d="M30 20 L30 35 L50 35 L50 20" stroke="white" strokeWidth="2"/>
          <path d="M70 20 L70 35 L90 35 L90 20" stroke="white" strokeWidth="2"/>
        </svg>
      </div>

      {/* Floating Pants */}
      <div className="absolute bottom-40 left-1/4 animate-sway opacity-20">
        <svg width="50" height="70" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 10 L55 10 L55 50 L50 90 L45 90 L40 50 L40 50 L35 90 L30 90 L25 50 Z" 
                stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.1)"/>
          <path d="M25 15 L55 15" stroke="white" strokeWidth="1"/>
        </svg>
      </div>

      {/* Floating Dress */}
      <div className="absolute top-60 right-1/3 animate-pulse-slow opacity-15">
        <svg width="70" height="90" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 15 L70 15 L70 25 L65 30 L75 40 L80 110 L20 110 L25 40 L35 30 L30 25 Z" 
                stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.1)"/>
          <path d="M35 15 L35 25 L65 25 L65 15" stroke="white" strokeWidth="2"/>
        </svg>
      </div>

      {/* Floating Shoe */}
      <div className="absolute bottom-20 right-10 animate-bounce-slow opacity-20">
        <svg width="60" height="40" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 30 Q10 20 20 20 L70 20 Q85 20 90 35 Q90 45 80 45 L15 45 Q10 45 10 35 Z" 
                stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.1)"/>
          <path d="M20 20 L20 35 L75 35" stroke="white" strokeWidth="1"/>
        </svg>
      </div>

      {/* Floating Hat */}
      <div className="absolute top-32 left-1/2 animate-float opacity-15">
        <svg width="80" height="50" viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="50" rx="50" ry="8" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.1)"/>
          <path d="M35 50 Q35 30 60 30 Q85 30 85 50" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.1)"/>
        </svg>
      </div>

      {/* Floating Handbag */}
      <div className="absolute bottom-60 left-16 animate-sway opacity-20">
        <svg width="50" height="60" viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="30" width="40" height="45" rx="5" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.1)"/>
          <path d="M30 30 Q30 20 40 20 Q50 20 50 30" stroke="white" strokeWidth="2" fill="none"/>
          <circle cx="25" cy="40" r="2" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default FloatingClothes;
