import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-rose-300 text-white py-8 text-center">
      <div className="container mx-auto">
        <p className="text-3xl font-bold">Let's create something amazing together!</p>
        <p className="mt-4 text-lg">Reach out and let's bring your ideas to life.</p>
        <div className="flex justify-center mt-6">
          <a href="tel:0531790800" className="text-blue-400 hover:text-blue-600 mr-6 text-xl">
            <i className="fas fa-phone-alt mr-2"></i>0531790800
          </a>
          <a href="mailto:katieboye44@gmail.com" className="text-blue-400 hover:text-blue-600 text-xl">
            <i className="fas fa-envelope mr-2"></i>katieboye44@gmail.com
          </a>
        </div>
        <p className="mt-8 text-lg">&copy; 2024 Catherine's Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

