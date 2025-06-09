'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-emerald-100">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-emerald-600">ZeroOpsAI</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/agents" 
              className={`transition-colors font-medium ${
                isActive('/agents') 
                  ? 'text-emerald-600 border-b-2 border-emerald-600' 
                  : 'text-emerald-900 hover:text-emerald-600'
              }`}
            >
              AI Agents
            </Link>
            <Link 
              href="/solutions" 
              className={`transition-colors font-medium ${
                isActive('/solutions') 
                  ? 'text-emerald-600 border-b-2 border-emerald-600' 
                  : 'text-emerald-900 hover:text-emerald-600'
              }`}
            >
              Solutions
            </Link>
            <Link 
              href="/use-cases" 
              className={`transition-colors font-medium ${
                isActive('/use-cases') 
                  ? 'text-emerald-600 border-b-2 border-emerald-600' 
                  : 'text-emerald-900 hover:text-emerald-600'
              }`}
            >
              Use Cases
            </Link>
            <Link 
              href="/industries" 
              className={`transition-colors font-medium ${
                isActive('/industries') 
                  ? 'text-emerald-600 border-b-2 border-emerald-600' 
                  : 'text-emerald-900 hover:text-emerald-600'
              }`}
            >
              Industries
            </Link>
            <Link
              href="/contact"
              className="btn-primary h-9 px-6 flex items-center text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            <svg
              className="w-6 h-6 text-emerald-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-4 py-4">
                <Link
                  href="/agents"
                  className={`transition-colors font-medium px-2 py-1 ${
                    isActive('/agents') 
                      ? 'text-emerald-600 bg-emerald-50' 
                      : 'text-emerald-900 hover:text-emerald-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI Agents
                </Link>
                <Link
                  href="/solutions"
                  className={`transition-colors font-medium px-2 py-1 ${
                    isActive('/solutions') 
                      ? 'text-emerald-600 bg-emerald-50' 
                      : 'text-emerald-900 hover:text-emerald-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Solutions
                </Link>
                <Link
                  href="/use-cases"
                  className={`transition-colors font-medium px-2 py-1 ${
                    isActive('/use-cases') 
                      ? 'text-emerald-600 bg-emerald-50' 
                      : 'text-emerald-900 hover:text-emerald-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Use Cases
                </Link>
                <Link
                  href="/industries"
                  className={`transition-colors font-medium px-2 py-1 ${
                    isActive('/industries') 
                      ? 'text-emerald-600 bg-emerald-50' 
                      : 'text-emerald-900 hover:text-emerald-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Industries
                </Link>
                <Link
                  href="/contact"
                  className="btn-primary h-9 px-6 flex items-center justify-center text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-emerald-600 hover:bg-emerald-700 text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book a Demo
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
} 