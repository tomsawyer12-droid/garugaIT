import { motion } from 'motion/react';
import { Target, Heart, Zap, Users, Award, Shield, TrendingUp, Globe, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import beekaArnoldImage from 'figma:asset/4d9b0a6734c39d9ad0358963f61ac41f315bc977.png';
import atahoPrinceImage from '../assets/ataho-prince.jpg';
import rwendeireJoshuaImage from 'figma:asset/9830ef8174352715de651894e5d2285c8d24a5a2.png';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const timeline = [
    {
      year: '2024',
      title: 'The Beginning',
      description: 'GARUGA IT was founded with a vision to transform businesses through innovative technology solutions.',
      milestone: 'Company Founded'
    },
    {
      year: '2025',
      title: 'First Major Product',
      description: 'Launched Modus Safaris, our flagship tourism and safari booking platform.',
      milestone: 'Product Launch'
    },
    {
      year: '2026',
      title: 'Expansion & Innovation',
      description: 'Expanded our portfolio with UGPAY WiFi Billing System and J and E Study Abroad website.',
      milestone: 'Multiple Products'
    }
  ];

  const team = [
    {
      name: 'ATAHO PRINCE',
      role: 'Chief Executive Officer',
      image: atahoPrinceImage,
      bio: 'Visionary leader driving strategic growth and innovation',
    },
    {
      name: 'AYEBARE EUGINE',
      role: 'Software Developer',
      image: 'https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZmVzc2lvbmFsJTIwbWFufGVufDF8fHx8MTc2OTIzODM3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Passionate developer crafting efficient and scalable solutions',
    },
    {
      name: 'BEEKA ARNOLD',
      role: 'Full Stack Developer',
      image: beekaArnoldImage,
      bio: 'Full stack expert building end-to-end web applications',
    },
    {
      name: 'RWENDEIRE JOSHUA TRUTH',
      role: 'UI/UX Developer',
      image: rwendeireJoshuaImage,
      bio: 'Creative designer crafting intuitive user experiences',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
      color: '#10B981'
    },
    {
      icon: Heart,
      title: 'Customer-Centric',
      description: 'Our clients\' success is our priority. We build lasting partnerships through exceptional service.',
      color: '#10B981'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer support.',
      color: '#10B981'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and work closely with clients to achieve shared goals.',
      color: '#10B981'
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical practices in all our business dealings.',
      color: '#10B981'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'We invest in learning and development to stay ahead in the ever-evolving tech landscape.',
      color: '#10B981'
    }
  ];

  const portfolio = [
    {
      title: 'J and E Study Abroad',
      description: 'Comprehensive education consulting website connecting students with international study opportunities and visa guidance.',
      image: 'https://images.unsplash.com/photo-1563477709790-27c59ddaa002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkeSUyMGFicm9hZCUyMGVkdWNhdGlvbiUyMGNvbnN1bHRpbmd8ZW58MXx8fHwxNzY5OTM1OTA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Web Development',
      tech: ['React', 'Node.js', 'Database Integration']
    },
    {
      title: 'Modus Safaris',
      description: 'Dynamic tourism and safari booking platform featuring real-time availability, tour packages, and seamless booking experience.',
      image: 'https://images.unsplash.com/photo-1759130970043-1fc042b4d187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjB3aWxkbGlmZSUyMHRvdXJpc20lMjBhZnJpY2F8ZW58MXx8fHwxNzY5OTM1OTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Web Development',
      tech: ['React', 'Payment Gateway', 'Booking System']
    },
    {
      title: 'Website Billing System',
      description: 'Advanced billing and invoicing system with automated payment processing, client management, and financial reporting.',
      image: 'https://images.unsplash.com/photo-1735825764457-ffdf0b5aa5dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWxsaW5nJTIwaW52b2ljZSUyMHBheW1lbnQlMjBzeXN0ZW18ZW58MXx8fHwxNzY5OTM1OTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Software System',
      tech: ['Full Stack', 'Payment API', 'PDF Generation']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2OTkyNzI2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Professional Business Team"
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
              About GARUGA IT
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering digital transformation through innovative technology solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl p-12 text-white soft-shadow-xl"
            >
              <Globe className="w-16 h-16 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed text-gray-100">
                To empower businesses worldwide with innovative, reliable, and scalable technology solutions that drive digital transformation and create lasting value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0F2027] to-[#172542] rounded-2xl p-12 text-white soft-shadow-xl"
            >
              <Shield className="w-16 h-16 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed text-gray-100">
                To be the global leader in premium ICT and software development, recognized for excellence, innovation, and transformative impact on businesses and communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Journey Timeline */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2027] mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A timeline of innovation, growth, and achievement
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#10B981] to-[#0F2027]" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-8 soft-shadow-lg">
                      <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] text-white text-sm mb-4">
                        {item.milestone}
                      </div>
                      <h3 className="text-2xl font-bold text-[#0F2027] mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="w-32 h-32 flex-shrink-0 my-8 lg:my-0">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#10B981] to-[#0F2027] flex items-center justify-center soft-shadow-xl border-8 border-white">
                      <span className="text-3xl font-bold text-white">{item.year}</span>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2027] mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The brilliant minds behind GARUGA IT's success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden soft-shadow-lg hover:soft-shadow-xl transition-all">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-sm text-gray-200">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2027] mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 soft-shadow-lg hover:soft-shadow-xl transition-all h-full">
                  <div className="w-16 h-16 rounded-2xl bg-[#10B981] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F2027] mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2027] mb-4">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of our successful projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden soft-shadow-lg hover:soft-shadow-xl transition-all">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-sm text-gray-200">{project.category}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600">{project.description}</p>
                    <div className="mt-4">
                      {/* <p className="text-sm text-gray-500">Technologies Used:</p> */}
                      <ul className="list-disc list-inside">
                        {project.tech.map((tech, techIndex) => (
                          <li key={techIndex}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
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
              Join Us on Our Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Become part of the GARUGA IT success story
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-white text-[#10B981] rounded-xl hover:bg-gray-100 transition-colors soft-shadow-lg"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}