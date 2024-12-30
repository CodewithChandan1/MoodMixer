
import { Link } from 'react-router-dom';
import { Github, Twitter, Instagram } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-gray-100 py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4">MoodMixer</h3>
          <p className="text-gray-600">
            Express yourself through memes, music, and creative experiences.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Features</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/mood-player"
                className="text-gray-600 hover:text-gray-900"
              >
                Mood Player
              </Link>
            </li>
            <li>
              <Link
                to="/meme-generator"
                className="text-gray-600 hover:text-gray-900"
              >
                Meme Generator
              </Link>
            </li>
            <li>
              <Link
                to="/escape-room"
                className="text-gray-600 hover:text-gray-900"
              >
                Escape Room
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/about-us"
                className="text-gray-600 hover:text-gray-900"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="text-gray-600 hover:text-gray-900"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-gray-200 text-center text-gray-600">
        <p>© 2024 MoodMixer. All rights reserved.</p>
      </div>
    </div>
  </footer>
);