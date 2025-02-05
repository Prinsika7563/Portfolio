const Footer = () => {
    return (
      <footer className="bg-gray-900 bg-blend-color text-gray-300 py-10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          
  
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">Quick Links</h3>
            <ul>
              <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-400">About</a></li>
              <li><a href="#projects" className="hover:text-yellow-400">Projects</a></li>
              <li><a href="#technologies" className="hover:text-yellow-400">Technologies</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>
  
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">Contact</h3>
            <p>Email: prinsikasingh02@gmail.com</p>
            
          </div>
  
          {/* Social Media Links */}
          <div className="md:col-span-3 flex justify-center space-x-6 mt-6">
            <a href="https://github.com/Prinsika7563" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">GitHub</a>
            <a href="https://www.linkedin.com/in/prinsika-singh-818318252/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">LinkedIn</a>
            
          </div>
        </div>
  
        {/* Copyright Section */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p>© 2025 Prinsika Singh. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  