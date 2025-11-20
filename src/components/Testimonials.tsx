import { useState } from 'react';
import type { Testimonial } from '../types';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      petName: 'Max',
      petType: 'Golden Retriever',
      rating: 5,
      comment:
        'When Max had a seizure at 2 AM, PetAmbulance arrived in 4 minutes. The technician was incredibly professional and kept me calm while monitoring Max. They saved his life!',
      date: '2024-11-15',
    },
    {
      id: '2',
      name: 'Michael Chen',
      petName: 'Luna',
      petType: 'Persian Cat',
      rating: 5,
      comment:
        'Luna needed emergency surgery and the ambulance service coordinated everything perfectly. GPS tracking let me follow them to the hospital. Outstanding service!',
      date: '2024-11-10',
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      petName: 'Charlie',
      petType: 'Beagle',
      rating: 5,
      comment:
        'Professional, compassionate, and fast. Charlie was in good hands from pickup to delivery. The oxygen support in the ambulance was crucial. Highly recommend!',
      date: '2024-11-05',
    },
    {
      id: '4',
      name: 'David Thompson',
      petName: 'Bella',
      petType: 'Labrador',
      rating: 5,
      comment:
        'After Bella\'s accident, every second counted. The team arrived quickly, handled her with care, and communicated with the vet hospital. True lifesavers!',
      date: '2024-10-28',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
            What Pet Parents <span className="gradient-text">Say</span>
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from families we've helped in their time of need
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="card max-w-4xl mx-auto">
            {/* Rating Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-8 h-8 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-xl text-gray-700 text-center mb-8 italic leading-relaxed">
              "{currentTestimonial.comment}"
            </blockquote>

            {/* Author Info */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {currentTestimonial.name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    Pet parent of {currentTestimonial.petName} ({currentTestimonial.petType})
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-600 transition-all duration-200 flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentIndex
                        ? 'bg-primary-600 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-600 transition-all duration-200 flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">2,500+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">99%</div>
            <div className="text-gray-600">Would Recommend</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
