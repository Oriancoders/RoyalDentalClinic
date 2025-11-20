import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Clock, Shield, Users } from 'lucide-react';

export function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Award,
      title: 'Expert Specialists',
      description: 'Board-certified dentists with international training and decades of combined experience.',
      color: '#D4AF37'
    },
    {
      icon: Shield,
      title: 'Advanced Technology',
      description: 'State-of-the-art equipment and latest dental techniques for precise, comfortable treatments.',
      color: '#0B1741'
    },
    {
      icon: Clock,
      title: '24/7 Emergency Care',
      description: 'Round-the-clock availability for dental emergencies. We\'re here whenever you need us.',
      color: '#D4AF37'
    },
    {
      icon: Users,
      title: 'Patient-Centered Care',
      description: 'Personalized treatment plans designed around your unique needs, comfort, and goals.',
      color: '#0B1741'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-[#E8F0FE]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#D4AF37]/10 rounded-full px-5 py-2 mb-4">
            <span className="text-[#D4AF37]">Why Choose Us</span>
          </div>
          <h2 className="text-[#0B1741] mb-4">What Makes Us Unique</h2>
          <p className="text-[#0B1741]/70 max-w-2xl mx-auto text-lg">
            Combining cutting-edge technology with compassionate care to deliver exceptional dental experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E8F0FE]"
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon size={32} style={{ color: feature.color }} />
              </div>
              <h4 className="text-[#0B1741] mb-3">{feature.title}</h4>
              <p className="text-[#0B1741]/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
