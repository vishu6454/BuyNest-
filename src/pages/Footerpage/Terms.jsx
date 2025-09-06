import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedSections, setExpandedSections] = useState([]);

  const toggleSection = (section) => {
    if (expandedSections.includes(section)) {
      setExpandedSections(expandedSections.filter(s => s !== section));
    } else {
      setExpandedSections([...expandedSections, section]);
    }
  };

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: (
        <>
          <p className="mb-4">Welcome to BuyNest! These Terms of Service ("Terms") govern your use of our website and services. By accessing or using BuyNest, you agree to be bound by these Terms and our Privacy Policy.</p>
          <p>BuyNest ("we", "us", or "our") operates the website located at www.buynest.com (the "Site") and related services (collectively, the "Services").</p>
        </>
      )
    },
    {
      id: 'eligibility',
      title: 'Eligibility',
      content: (
        <>
          <p className="mb-4">To use our Services, you must:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Be at least 18 years of age or the age of majority in your jurisdiction</li>
            <li>Have the legal capacity to enter into a binding contract</li>
            <li>Not be barred from receiving services under applicable law</li>
          </ul>
          <p>By using the Services, you represent and warrant that you meet all eligibility requirements.</p>
        </>
      )
    },
    {
      id: 'accounts',
      title: 'User Accounts',
      content: (
        <>
          <p className="mb-4">To access certain features, you may need to create an account. When creating an account, you agree to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain the security of your password and accept all risks of unauthorized access</li>
            <li>Promptly update any information that becomes inaccurate</li>
            <li>Not share your account credentials or transfer your account to another party</li>
          </ul>
          <p>We reserve the right to suspend or terminate accounts that violate these Terms.</p>
        </>
      )
    },
    {
      id: 'purchases',
      title: 'Purchases & Payments',
      content: (
        <>
          <p className="mb-4">All purchases through our Services are subject to availability. We reserve the right to limit quantities and reject orders.</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Prices are shown in your local currency but may fluctuate based on exchange rates</li>
            <li>You agree to pay all charges including applicable taxes</li>
            <li>Payment methods may be restricted based on your location</li>
            <li>We use third-party payment processors and do not store your payment details</li>
          </ul>
          <p>For subscription services, you authorize recurring charges until cancellation.</p>
        </>
      )
    },
    {
      id: 'returns',
      title: 'Returns & Refunds',
      content: (
        <>
          <p className="mb-4">Our return policy is as follows:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Most items can be returned within 30 days of delivery</li>
            <li>Items must be in original condition with all tags attached</li>
            <li>Some items are final sale (e.g., perishable goods, personalized items)</li>
            <li>Refunds will be issued to the original payment method within 7-10 business days</li>
          </ul>
          <p>To initiate a return, please contact our customer service team.</p>
        </>
      )
    },
    {
      id: 'content',
      title: 'User Content',
      content: (
        <>
          <p className="mb-4">You may submit reviews, comments, and other content ("User Content") as long as it is lawful and complies with these Terms.</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>You retain ownership of your User Content but grant us a worldwide license to use it</li>
            <li>User Content must not violate any third-party rights or contain harmful material</li>
            <li>We may remove User Content at our discretion without notice</li>
          </ul>
          <p>You are solely responsible for your User Content and any consequences of posting it.</p>
        </>
      )
    },
    {
      id: 'prohibited',
      title: 'Prohibited Conduct',
      content: (
        <>
          <p className="mb-4">When using our Services, you agree not to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Violate any laws or regulations</li>
            <li>Infringe intellectual property rights</li>
            <li>Use the Services for fraudulent or harmful purposes</li>
            <li>Interfere with the proper functioning of the Services</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Harass, threaten, or harm others</li>
            <li>Transmit viruses or malicious code</li>
          </ul>
          <p>Violations may result in termination of your access to the Services.</p>
        </>
      )
    },
    {
      id: 'termination',
      title: 'Termination',
      content: (
        <>
          <p className="mb-4">We may terminate or suspend your access to the Services at any time without notice for any reason, including if we believe you have violated these Terms.</p>
          <p>Upon termination:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Your right to use the Services will immediately cease</li>
            <li>Any outstanding payments will become immediately due</li>
            <li>We may delete your account information and content</li>
          </ul>
          <p>You may terminate your account at any time by contacting customer service.</p>
        </>
      )
    },
    {
      id: 'disclaimers',
      title: 'Disclaimers',
      content: (
        <>
          <p className="mb-4">THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>We do not guarantee that the Services will be uninterrupted or error-free</li>
            <li>Product descriptions and pricing may contain inaccuracies</li>
            <li>We are not responsible for third-party products or services</li>
          </ul>
          <p>Some jurisdictions do not allow the exclusion of certain warranties, so some of these limitations may not apply to you.</p>
        </>
      )
    },
    {
      id: 'limitation',
      title: 'Limitation of Liability',
      content: (
        <>
          <p className="mb-4">TO THE MAXIMUM EXTENT PERMITTED BY LAW, BUYNEST SHALL NOT BE LIABLE FOR:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Any indirect, incidental, or consequential damages</li>
            <li>Loss of profits, data, or goodwill</li>
            <li>Damages resulting from unauthorized access to your account</li>
            <li>Errors or omissions in any content</li>
          </ul>
          <p>Our total liability for any claims related to the Services shall not exceed the amount you paid us in the past 12 months.</p>
        </>
      )
    },
    {
      id: 'changes',
      title: 'Changes to Terms',
      content: (
        <>
          <p className="mb-4">We may modify these Terms at any time. When we make changes, we will post the updated Terms on this page with a new "Last Updated" date.</p>
          <p>Your continued use of the Services after changes become effective constitutes acceptance of the revised Terms.</p>
          <p className="mt-4">We encourage you to review the Terms periodically.</p>
        </>
      )
    },
    {
      id: 'contact',
      title: 'Contact Us',
      content: (
        <>
          <p className="mb-4">If you have any questions about these Terms, please contact us at:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Email: legal@buynest.com</li>
            <li>Mail: BuyNest Legal Department, 123 Commerce Street, San Francisco, CA 94108</li>
            <li>Phone: +1 (800) 555-1234</li>
          </ul>
          <p>Effective Date: January 1, 2025 </p>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl font-extrabold text-gray-900 mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            BuyNest <span className="text-indigo-600">Terms of Service</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Last Updated: January 1, 2025
          </motion.p>
        </div>

        {/* Desktop Table of Contents */}
        <motion.div
          className="hidden lg:block mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
            <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
            <ul className="space-y-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <motion.button
                    type="button"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left w-full ${
                      activeSection === section.id
                        ? 'text-indigo-600 font-medium'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {section.title}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Mobile Dropdown */}
        <motion.div
          className="lg:hidden mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-lg shadow-sm p-4">
            <select
              onChange={(e) => scrollToSection(e.target.value)}
              value={activeSection}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              {sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.title}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`border-b border-gray-200 ${
                activeSection === section.id ? 'bg-indigo-50' : ''
              }`}
            >
              <motion.button
                type="button"
                className="hidden lg:flex w-full items-center justify-between p-6 text-left"
                onClick={() => toggleSection(section.id)}
                whileHover={{ backgroundColor: 'rgba(238, 242, 255, 0.5)' }}
              >
                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                <motion.div
                  animate={{ rotate: expandedSections.includes(section.id) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </motion.button>

              <button
                type="button"
                className="lg:hidden w-full flex items-center justify-between p-6 text-left"
                onClick={() => toggleSection(section.id)}
              >
                <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                <svg
                  className={`w-6 h-6 text-indigo-600 transform ${
                    expandedSections.includes(section.id) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {expandedSections.includes(section.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 lg:px-8 lg:pb-8 text-gray-700"
                  >
                    {section.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.section>
          ))}
        </div>

        {/* Acceptance Footer */}
        <motion.div
          className="mt-12 bg-indigo-50 rounded-xl p-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            By using our website or services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </p>
          <motion.button
            type="button"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold"
          >
            I Accept These Terms
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TermsOfService;