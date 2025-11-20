import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Heart, Users, Star, Sparkles } from 'lucide-react';

export function Vision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const values = [
    {
      icon: Star,
      title: 'Integrity',
      description: 'Honest, transparent care you can trust'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Collaborative approach for best results'
    },
    {
      icon: Sparkles,
      title: 'Humility',
      description: 'Always learning, always improving'
    },
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Gentle care with genuine empathy'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-[#0B1741] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-[#D4AF37]/20 backdrop-blur-sm rounded-full px-5 py-2 mb-4">
            <span className="text-[#D4AF37]">Our Vision</span>
          </div>
          <h2 className="text-white mb-6">Committed to Excellence</h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
            Our mission is to provide exceptional dental care that transforms lives. 
            We believe in building lasting relationships with our patients through trust, 
            innovation, and unwavering commitment to their oral health and wellbeing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon size={28} className="text-[#D4AF37]" />
              </div>
              <h4 className="text-white mb-2">{value.title}</h4>
              <p className="text-white/70 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
