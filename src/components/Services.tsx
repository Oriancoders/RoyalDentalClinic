import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const services = [
    {
      title: 'Dental Implants',
      description: 'Permanent solution for missing teeth with natural-looking results',
      image: 'https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50JTIwcHJvY2VkdXJlfGVufDF8fHx8MTc2MzU3OTgyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-[#0B1741] to-[#1a2d6b]'
    },
    {
      title: 'Orthodontics',
      description: 'Straighten your teeth with modern braces and clear aligners',
      image: 'https://images.unsplash.com/photo-1645118286859-0cf9c5c784b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RvbnRpY3MlMjBicmFjZXMlMjBzbWlsZXxlbnwxfHx8fDE3NjM2NjYyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-[#D4AF37] to-[#E8C870]'
    },
    {
      title: 'Porcelain Veneers',
      description: 'Transform your smile with custom-crafted porcelain veneers',
      image: 'https://images.unsplash.com/photo-1562330743-fbc6ef07ca78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JjZWxhaW4lMjB2ZW5lZXJzJTIwdGVldGh8ZW58MXx8fHwxNzYzNjY2MjcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-[#0B1741] to-[#1a2d6b]'
    },
    {
      title: 'Root Canal Treatment',
      description: 'Pain-free root canal therapy to save your natural teeth',
      image: 'https://images.unsplash.com/photo-1643292116094-bd2fb3ed4d64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB0cmVhdG1lbnQlMjBwYXRpZW50fGVufDF8fHx8MTc2MzY2NjI3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-[#D4AF37] to-[#E8C870]'
    },
    {
      title: 'Dental Fillings',
      description: 'Restore cavities with durable, tooth-colored composite fillings',
      image: 'https://images.unsplash.com/photo-1630438994394-3deff7a591bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBhdGllbnQlMjBzbWlsaW5nfGVufDF8fHx8MTc2MzYzNDkwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-[#0B1741] to-[#1a2d6b]'
    },
    {
      title: 'Dental Crowns',
      description: 'Protect and restore damaged teeth with premium crowns',
      image: 'https://images.unsplash.com/photo-1560181275-a65519fd0ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNtaWxlJTIwdGVldGh8ZW58MXx8fHwxNzYzNjY2MjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-[#D4AF37] to-[#E8C870]'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#D4AF37]/10 rounded-full px-5 py-2 mb-4">
            <span className="text-[#D4AF37]">Our Services</span>
          </div>
          <h2 className="text-[#0B1741] mb-4">Comprehensive Dental Solutions</h2>
          <p className="text-[#0B1741]/70 max-w-2xl mx-auto text-lg">
            From routine check-ups to advanced procedures, we offer a full spectrum of dental services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E8F0FE]"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white mb-2">{service.title}</h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#0B1741]/70 mb-4">{service.description}</p>
                <button className="text-[#D4AF37] hover:text-[#0B1741] transition-colors flex items-center gap-2 group/btn">
                  Learn More
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
