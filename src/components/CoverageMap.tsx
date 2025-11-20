import type { CoverageArea } from '../types';

const CoverageMap = () => {
  const coverageAreas: CoverageArea[] = [
    { city: 'Downtown Metro', available: true, responseTime: '3-5 min' },
    { city: 'North District', available: true, responseTime: '5-8 min' },
    { city: 'East Side', available: true, responseTime: '4-7 min' },
    { city: 'West Hills', available: true, responseTime: '6-10 min' },
    { city: 'South Bay', available: true, responseTime: '5-9 min' },
    { city: 'Suburban Areas', available: true, responseTime: '10-15 min' },
  ];

  return (
    <section id="coverage" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Service <span className="text-calm-400">Coverage</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We serve the entire metropolitan area with rapid response times
          </p>
        </div>

        {/* Coverage Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Visualization */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-900 to-primary-700 rounded-2xl p-8 shadow-2xl">
              <div className="relative w-full h-full">
                {/* Central Hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-emergency-500 rounded-full flex items-center justify-center shadow-glow-emergency animate-pulse-slow">
                    <span className="text-3xl">🚑</span>
                  </div>
                  <div className="text-center mt-2 font-bold text-white">HQ</div>
                </div>

                {/* Coverage Circles */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 border-4 border-calm-400/30 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div
                    className="w-48 h-48 border-4 border-calm-400/20 rounded-full animate-pulse"
                    style={{ animationDelay: '0.5s' }}
                  ></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div
                    className="w-64 h-64 border-4 border-calm-400/10 rounded-full animate-pulse"
                    style={{ animationDelay: '1s' }}
                  ></div>
                </div>

                {/* Area Markers */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-calm-400 rounded-full shadow-lg"></div>
                <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-calm-400 rounded-full shadow-lg"></div>
                <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-calm-400 rounded-full shadow-lg"></div>
                <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-calm-400 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>

          {/* Coverage List */}
          <div className="space-y-4">
            {coverageAreas.map((area, index) => (
              <div
                key={index}
                className="glass-dark p-6 rounded-xl hover:bg-white/10 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        area.available ? 'bg-calm-400 shadow-glow' : 'bg-gray-500'
                      }`}
                    ></div>
                    <div>
                      <h3 className="text-lg font-semibold">{area.city}</h3>
                      <p className="text-sm text-gray-400">
                        Response: {area.responseTime}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      area.available
                        ? 'bg-calm-500/20 text-calm-400'
                        : 'bg-gray-700 text-gray-400'
                    }`}
                  >
                    {area.available ? '✓ Available' : 'Coming Soon'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="glass-dark p-8 rounded-2xl inline-block">
            <p className="text-lg mb-4">
              <span className="font-bold text-calm-400">Don't see your area?</span>
            </p>
            <p className="text-gray-300 mb-6">
              We're constantly expanding our coverage. Contact us to check availability.
            </p>
            <button className="btn-primary">
              Check Your Location
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageMap;
