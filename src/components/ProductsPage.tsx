import { useState } from 'react';
import { motion } from 'motion/react';
import { Filter, Calendar, CheckCircle2, TrendingUp, Users, Shield, Zap } from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (page: string) => void;
}

export function ProductsPage({ onNavigate }: ProductsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'education', name: 'Education' },
    { id: 'tourism', name: 'Tourism' },
    { id: 'billing', name: 'Billing Systems' },
  ];

  const products = [
    {
      id: 1,
      name: 'J and E Study Abroad',
      category: 'education',
      tagline: 'International Education Consulting Platform',
      description: 'Comprehensive education consulting website connecting students with international study opportunities and visa guidance.',
      image: 'https://images.unsplash.com/photo-1563477709790-27c59ddaa002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkeSUyMGFicm9hZCUyMGVkdWNhdGlvbiUyMGNvbnN1bHRpbmd8ZW58MXx8fHwxNzY5OTM1OTA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: '🎓',
      features: [
        { title: 'University Selection', benefit: 'Browse and compare international universities' },
        { title: 'Visa Assistance', benefit: 'Complete visa application support and guidance' },
        { title: 'Application Processing', benefit: 'Streamlined university application management' },
        { title: 'Student Portal', benefit: 'Track application status in real-time' },
        { title: 'Document Management', benefit: 'Secure upload and verification system' },
        { title: 'Consultation Booking', benefit: 'Schedule sessions with education counselors' },
      ],
      benefits: [
        { icon: Users, text: 'Help 500+ students annually' },
        { icon: TrendingUp, text: '95% visa approval rate' },
        { icon: Shield, text: 'Secure document handling' },
      ]
    },
    {
      id: 2,
      name: 'Modus Safaris',
      category: 'tourism',
      tagline: 'Premium Safari Booking Platform',
      description: 'Dynamic tourism and safari booking platform featuring real-time availability, tour packages, and seamless booking experience.',
      image: 'https://images.unsplash.com/photo-1759130970043-1fc042b4d187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjB3aWxkbGlmZSUyMHRvdXJpc20lMjBhZnJpY2F8ZW58MXx8fHwxNzY5OTM1OTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: '🦁',
      features: [
        { title: 'Tour Packages', benefit: 'Curated safari and wildlife tour options' },
        { title: 'Real-time Booking', benefit: 'Instant availability and confirmation' },
        { title: 'Payment Gateway', benefit: 'Secure online payment processing' },
        { title: 'Customer Reviews', benefit: 'Verified guest testimonials and ratings' },
        { title: 'Itinerary Builder', benefit: 'Customize your safari experience' },
        { title: 'Mobile Responsive', benefit: 'Book from anywhere on any device' },
      ],
      benefits: [
        { icon: Zap, text: 'Process bookings instantly' },
        { icon: TrendingUp, text: '300+ safari packages available' },
        { icon: Users, text: '4.8/5 customer satisfaction' },
      ]
    },
    {
      id: 3,
      name: 'UGPAY WiFi Billing System',
      category: 'billing',
      tagline: 'Advanced WiFi & Billing Management',
      description: 'Advanced billing and invoicing system with automated payment processing, client management, and financial reporting.',
      image: 'https://images.unsplash.com/photo-1735825764457-ffdf0b5aa5dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWxsaW5nJTIwaW52b2ljZSUyMHBheW1lbnQlMjBzeXN0ZW18ZW58MXx8fHwxNzY5OTM1OTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: '💳',
      features: [
        { title: 'Invoice Generation', benefit: 'Automated invoice creation and delivery' },
        { title: 'Payment Processing', benefit: 'Multiple payment method integration' },
        { title: 'Client Management', benefit: 'Comprehensive customer database' },
        { title: 'Financial Reports', benefit: 'Detailed revenue and expense tracking' },
        { title: 'WiFi Voucher System', benefit: 'Generate and manage WiFi access codes' },
        { title: 'Usage Analytics', benefit: 'Track bandwidth and user statistics' },
      ],
      benefits: [
        { icon: Shield, text: 'Secure payment processing' },
        { icon: TrendingUp, text: 'Reduce billing errors by 95%' },
        { icon: Users, text: 'Manage unlimited clients' },
      ]
    },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1765256931300-ceeaed648d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbiUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdHxlbnwxfHx8fDE3Njk5MzM0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Digital Innovation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F2027]/95 via-[#1B3A4B]/90 to-[#10B981]/85" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful software solutions designed to transform your business operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-600">
              <Filter className="w-5 h-5" />
              <span className="font-semibold">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedCategory === category.id
                      ? 'bg-[#10B981] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl soft-shadow-xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-96 lg:h-auto overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-6 left-6">
                      <div className="w-20 h-20 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-5xl soft-shadow">
                        {product.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12">
                    <div className="mb-6">
                      <h2 className="text-4xl font-bold text-[#0F2027] mb-2">
                        {product.name}
                      </h2>
                      <p className="text-xl text-[#10B981] mb-4">{product.tagline}</p>
                      <p className="text-gray-600 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Key Benefits */}
                    <div className="mb-8">
                      <h4 className="font-bold text-[#0F2027] mb-4">Key Benefits</h4>
                      <div className="grid gap-3">
                        {product.benefits.map((benefit) => (
                          <div key={benefit.text} className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                              <benefit.icon className="w-5 h-5 text-[#10B981]" />
                            </div>
                            <span className="text-gray-700">{benefit.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Feature-Benefit Breakdown */}
                    <div className="mb-8">
                      <h4 className="font-bold text-[#0F2027] mb-4">Features & Benefits</h4>
                      <div className="grid gap-3">
                        {product.features.map((feature) => (
                          <div key={feature.title} className="flex items-start space-x-3">
                            <CheckCircle2 className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-semibold text-[#0F2027]">{feature.title}</div>
                              <div className="text-sm text-gray-600">{feature.benefit}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors soft-shadow flex items-center justify-center space-x-2"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>View Product</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F2027]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Not Sure Which Product is Right for You?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team of experts is ready to help you find the perfect solution
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-white text-[#10B981] rounded-xl hover:bg-gray-100 transition-colors soft-shadow-lg"
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}