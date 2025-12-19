import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Contact', href: '#contact' },
  ];

  const socials = [
    {
      icon: FaGithub,
      link: 'https://github.com/Prinsika7563',
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      link: 'https://www.linkedin.com/in/prinsika-singh-818318252/',
      label: 'LinkedIn',
    },
    {
      icon: FaEnvelope,
      link: 'mailto:prinsikasingh02@gmail.com',
      label: 'Email',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Decorative Background */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Footer Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 md:px-12 py-16 md:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Top Section - Links & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16 md:mb-20">
          
          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg md:text-xl font-bold text-white mb-6">Navigation</h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-medium"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg md:text-xl font-bold text-white mb-6">Contact</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-2">Email</p>
                <a
                  href="mailto:prinsikasingh02@gmail.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium break-all"
                >
                  prinsikasingh02@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Location</p>
                <p className="text-gray-300">Bareilly, India</p>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg md:text-xl font-bold text-white mb-6">Connect</h3>
            <div className="flex gap-4">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 transition-all duration-300 border border-blue-500/20 hover:border-blue-500/50"
                  >
                    <Icon className="text-lg md:text-xl" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-8 md:mb-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />

        {/* Bottom Section - Copyright & Credits */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
          variants={itemVariants}
        >
          <p className="text-sm md:text-base text-gray-400">
            © {currentYear} <span className="font-bold text-white">Prinsika Singh</span>. All rights reserved.
          </p>
          
          <motion.p
            className="text-sm text-gray-500"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Crafted with <span className="text-blue-400">💙</span> using React & Framer Motion
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-1/2 right-0 w-40 h-40 rounded-full bg-cyan-500/5 blur-2xl pointer-events-none"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </footer>
  );
};

export default Footer;
