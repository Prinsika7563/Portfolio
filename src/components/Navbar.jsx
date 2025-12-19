import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaWhatsapp, FaPhone, FaDownload } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const ContactIcons = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const icons = [
    {
      id: 'linkedin',
      icon: FaLinkedin,
      link: 'https://www.linkedin.com/in/prinsika-singh-818318252/',
      label: 'LinkedIn',
    },
    {
      id: 'whatsapp',
      icon: FaWhatsapp,
      link: 'https://wa.me/9580002166',
      label: 'WhatsApp',
    },
    {
      id: 'phone',
      icon: FaPhone,
      link: 'tel:+919580002166',
      label: 'Phone',
      rotate: 'rotate-90', // Fix phone icon rotation
    },
    {
      id: 'email',
      icon: MdEmail,
      link: 'mailto:prinsikasingh02@gmail.com',
      label: 'Email',
    },
    {
      id: 'resume',
      icon: FaDownload,
      link: '/Prinsika(reaume1).pdf',
      label: 'Resume',
      download: true,
    },
  ];

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Clean Container */}
      <div className="flex gap-5 px-8 py-4 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10">
        {icons.map((item, index) => {
          const IconComponent = item.icon;
          const isHovered = hoveredIcon === item.id;

          return (
            <motion.a
              key={item.id}
              href={item.link}
              title={item.label}
              target={item.download ? undefined : "_blank"}
              rel={item.download ? undefined : "noopener noreferrer"}
              download={item.download}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              onMouseEnter={() => setHoveredIcon(item.id)}
              onMouseLeave={() => setHoveredIcon(null)}
              className="relative"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Icon */}
              <motion.div
                className={`text-2xl text-white hover:text-blue-400 transition-colors duration-200 ${item.rotate || ''}`}
                animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.4 }}
              >
                <IconComponent />
              </motion.div>

              {/* Simple Tooltip */}
              <motion.div
                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white text-black px-3 py-1.5 rounded-lg text-xs font-semibold opacity-0 pointer-events-none"
                animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.div>
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ContactIcons;
