import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logoImage from 'figma:asset/3d143a44587c50b97e25faadf0119c39eac1d3a1.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: 'JandE Study Abroad', path: 'products' },
    { name: 'Modus Safaris', path: 'products' },
    { name: 'WiFi Billing System', path: 'products' },
    { name: 'View All Products', path: 'products' },
  ];

  const serviceLinks = [
    { name: 'Software Development', path: 'services' },
    { name: 'Web Development', path: 'services' },
    { name: 'IT Infrastructure', path: 'services' },
    { name: 'Cloud Solutions', path: 'services' },
  ];

  const companyLinks = [
    { name: 'About Us', path: 'about' },
    { name: 'Our Team', path: 'about' },
    // { name: 'Careers', path: 'about' },
    { name: 'Contact', path: 'contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: '#', name: 'Instagram' },
  ];

  return (
    <footer className="bg-[#0F2027] text-white border-t border-[#10B981]/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src={logoImage} 
                alt="GARUGA IT Logo" 
                className="h-16 w-16 mr-3"
              />
              <span className="text-2xl font-bold text-white">GARUGA IT</span>
            </div>
            <p className="text-[#94A3B8] mb-6 leading-relaxed">
              A premium ICT and Software Development firm dedicated to delivering innovative solutions that transform businesses and drive digital excellence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#10B981] mt-0.5" />
                <div>
                  <p className="text-sm text-[#94A3B8]">Email</p>
                  <a href="mailto:info@garugait.com" className="text-white hover:text-[#10B981] transition-colors">
                    info@garugait.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#10B981] mt-0.5" />
                <div>
                  <p className="text-sm text-[#94A3B8]">Phone</p>
                  <a href="tel:+1234567890" className="text-white hover:text-[#10B981] transition-colors">
                    +256 757 136 062
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#10B981] mt-0.5" />
                <div>
                  <p className="text-sm text-[#94A3B8]">Location</p>
                  <p className="text-white">Kampala Uganda</p>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="text-[#94A3B8] hover:text-[#10B981] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="text-[#94A3B8] hover:text-[#10B981] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="text-[#94A3B8] hover:text-[#10B981] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} GARUGA IT. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-[#1B3A4B] hover:bg-[#10B981] hover:text-white flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-[#94A3B8]">
              <button className="hover:text-[#10B981] transition-colors">Privacy Policy</button>
              <button className="hover:text-[#10B981] transition-colors">Terms of Service</button>
              <button className="hover:text-[#10B981] transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}