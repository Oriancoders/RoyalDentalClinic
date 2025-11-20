import { motion } from 'motion/react';
import { Phone, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1744723856265-866d19b9cf1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcGF0aWVudCUyMGNsaW5pY3xlbnwxfHx8fDE3NjM2NjYyNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Dental Clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1741]/95 via-[#0B1741]/85 to-[#0B1741]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B1741]/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto  text-center px-4 sm:px-6 lg:px-8 py-32 mt-10 ">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block bg-[#D4AF37]/20 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full px-5 py-2 mb-6"
            >
              <span className="text-[#E8C870]"> Premium Dental Care in Dubai</span>
            </motion.div>

            <h1 className="text-white mb-6">
              Welcome to Royal Crown
              <span className="block text-[#D4AF37]">Dental Clinic</span>
            </h1>

            <p className="text-white/90 text-xl mb-8 leading-relaxed">
              Experience world-class dental care with state-of-the-art technology 
              and compassionate professionals. Your smile is our priority, available 
              24/7 for your convenience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center ">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#D4AF37] to-[#E8C870] text-[#0B1741] px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                Book Appointment Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Us 24/7
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-8 text-white/80 justify-center"
            >
              <div className="flex items-center  gap-2">
                <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#D4AF37] text-xl">✓</span>
                </div>
                <div>
                  <div className="text-white">15+ Years</div>
                  <div className="text-sm text-white/60">Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#D4AF37] text-xl">✓</span>
                </div>
                <div>
                  <div className="text-white">10,000+</div>
                  <div className="text-sm text-white/60">Happy Patients</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#D4AF37] text-xl">✓</span>
                </div>
                <div>
                  <div className="text-white">24/7</div>
                  <div className="text-sm text-white/60">Available</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>
  );
}
