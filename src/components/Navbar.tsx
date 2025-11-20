import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', hasSubmenu: false },
    { name: 'Our Team', hasSubmenu: false },
    { name: 'Gallery', hasSubmenu: false },
    { 
      name: 'Services', 
      hasSubmenu: true,
      submenu: [
        'Dental Implant',
        'Orthodontics',
        'Porcelain Veneers',
        'Root Canal Treatment',
        'Filling',
        'Crowns'
      ]
    },
    { name: 'Promotions', hasSubmenu: false },
    { name: 'Contact Us', hasSubmenu: false },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://lh3.googleusercontent.com/utBujownIP-Or9ebQ52xHvN7QWWSvKoykaWD1oAXpQFfxrwQOcHf-GcaOEUM6TIvheLxK0kGtBAE1iotEku5regdGw_GK2k26CU=s0"
              alt="Royal Dental Logo"
              className="w-20 h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <span className="text-[#0B1741] hover:text-[#D4AF37] transition-colors cursor-default py-2 inline-block">
                  {item.name}
                </span>
                {item.hasSubmenu && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                    {item.submenu?.map((subItem) => (
                      <span
                        key={subItem}
                        className="block px-4 py-2 text-[#0B1741] hover:bg-[#E8F0FE] hover:text-[#D4AF37] transition-colors cursor-default"
                      >
                        {subItem}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="bg-gradient-to-r from-[#D4AF37] to-[#E8C870] text-[#0B1741] px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#0B1741] p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <span className="block px-4 py-2 text-[#0B1741] hover:bg-[#E8F0FE] rounded-lg cursor-default">
                      {item.name}
                    </span>
                    {item.hasSubmenu && (
                      <div className="pl-6 space-y-1 mt-1">
                        {item.submenu?.map((subItem) => (
                          <span
                            key={subItem}
                            className="block px-4 py-2 text-sm text-[#0B1741]/70 hover:bg-[#E8F0FE] rounded-lg cursor-default"
                          >
                            {subItem}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <button className="w-full mt-4 bg-gradient-to-r from-[#D4AF37] to-[#E8C870] text-[#0B1741] px-6 py-3 rounded-full">
                  Book Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
