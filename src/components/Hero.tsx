const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #22c55e 100%)',
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emergency-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-calm-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-white mb-6 leading-tight">
            Emergency Pet Care
            <br />
            <span className="text-emergency-400">When Seconds Count</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
            Professional veterinary ambulance service available 24/7. 
            Equipped with life-saving equipment and trained technicians.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="glass px-6 py-3 rounded-full">
              <span className="text-white font-semibold">⏰ 24/7 Available</span>
            </div>
            <div className="glass px-6 py-3 rounded-full">
              <span className="text-white font-semibold">✓ Licensed & Insured</span>
            </div>
            <div className="glass px-6 py-3 rounded-full">
              <span className="text-white font-semibold">📍 GPS Tracking</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToBooking}
              className="btn-emergency text-lg px-10 py-5"
            >
              🚨 Request Emergency Pickup
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="glass px-10 py-5 rounded-lg font-bold text-white hover:bg-white/20 transition-all duration-300"
            >
              Learn More
            </button>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-dark p-6 rounded-xl">
              <div className="text-4xl font-bold text-emergency-400 mb-2">5 min</div>
              <div className="text-white/80">Average Response Time</div>
            </div>
            <div className="glass-dark p-6 rounded-xl">
              <div className="text-4xl font-bold text-calm-400 mb-2">10,000+</div>
              <div className="text-white/80">Pets Safely Transported</div>
            </div>
            <div className="glass-dark p-6 rounded-xl">
              <div className="text-4xl font-bold text-primary-400 mb-2">98%</div>
              <div className="text-white/80">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
