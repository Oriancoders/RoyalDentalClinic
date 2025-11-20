import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const videos = [
    {
      title: 'Smile Transformation Journey',
      thumbnail: 'https://images.unsplash.com/photo-1560181275-a65519fd0ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNtaWxlJTIwdGVldGh8ZW58MXx8fHwxNzYzNjY2MjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'See how we transform smiles with our advanced dental procedures'
    },
    {
      title: 'Before & After Results',
      thumbnail: 'https://images.unsplash.com/photo-1704455306925-1401c3012117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjM1NTYyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Real patient transformations and their journey to a perfect smile'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#E8F0FE]/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#D4AF37]/10 rounded-full px-5 py-2 mb-4">
            <span className="text-[#D4AF37]">Real Results</span>
          </div>
          <h2 className="text-[#0B1741] mb-4">See The Difference</h2>
          <p className="text-[#0B1741]/70 max-w-2xl mx-auto text-lg">
            Watch real patient transformations and discover how we create beautiful, healthy smiles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-96">
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1741]/90 via-[#0B1741]/50 to-transparent"></div>
                
                {/* Play Button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                >
                  <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-2xl group-hover:bg-[#E8C870] transition-colors duration-300">
                    <Play size={32} className="text-[#0B1741] ml-1" fill="#0B1741" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h4 className="text-white mb-2">{video.title}</h4>
                  <p className="text-white/80">{video.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
