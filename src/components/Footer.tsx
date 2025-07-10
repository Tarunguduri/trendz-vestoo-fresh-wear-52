
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto py-8 border-t border-border bg-background">
      <div className="text-center text-muted-foreground text-sm space-y-2">
        <p>@2025 Trendz Vestoo</p>
        <p>Powered by ReView</p>
        <div className="pt-4 border-t border-border/50 mt-4">
          <a 
            href="https://reviewrv25.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 font-medium underline transition-colors"
          >
            Get a Website
          </a>
          <p className="text-xs mt-1">Contact: 8341105135 to get a website for your business</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
