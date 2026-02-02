import { motion } from 'motion/react';
import { Code, Globe, Server, CheckCircle2, ArrowRight, Sparkles, Zap, Shield, Palette } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      id: 1,
      icon: Code,
      title: 'Custom Software Development',
      tagline: 'Tailored Solutions for Your Unique Needs',
      description: 'We create bespoke software solutions that perfectly align with your business processes and goals. Our expert developers use cutting-edge technologies to build scalable, efficient, and maintainable applications.',
      image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc2OTI5OTYzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Requirements Analysis & Consultation',
        'UI/UX Design & Prototyping',
        'Full-Stack Development',
        'Quality Assurance & Testing',
        'Deployment & Maintenance',
        'Legacy System Modernization',
      ],
      benefits: [
        { icon: Sparkles, title: 'Innovative Solutions', description: 'Cutting-edge technology stack' },
        { icon: Zap, title: 'Rapid Development', description: 'Agile methodology for faster delivery' },
        { icon: Shield, title: 'Secure & Reliable', description: 'Enterprise-grade security' },
      ],
      stats: [
        { value: '5+', label: 'Projects Completed' },
        { value: '98%', label: 'Client Satisfaction' },
        { value: '24/7', label: 'Support Available' },
      ]
    },
    {
      id: 2,
      icon: Globe,
      title: 'Web Development',
      tagline: 'Modern, Responsive, & High-Performance Websites',
      description: 'From corporate websites to complex web applications, we deliver stunning digital experiences that engage users and drive results. Our web solutions are optimized for performance, SEO, and user experience.',
      image: 'https://images.unsplash.com/photo-1624225322963-a453470735c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzY5MzQ5MTI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Responsive Web Design',
        'E-Commerce Solutions',
        'Content Management Systems',
        'Progressive Web Apps (PWA)',
        'API Development & Integration',
        'Performance Optimization',
      ],
      benefits: [
        { icon: Sparkles, title: 'Beautiful Design', description: 'Pixel-perfect user interfaces' },
        { icon: Zap, title: 'Lightning Fast', description: 'Optimized for peak performance' },
        { icon: Shield, title: 'SEO Optimized', description: 'Built for search engine success' },
      ],
      stats: [
        { value: '5+', label: 'Websites Launched' },
        { value: '99.9%', label: 'Uptime Guarantee' },
        { value: '<2s', label: 'Average Load Time' },
      ]
    },
    {
      id: 3,
      icon: Server,
      title: 'IT Infrastructure & Cloud Solutions',
      tagline: 'Scalable, Secure, & Reliable Infrastructure',
      description: 'Build a solid foundation for your digital operations with our comprehensive infrastructure services. We design, implement, and manage robust IT systems that scale with your business.',
      image: 'https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjkzNDkxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Cloud Migration & Strategy',
        'Server Setup & Management',
        'Network Design & Security',
        'Backup & Disaster Recovery',
        'DevOps & CI/CD Pipeline',
        '24/7 Monitoring & Support',
      ],
      benefits: [
        { icon: Sparkles, title: 'Cloud-Native', description: 'AWS, Azure, Google Cloud expertise' },
        { icon: Zap, title: 'Auto-Scaling', description: 'Elastic infrastructure that grows with you' },
        { icon: Shield, title: 'Enterprise Security', description: 'Multi-layered protection' },
      ],
      stats: [
        { value: '1+', label: 'Infrastructure Projects' },
        { value: '99.99%', label: 'System Availability' },
        { value: '15min', label: 'Average Response Time' },
      ]
    },
    {
      id: 4,
      icon: Palette,
      title: 'Graphic Design',
      tagline: 'Visual Identity That Captivates & Converts',
      description: 'Transform your brand with stunning visual designs that communicate your message effectively. From logos to marketing materials, we create compelling graphics that resonate with your audience and elevate your brand presence.',
      image: 'https://images.unsplash.com/photo-1512645592367-97ba8a9d4035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY5OTI2MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Logo Design & Brand Identity',
        'Marketing Materials & Brochures',
        'Social Media Graphics',
        'Infographics & Data Visualization',
        'Print & Digital Design',
        'Brand Guidelines Development',
      ],
      benefits: [
        { icon: Sparkles, title: 'Creative Excellence', description: 'Award-winning design aesthetics' },
        { icon: Zap, title: 'Fast Turnaround', description: 'Quick delivery without compromising quality' },
        { icon: Shield, title: 'Brand Consistency', description: 'Cohesive visual identity across all platforms' },
      ],
      stats: [
        { value: '10+', label: 'Design Projects' },
        { value: '100%', label: 'Client Satisfaction' },
        { value: '48hr', label: 'Average Turnaround' },
      ]
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1759884247387-a5d791ffb2bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzY5ODkxNDk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Software Development Team"
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
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Zig-Zag Layout */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Section */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden soft-shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/20 to-[#0F2027]/20" />
                    
                    {/* Stats Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        {service.stats.map((stat) => (
                          <div key={stat.label}>
                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-xs text-gray-300">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#10B981] to-[#059669] mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0F2027] mb-3">
                      {service.title}
                    </h2>
                    <p className="text-xl text-[#10B981] mb-6">{service.tagline}</p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h4 className="font-bold text-[#0F2027] mb-4">What We Offer</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="grid gap-4 mb-8">
                    {service.benefits.map((benefit) => (
                      <div key={benefit.title} className="flex items-start space-x-4 p-4 bg-white rounded-xl soft-shadow">
                        <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-6 h-6 text-[#10B981]" />
                        </div>
                        <div>
                          <div className="font-bold text-[#0F2027] mb-1">{benefit.title}</div>
                          <div className="text-sm text-gray-600">{benefit.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onNavigate('contact')}
                    className="px-8 py-4 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors soft-shadow flex items-center space-x-2"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2027] mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
              { step: '02', title: 'Planning', description: 'Creating a strategic roadmap' },
              { step: '03', title: 'Development', description: 'Building your solution' },
              { step: '04', title: 'Delivery', description: 'Launch and ongoing support' },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">{phase.step}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0F2027] mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0F2027] via-[#1B3A4B] to-[#10B981]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help you achieve your goals
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