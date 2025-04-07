// src/components/Footer/Footer.jsx
import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Website Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yellow-400">SportsGear</h3>
            <p className="text-sm">
              Your one-stop shop for premium sports equipment. Elevate your game with our top-quality products and exceptional service.
            </p>
            <p className="text-sm">
              &copy; {currentYear} SportsGear. All rights reserved.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <FaPhone className="text-yellow-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-yellow-400" />
                <span>support@sportsgear.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-yellow-400" />
                <span>123 Sports Ave, Gear City, SG 12345</span>
              </li>
            </ul>
          </div>

          {/* Social Media and Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebookF />, link: "https://facebook.com/sportsgear" },
                { icon: <FaTwitter />, link: "https://twitter.com/sportsgear" },
                { icon: <FaInstagram />, link: "https://instagram.com/sportsgear" },
                { icon: <FaLinkedinIn />, link: "https://linkedin.com/company/sportsgear" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-yellow-400 transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/all-equipment" className="hover:text-yellow-400 transition-colors duration-300">
                    All Equipment
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-yellow-400 transition-colors duration-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
            Designed with passion for sports enthusiasts |{' '}
            <Link to="/privacy" className="hover:text-yellow-400">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link to="/terms" className="hover:text-yellow-400">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;