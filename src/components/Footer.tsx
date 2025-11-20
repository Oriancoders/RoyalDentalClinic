import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1741] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#E8C870] rounded-lg flex items-center justify-center">
                <span className="text-2xl">👑</span>
              </div>
              <div>
                <div className="text-white tracking-tight">Royal Crown</div>
                <div className="text-[#D4AF37] text-sm">Dental Clinic</div>
              </div>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Your trusted partner for exceptional dental care in Dubai. Creating beautiful, healthy smiles since 2008.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-all duration-300 cursor-pointer"
                >
                  <Icon size={18} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Our Team', 'Gallery', 'Services', 'Promotions', 'Contact Us'].map((link) => (
                <li key={link}>
                  <span className="text-white/70 hover:text-[#D4AF37] transition-colors cursor-default">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Dental Implants', 'Orthodontics', 'Porcelain Veneers', 'Root Canal', 'Fillings', 'Crowns'].map((service) => (
                <li key={service}>
                  <span className="text-white/70 hover:text-[#D4AF37] transition-colors cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                <span className="text-white/70">
                  Dubai Healthcare City, Building 64, Unit 201
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span className="text-white/70">+971 4 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span className="text-white/70">info@royalcrowndental.ae</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                <div className="text-white/70">
                  <div>Mon - Fri: 9:00 AM - 9:00 PM</div>
                  <div>Sat - Sun: 10:00 AM - 6:00 PM</div>
                  <div className="text-[#D4AF37] mt-1">24/7 Emergency</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Emergency Call Button */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#E8C870]/20 backdrop-blur-sm border border-[#D4AF37]/30 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-white mb-1">Dental Emergency?</h4>
              <p className="text-white/70">We're available 24/7 for urgent dental care</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D4AF37] text-[#0B1741] px-8 py-3 rounded-full hover:bg-[#E8C870] transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
            >
              <Phone size={20} />
              Call Emergency Line
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm text-center md:text-left">
            © {currentYear} Royal Crown Dental Clinic. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/60">
            <span className="hover:text-[#D4AF37] transition-colors cursor-default">Privacy Policy</span>
            <span className="hover:text-[#D4AF37] transition-colors cursor-default">Terms of Service</span>
            <span className="hover:text-[#D4AF37] transition-colors cursor-default">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
