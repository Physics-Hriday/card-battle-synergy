
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 backdrop-blur-md bg-black bg-opacity-50 py-8">
      <div className="game-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-white flex items-center">
              <span className="text-game-primary">Poki</span>
              <span className="text-game-accent ml-1">War</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm font-medium">
              A strategic card battle game with unique elemental synergies and competitive gameplay.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Gameplay</h3>
            <ul className="space-y-2">
              <FooterLink to="/battle" label="Battle Arena" />
              <FooterLink to="/collection" label="Card Collection" />
              <FooterLink to="/shop" label="Card Shop" />
              <FooterLink to="/leaderboard" label="Leaderboard" />
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink to="/about" label="About Game" />
              <FooterLink to="/guides" label="Game Guides" />
              <FooterLink to="/updates" label="Game Updates" />
              <FooterLink to="/faq" label="FAQ" />
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <FooterLink to="/terms" label="Terms of Service" />
              <FooterLink to="/privacy" label="Privacy Policy" />
              <FooterLink to="/cookies" label="Cookie Policy" />
              <FooterLink to="/contact" label="Contact Us" />
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-medium">
            &copy; {new Date().getFullYear()} Poki War. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Designed & Developed by <a 
              href="https://www.linkedin.com/in/hridaykadam/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-game-primary hover:text-game-primary/80 transition-colors font-medium"
            >
              Hriday Kadam
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, label }: { to: string; label: string }) => (
  <li>
    <Link
      to={to}
      className="text-gray-400 hover:text-white transition-colors font-medium"
    >
      {label}
    </Link>
  </li>
);

export default Footer;
