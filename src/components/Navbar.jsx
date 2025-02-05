import React from 'react';
import { FaLinkedin, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { FaDownload } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';



const ContactIcons = () => {
  return (
    <div className=' flex justify-center'>
    <div className=" absolute z-10  gap-8 flex w-full md:w-fit items-center justify-between px-10 py-6 bg-transparent rounded-md shadow-yellow-950 shadow-md">
      
      <a href="https://www.linkedin.com/in/prinsika-singh-818318252/" title="linkedin" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl hover:text-blue-800">
        <FaLinkedin />
      </a>

      
      <a href="https://wa.me/9580002166" title="whatsapp" target="_blank" rel="noopener noreferrer" className="text-green-500 text-2xl hover:text-green-700">
        <FaWhatsapp />
      </a>

      
      <a href="tel:+919580002166" title="phone" className="text-green-500 text-2xl hover:text-green-900">
        <FaPhone  className=' rotate-90'/>
      </a>
      <a href="mailto:prinsikasingh02@gmail.com" title='Email'>
      <MdEmail className='text-blue-700 text-3xl hover:text-green-700'/>
      </a>

      
      <a 
      href="/Prinsika(reaume1).pdf" title="resume"
      download
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
