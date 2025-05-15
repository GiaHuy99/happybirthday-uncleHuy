import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rose-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="font-script text-4xl mb-4">Isabella's XV</h2>
          <p className="mb-8">Thank you for being part of this special celebration</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#hero" className="hover:text-rose-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-rose-300 transition-colors">About</a>
            <a href="#gallery" className="hover:text-rose-300 transition-colors">Gallery</a>
            <a href="#details" className="hover:text-rose-300 transition-colors">Details</a>
            <a href="#timeline" className="hover:text-rose-300 transition-colors">Timeline</a>
            <a href="#rsvp" className="hover:text-rose-300 transition-colors">RSVP</a>
          </div>
          
          <div className="flex items-center justify-center">
            <Heart className="text-rose-300 mr-2" size={16} />
            <p>June 15, 2025 • Grand Celebration Hall</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;