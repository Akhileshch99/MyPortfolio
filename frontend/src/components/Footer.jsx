import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary mt-20 py-12 border-t border-gray-700">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Portfolio</h3>
            <p className="text-gray-400">
              Portfolio showcasing projects and skills.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#home" className="hover:text-accent">Home</a></li>
              <li><a href="#about" className="hover:text-accent">About</a></li>
              <li><a href="#projects" className="hover:text-accent">Projects</a></li>
              <li><a href="#contact" className="hover:text-accent">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-accent">GitHub</a></li>
              <li><a href="#" className="hover:text-accent">LinkedIn</a></li>
              <li><a href="#" className="hover:text-accent">Leetcode</a></li>
              <li><a href="#" className="hover:text-accent">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Professional Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
