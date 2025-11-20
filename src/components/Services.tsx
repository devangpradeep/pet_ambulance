import type { Service } from '../types';

const Services = () => {
  const services: Service[] = [
    {
      id: '1',
      title: 'Emergency Transport',
      description: 'Immediate response for critical situations requiring urgent veterinary care.',
      icon: '🚨',
      features: [
        'Under 5-minute response time',
        'Life support equipment onboard',
        'Trained veterinary technicians',
        'Direct hospital coordination',
      ],
    },
    {
      id: '2',
      title: 'Critical Care Transit',
      description: 'Specialized transport with continuous monitoring for critically ill pets.',
      icon: '💉',
      features: [
        'Oxygen therapy available',
        'Temperature-controlled environment',
        'IV fluid administration',
        'Continuous vital monitoring',
      ],
    },
    {
      id: '3',
      title: 'Scheduled Transfers',
      description: 'Pre-planned transportation between veterinary facilities or to specialists.',
      icon: '📅',
      features: [
        'Flexible scheduling',
        'Inter-facility transfers',
        'Specialist appointments',
        'Comfortable pet carriers',
      ],
    },
    {
      id: '4',
      title: 'Post-Surgery Transport',
      description: 'Safe and gentle transportation for pets recovering from surgery.',
      icon: '🏥',
      features: [
        'Extra gentle handling',
        'Pain management support',
        'Recovery monitoring',
        'Home delivery service',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive emergency and scheduled pet transportation services tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="card group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-calm-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center shadow-glow">
          <h3 className="text-2xl font-display font-bold text-white mb-4">
            All Services Include
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-white">
              <div className="text-3xl mb-2">📱</div>
              <div className="font-semibold">Real-Time GPS Tracking</div>
            </div>
            <div className="text-white">
              <div className="text-3xl mb-2">👨‍⚕️</div>
              <div className="font-semibold">Certified Technicians</div>
            </div>
            <div className="text-white">
              <div className="text-3xl mb-2">🛡️</div>
              <div className="font-semibold">Fully Insured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
