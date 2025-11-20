import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Business Executive',
      image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzYyOTkxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      text: 'Royal Crown Dental transformed my smile beyond expectations! The team is incredibly professional, and the results are simply amazing. I finally have the confidence to smile freely.',
      rating: 5,
      date: '2 weeks ago'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzY0OTgxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      text: 'After years of dental anxiety, I finally found a clinic that understands patient comfort. The dental implant procedure was painless, and the staff made me feel completely at ease throughout.',
      rating: 5,
      date: '1 month ago'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Teacher',
      image: 'https://images.unsplash.com/photo-1630438994394-3deff7a591bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBhdGllbnQlMjBzbWlsaW5nfGVufDF8fHx8MTc2MzYzNDkwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      text: 'Best dental experience ever! From the moment I walked in, I felt welcomed and cared for. My porcelain veneers look so natural, people think they\'re my real teeth!',
      rating: 5,
      date: '3 weeks ago'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-[#0B1741] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#D4AF37] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#D4AF37]/20 backdrop-blur-sm rounded-full px-5 py-2 mb-4">
            <span className="text-[#D4AF37]">Testimonials</span>
          </div>
          <h2 className="text-white mb-4">What Our Patients Say</h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Real stories from real patients who trusted us with their smiles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-[#E8F0FE] rounded-full flex items-center justify-center">
                <Quote size={24} className="text-[#D4AF37]" />
              </div>

              {/* Profile */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4AF37]">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-[#0B1741]">{testimonial.name}</div>
                  <div className="text-[#0B1741]/60 text-sm">{testimonial.role}</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[#0B1741]/80 mb-4 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Date */}
              <div className="text-[#0B1741]/50 text-sm">{testimonial.date}</div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 3).map((testimonial, i) => (
                <div key={i} className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1 text-white">
              <Star size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
              <span>4.9/5</span>
              <span className="text-white/60">from 500+ reviews</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
