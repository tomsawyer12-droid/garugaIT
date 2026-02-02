import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    name: '',
    email: '',
    phone: '',
    company: '',
    // Step 2
    service: '',
    budget: '',
    timeline: '',
    // Step 3
    message: '',
    preferredContact: 'email',
  });

  const totalSteps = 3;

  const services = [
    'Custom Software Development',
    'Web Development',
    'IT Infrastructure',
    'J and E Study Abroad',
    'Modus Safaris',
    'UGPAY WiFi Billing System',
    'Other'
  ];

  const budgets = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000'
  ];

  const timelines = [
    'ASAP',
    '1-3 Months',
    '3-6 Months',
    '6-12 Months',
    'Flexible'
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@garugait.com',
      link: 'mailto:info@garugait.com',
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+256 757 136 062',
      link: 'tel:+256757136062',
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: MapPin,
      title: 'Office',
      content: 'Kampala Uganda',
      link: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      link: '#',
      color: 'from-amber-500 to-orange-500'
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      timeline: '',
      message: '',
      preferredContact: 'email',
    });
    setCurrentStep(1);
  };

  const canProceed = () => {
    if (currentStep === 1) {
      return formData.name && formData.email && formData.phone;
    }
    if (currentStep === 2) {
      return formData.service && formData.budget && formData.timeline;
    }
    return true;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBjb25zdWx0YXRpb24lMjBkZXNrfGVufDF8fHx8MTc2OTkzMzQzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Customer Consultation"
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
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with our solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Split Screen Layout */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold text-[#0F2027] mb-4">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're here to help and answer any questions you might have
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl soft-shadow hover:soft-shadow-lg transition-all group"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F2027] mb-1">{info.title}</h4>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="rounded-2xl overflow-hidden soft-shadow-lg h-64 bg-gray-200"
              >
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215324449909!2d-73.98657492346443!3d40.758896971387396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1709349129000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </motion.div>
            </motion.div>

            {/* Right Side - Multi-Step Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 soft-shadow-xl"
            >
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                          step <= currentStep
                            ? 'bg-[#10B981] text-white'
                            : 'bg-gray-200 text-gray-400'
                        }`}
                      >
                        {step < currentStep ? (
                          <CheckCircle2 className="w-6 h-6" />
                        ) : (
                          step
                        )}
                      </div>
                      {step < 3 && (
                        <div
                          className={`h-1 w-20 mx-2 transition-all ${
                            step < currentStep ? 'bg-[#10B981]' : 'bg-gray-200'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600 text-center">
                  Step {currentStep} of {totalSteps}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {/* Step 1: Basic Information */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-[#0F2027] mb-2">
                        Let's Get Started
                      </h3>
                      <p className="text-gray-600">Tell us a bit about yourself</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0F2027] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#10B981] focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0F2027] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#10B981] focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0F2027] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#10B981] focus:outline-none transition-colors"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0F2027] mb-2">
                        Company Name (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#10B981] focus:outline-none transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Project Details */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-[#0F2027] mb-2">
                        Project Details
                      </h3>
                      <p className="text-gray-600">Help us understand your needs</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0F2027] mb-2">
                        Service Interested In *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => handleInputChange('service', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#10B981] focus:outline-none transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0F2027] mb-2">
                        Estimated Budget *
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#10B981] focus:outline-none transition-colors"
                      >
                        <option value="">Select a budget range</option>
                        {budgets.map((budget) => (
                          <option key={budget} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0F2027] mb-2">
                        Project Timeline *
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#10B981] focus:outline-none transition-colors"
                      >
                        <option value="">Select a timeline</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline}>
                            {timeline}
                          </option>
                        ))}
                      </select>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Additional Information */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-[#0F2027] mb-2">
                        Almost There!
                      </h3>
                      <p className="text-gray-600">Any additional details</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0F2027] mb-2">
                        Project Description
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#10B981] focus:outline-none transition-colors resize-none"
                        placeholder="Tell us more about your project..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0F2027] mb-3">
                        Preferred Contact Method
                      </label>
                      <div className="flex gap-4">
                        <label className="flex-1 flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-[#10B981] has-[:checked]:border-[#10B981] has-[:checked]:bg-emerald-50">
                          <input
                            type="radio"
                            name="contact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                            className="sr-only"
                          />
                          <Mail className="w-5 h-5 mr-2" />
                          <span>Email</span>
                        </label>
                        <label className="flex-1 flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-[#10B981] has-[:checked]:border-[#10B981] has-[:checked]:bg-emerald-50">
                          <input
                            type="radio"
                            name="contact"
                            value="phone"
                            checked={formData.preferredContact === 'phone'}
                            onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                            className="sr-only"
                          />
                          <Phone className="w-5 h-5 mr-2" />
                          <span>Phone</span>
                        </label>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8">
                {currentStep > 1 && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handlePrevious}
                    className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors flex items-center justify-center space-x-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Previous</span>
                  </motion.button>
                )}

                {currentStep < totalSteps ? (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className={`flex-1 px-6 py-3 rounded-xl transition-colors flex items-center justify-center space-x-2 ${
                      canProceed()
                        ? 'bg-[#10B981] text-white hover:bg-[#059669]'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <span>Next</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    className="flex-1 px-6 py-3 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-5 h-5" />
                  </motion.button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}