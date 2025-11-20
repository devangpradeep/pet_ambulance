import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emergency-500 to-emergency-600 rounded-lg flex items-center justify-center shadow-glow-emergency">
              <span className="text-2xl">🚑</span>
            </div>
            <span className="text-xl font-display font-bold text-white">
              PetAmbulance
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-emergency-400 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-emergency-400 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('coverage')}
              className="text-white hover:text-emergency-400 transition-colors font-medium"
            >
              Coverage
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-emergency-400 transition-colors font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="btn-emergency text-sm px-6 py-2"
            >
              🚨 Emergency Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-down">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-emergency-400 transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-emergency-400 transition-colors font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('coverage')}
                className="text-white hover:text-emergency-400 transition-colors font-medium text-left"
              >
                Coverage
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-white hover:text-emergency-400 transition-colors font-medium text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="btn-emergency text-sm w-full"
              >
                🚨 Emergency Call
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
