import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from 'figma:asset/3d143a44587c50b97e25faadf0119c39eac1d3a1.png';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      name: 'Modus Safaris',
      description: 'a well optimised-mobile friendly tours and travel website',
      icon: '',
    },
    {
      name: 'J and E study abroad website',
      description: 'A study abroad consults website',
      icon: '',
    },
    {
      name: 'UGPAY billing system',
      description: 'A WiFi billing system',
      icon: '',
    },
  ];

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'Products', path: 'products', hasDropdown: true },
    { name: 'Services', path: 'services' },
    { name: 'About Us', path: 'about' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-morphism soft-shadow' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img 
              src={logoImage} 
              alt="GARUGA IT Logo" 
              className="h-16 w-16 mr-3"
            />
            <div>
              <span className="text-2xl font-bold text-white">GARUGA IT</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsProductsOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsProductsOpen(false)}
              >
                <button
                  onClick={() => !link.hasDropdown && onNavigate(link.path)}
                  className={`flex items-center space-x-1 transition-colors ${
                    currentPage === link.path
                      ? 'text-[#10B981] font-semibold'
                      : 'text-white hover:text-[#10B981]'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>

                {/* Mega Menu for Products */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80"
                      >
                        <div className="bg-[#0F2027] rounded-xl p-4 soft-shadow-lg border border-[#10B981]/20">
                          <div className="grid gap-2">
                            {products.map((product) => (
                              <button
                                key={product.name}
                                onClick={() => {
                                  onNavigate('products');
                                  setIsProductsOpen(false);
                                }}
                                className={`flex items-start p-3 rounded-lg transition-colors text-left ${
                                  currentPage === 'products'
                                    ? 'bg-[#10B981]/20 border border-[#10B981]/50'
                                    : 'hover:bg-[#10B981]/10'
                                }`}
                              >
                                <span className="text-2xl mr-3">{product.icon}</span>
                                <div>
                                  <div className={`font-semibold ${
                                    currentPage === 'products' ? 'text-[#10B981]' : 'text-white'
                                  }`}>
                                    {product.name}
                                  </div>
                                  <div className="text-sm text-[#94A3B8]">
                                    {product.description}
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-[#10B981]/20">
                            <button
                              onClick={() => {
                                onNavigate('products');
                                setIsProductsOpen(false);
                              }}
                              className="text-[#10B981] font-semibold text-sm hover:underline"
                            >
                              View All Products →
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('contact')}
              className="px-6 py-2.5 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors soft-shadow"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-[#1B3A4B] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-morphism border-t border-[#10B981]/20"
          >
<div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.hasDropdown ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                        className={`flex items-center justify-between w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          currentPage === link.path
                            ? 'bg-[#10B981] text-white'
                            : 'text-white hover:bg-[#1B3A4B]'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          isMobileProductsOpen ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Mobile Products Submenu */}
                      <AnimatePresence>
                        {isMobileProductsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-2 overflow-hidden"
                          >
                            {products.map((product) => (
                              <button
                                key={product.name}
                                onClick={() => {
                                  onNavigate('products');
                                  setIsMobileMenuOpen(false);
                                  setIsMobileProductsOpen(false);
                                }}
                                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                                  currentPage === 'products'
                                    ? 'bg-[#10B981]/20 border border-[#10B981]/50 text-[#10B981]'
                                    : 'text-white hover:bg-[#1B3A4B]'
                                }`}
                              >
                                <div className="font-semibold text-sm mb-1">{product.name}</div>
                                <div className="text-xs text-[#94A3B8]">{product.description}</div>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        onNavigate(link.path);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        currentPage === link.path
                          ? 'bg-[#10B981] text-white'
                          : 'text-white hover:bg-[#1B3A4B]'
                      }`}
                    >
                      {link.name}
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={() => {
                  onNavigate('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full px-4 py-2.5 bg-[#10B981] text-white rounded-lg hover:bg-[#059669] transition-colors"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}