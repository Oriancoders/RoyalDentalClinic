import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield } from 'lucide-react';

export function Insurance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const insuranceLogos = [
    { name: 'AXA', color: '#00008F' },
    { name: 'BUPA', color: '#005EB8' },
    { name: 'MetLife', color: '#0097D6' },
    { name: 'Cigna', color: '#F47920' },
    { name: 'AIG', color: '#0033A1' },
    { name: 'Allianz', color: '#003781' },
    { name: 'Daman', color: '#00A651' },
    { name: 'Nextcare', color: '#E31837' }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-[#E8F0FE]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#D4AF37]/10 rounded-full px-5 py-2 mb-4">
            <span className="text-[#D4AF37]">Insurance Partners</span>
          </div>
          <h2 className="text-[#0B1741] mb-4">We Accept Major Insurance</h2>
          <p className="text-[#0B1741]/70 max-w-2xl mx-auto text-lg">
            Making quality dental care accessible with a wide range of insurance partners
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {insuranceLogos.map((insurance, index) => (
            <motion.div
              key={insurance.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-[#E8F0FE] group"
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-[#0B1741]/10 to-[#D4AF37]/10 rounded-full flex items-center justify-center group-hover:from-[#D4AF37]/20 group-hover:to-[#0B1741]/20 transition-all duration-300">
                  <Shield size={24} style={{ color: insurance.color }} />
                </div>
                <div className="text-[#0B1741] tracking-wide" style={{ color: insurance.color }}>
                  {insurance.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-[#0B1741]/70 mb-6">
            Don't see your insurance provider? Contact us to check coverage options
          </p>
          <button className="bg-[#0B1741] text-white px-8 py-3 rounded-full hover:bg-[#1a2d6b] transition-all duration-300 hover:shadow-lg">
            Check Your Coverage
          </button>
        </motion.div>
      </div>
    </section>
  );
}
