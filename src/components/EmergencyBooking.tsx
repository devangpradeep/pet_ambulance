import { useState } from 'react';
import type { BookingFormData, PetType } from '../types';

const EmergencyBooking = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    petType: '',
    emergencyLevel: 'urgent',
    location: '',
    contactName: '',
    contactPhone: '',
    petName: '',
    description: '',
  });

  const petTypes: PetType[] = [
    { id: 'dog', name: 'Dog', icon: '🐕' },
    { id: 'cat', name: 'Cat', icon: '🐈' },
    { id: 'bird', name: 'Bird', icon: '🦜' },
    { id: 'rabbit', name: 'Rabbit', icon: '🐰' },
    { id: 'exotic', name: 'Exotic Pet', icon: '🦎' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Emergency request submitted! Our team will contact you immediately.');
    console.log('Booking submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
            <span className="gradient-emergency-text">Emergency Booking</span>
          </h2>
          <p className="text-xl text-gray-600">
            Fill out the form below and we'll dispatch help immediately
          </p>
        </div>

        {/* Booking Form */}
        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Pet Type Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Pet Type *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {petTypes.map((pet) => (
                  <button
                    key={pet.id}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, petType: pet.id }))}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      formData.petType === pet.id
                        ? 'border-primary-500 bg-primary-50 shadow-glow'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <div className="text-3xl mb-1">{pet.icon}</div>
                    <div className="text-sm font-medium text-gray-700">{pet.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Emergency Level */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Emergency Level *
              </label>
              <select
                name="emergencyLevel"
                value={formData.emergencyLevel}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                required
              >
                <option value="critical">🚨 Critical - Life Threatening</option>
                <option value="urgent">⚠️ Urgent - Needs Immediate Care</option>
                <option value="scheduled">📅 Scheduled - Non-Emergency</option>
              </select>
            </div>

            {/* Pet Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Pet Name *
              </label>
              <input
                type="text"
                name="petName"
                value={formData.petName}
                onChange={handleChange}
                placeholder="Enter your pet's name"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Pickup Location *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter your full address"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                required
              />
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Situation Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Please describe the emergency situation..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn-emergency w-full text-lg">
              🚨 Request Immediate Dispatch
            </button>

            {/* Emergency Hotline */}
            <div className="text-center pt-4 border-t-2 border-gray-100">
              <p className="text-gray-600 mb-2">Or call our emergency hotline:</p>
              <a
                href="tel:+1-800-PET-HELP"
                className="text-2xl font-bold text-emergency-600 hover:text-emergency-700"
              >
                📞 1-800-PET-HELP
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmergencyBooking;
