import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyUs } from './components/WhyUs';
import { Vision } from './components/Vision';
import { Services } from './components/Services';
import { VideoSection } from './components/VideoSection';
import { Testimonials } from './components/Testimonials';
import { Insurance } from './components/Insurance';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhyUs />
      <Vision />
      <Services />
      <VideoSection />
      <Testimonials />
      <Insurance />
      <Footer />
    </div>
  );
}
