import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import EmergencyBooking from './components/EmergencyBooking';
import CoverageMap from './components/CoverageMap';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <EmergencyBooking />
      <CoverageMap />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
