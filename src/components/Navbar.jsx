import React from 'react';
import { FaLinkedin, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { FaDownload } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

// backdrop-blur-md
// left-1/2 -translate-x-1/2
// bg-white/10 shadow-lg

const ContactIcons = () => {
  return (
    <div className=' flex justify-center'>
    <div className=" absolute z-10  gap-8 flex w-full md:w-fit items-center justify-between px-10 py-6 bg-transparent rounded-md shadow-yellow-950 shadow-md">
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/prinsika-singh-818318252/" title="linkedin" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl hover:text-blue-800">
        <FaLinkedin />
      </a>

      {/* WhatsApp */}
      <a href="https://wa.me/yourwhatsapplink" title="whatsapp" target="_blank" rel="noopener noreferrer" className="text-green-500 text-2xl hover:text-green-700">
        <FaWhatsapp />
      </a>

      {/* Phone */}
      <a href="tel:+9580002166" title="phone" className="text-green-500 text-2xl hover:text-green-900">
        <FaPhone  className=' rotate-90'/>
      </a>
      <a href="mailto:prinsikasingh02@gmail.com" title='Email'>
      <MdEmail className='text-blue-700 text-3xl hover:text-green-700'/>
      </a>

      {/* Resume Upload */}
      <a 
      href="public/Prinsika(reaume1).pdf" title="resume"
      download="public/Prinsika(reaume1).pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-500 hover:text-purple-700 text-2xl">
      <FaDownload />
      </a>
    </div>
    </div>
  );
};

export default ContactIcons;
