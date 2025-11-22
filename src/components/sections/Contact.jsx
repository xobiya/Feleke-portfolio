import { motion } from 'framer-motion';
import SectionWrapper from '../shared/SectionWrapper';
import { useState } from 'react';
import contactMethods from '../../data/contact';

const API_BASE_URL = (import.meta.env.VITE_API_URL ?? '').trim();
const CONTACT_ENDPOINT = API_BASE_URL
  ? `${API_BASE_URL.replace(/\/$/, '')}/api/contact`
  : '/api/contact';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, ok: null, message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, ok: null, message: '' });

    try {
  const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setStatus({ 
        loading: false, 
        ok: true, 
        message: 'Message sent successfully! I will get back to you soon.' 
      });
      setFormData({ name: '', email: '', message: '' });
      
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus({ 
        loading: false, 
        ok: false, 
        message: err.message || 'Failed to send message. Please try again later or email me directly.' 
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status when user starts typing again
    if (status.message) {
      setStatus({ loading: false, ok: null, message: '' });
    }
  };

  return (
    <SectionWrapper id="contact" className="section-wrapper">
      {(isInView) => (
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-neon-pink mx-auto mb-8" />
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to bring your next project to life? Let's create something extraordinary together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-cyber text-gradient-cyber mb-6">
                Let's Connect
              </h3>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm always interested in hearing about new opportunities, 
                innovative projects, or just chatting about technology and design.
              </p>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 card-cyber hover:glass-cyber transition-all group"
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="w-12 h-12 rounded-lg glass flex items-center justify-center group-hover:glass-cyber transition-all">
                      <img src={method.icon} alt={method.title} className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-cyber-cyan font-semibold">{method.title}</div>
                      <div className="text-gray-300">{method.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-6"
              >
                <h4 className="text-lg font-cyber text-cyber-cyan mb-4">Follow My Journey</h4>
                <div className="flex space-x-4">
                  {[
                    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg', url: 'https://github.com/xobiya' },
                    { name: 'LinkedIn', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg', url: 'https://www.linkedin.com/in/feleke-eshetu' },
                    { name: 'Telegram', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg', url: 'https://t.me/xobiya' },
                    { name: 'Instagram', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg', url: 'https://www.instagram.com/feleke9063' }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="p-3 glass rounded-lg hover:glass-cyber transition-all group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={social.icon} alt={social.name} className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card-cyber p-8"
            >
              {/* Status Message */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg mb-6 border ${
                    status.ok 
                      ? 'bg-green-500/20 border-green-500/50 text-green-400' 
                      : 'bg-red-500/20 border-red-500/50 text-red-400'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-cyber-cyan font-cyber text-sm uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status.loading}
                    className="w-full px-4 py-3 bg-dark-space border border-cyber-cyan/30 rounded-lg focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan transition-all text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-cyber-cyan font-cyber text-sm uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status.loading}
                    className="w-full px-4 py-3 bg-dark-space border border-cyber-cyan/30 rounded-lg focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan transition-all text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-cyber-cyan font-cyber text-sm uppercase tracking-wider mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    disabled={status.loading}
                    className="w-full px-4 py-3 bg-dark-space border border-cyber-cyan/30 rounded-lg focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan transition-all text-white resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status.loading}
                  whileHover={!status.loading ? { scale: 1.02 } : {}}
                  whileTap={!status.loading ? { scale: 0.98 } : {}}
                  className={`w-full text-lg py-4 font-semibold rounded-lg transition-all flex items-center justify-center ${
                    status.loading 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'btn-cyber hover:shadow-lg hover:shadow-cyber-cyan/30'
                  }`}
                >
                  {status.loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg" alt="Send" className="w-5 h-5 ml-2" />

                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}