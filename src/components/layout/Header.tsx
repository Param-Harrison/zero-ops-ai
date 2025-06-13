'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  const isServicesActive = (path: string) => pathname.startsWith('/services');

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-emerald-100">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center space-x-1 transition-colors font-medium ${
                  isServicesActive('/services') 
                    ? 'text-emerald-600 border-b-2 border-emerald-600' 
                    : 'text-emerald-900 hover:text-emerald-600'
                }`}
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                  isServicesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="py-1">
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm text-emerald-900 hover:bg-emerald-50"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link
                    href="/services/rag-as-a-service"
                    className="block px-4 py-2 text-sm text-emerald-900 hover:bg-emerald-50"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    RAG-as-a-Service
                  </Link>
                  <Link
                    href="/services/ai-agent-solutions"
                    className="block px-4 py-2 text-sm text-emerald-900 hover:bg-emerald-50"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    AI Agents
                  </Link>
                </div>
              </div>
            </div>
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
              Get Started
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
                <div className="space-y-2">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`w-full text-left transition-colors font-medium px-2 py-1 ${
                      isServicesActive('/services') 
                        ? 'text-emerald-600 bg-emerald-50' 
                        : 'text-emerald-900 hover:text-emerald-600'
                    }`}
                  >
                    Services
                  </button>
                  {isServicesOpen && (
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/services"
                        className="block px-2 py-1 text-emerald-900 hover:text-emerald-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        All Services
                      </Link>
                      <Link
                        href="/services/rag-as-a-service"
                        className="block px-2 py-1 text-emerald-900 hover:text-emerald-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        RAG-as-a-Service
                      </Link>
                      <Link
                        href="/services/ai-agent-solutions"
                        className="block px-2 py-1 text-emerald-900 hover:text-emerald-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        AI Agents
                      </Link>
                    </div>
                  )}
                </div>
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
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
} 