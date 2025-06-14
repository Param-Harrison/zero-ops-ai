'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => pathname === path;
  const isServicesActive = () => pathname.startsWith('/services');

  // Close services dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-1 lg:space-x-2">
              <Link
                href="/"
                className={`relative px-4 py-2 text-sm lg:text-base font-medium text-emerald-700 hover:text-emerald-900 transition-all duration-300 ${
                  isActive('/') 
                    ? 'text-emerald-900 bg-emerald-50/80 rounded-lg shadow-[inset_0_0_0_1px_rgba(16,185,129,0.2)]' 
                    : 'hover:bg-emerald-50/40 rounded-lg'
                }`}
              >
                Home
              </Link>
              <div className="relative group" ref={servicesRef}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`relative px-4 py-2 text-sm lg:text-base font-medium text-emerald-700 hover:text-emerald-900 transition-all duration-300 flex items-center ${
                    isServicesActive() 
                      ? 'text-emerald-900 bg-emerald-50/80 rounded-lg shadow-[inset_0_0_0_1px_rgba(16,185,129,0.2)]' 
                      : 'hover:bg-emerald-50/40 rounded-lg'
                  }`}
                >
                  Services
                  <svg
                    className={`w-4 h-4 ml-1.5 transform transition-transform duration-300 ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-56 rounded-lg bg-white shadow-lg border border-emerald-100 overflow-hidden"
                    >
                      <div className="py-2">
                        <Link
                          href="/services"
                          className={`block px-4 py-2.5 text-sm text-emerald-700 hover:bg-emerald-50 transition-colors ${
                            isActive('/services') ? 'bg-emerald-50 text-emerald-900 font-medium' : ''
                          }`}
                        >
                          All Services
                        </Link>
                        <Link
                          href="/services/rag-as-a-service"
                          className={`block px-4 py-2.5 text-sm text-emerald-700 hover:bg-emerald-50 transition-colors ${
                            isActive('/services/rag-as-a-service') ? 'bg-emerald-50 text-emerald-900 font-medium' : ''
                          }`}
                        >
                          RAG as a Service
                        </Link>
                        <Link
                          href="/services/ai-agent-solutions"
                          className={`block px-4 py-2.5 text-sm text-emerald-700 hover:bg-emerald-50 transition-colors ${
                            isActive('/services/ai-agent-solutions') ? 'bg-emerald-50 text-emerald-900 font-medium' : ''
                          }`}
                        >
                          AI Agent Solutions
                        </Link>
                        <Link
                          href="/services/mvp-as-a-service"
                          className={`block px-4 py-2.5 text-sm text-emerald-700 hover:bg-emerald-50 transition-colors ${
                            isActive('/services/mvp-as-a-service') ? 'bg-emerald-50 text-emerald-900 font-medium' : ''
                          }`}
                        >
                          MVP as a Service
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link
                href="/use-cases"
                className={`relative px-4 py-2 text-sm lg:text-base font-medium text-emerald-700 hover:text-emerald-900 transition-all duration-300 ${
                  isActive('/use-cases') 
                    ? 'text-emerald-900 bg-emerald-50/80 rounded-lg shadow-[inset_0_0_0_1px_rgba(16,185,129,0.2)]' 
                    : 'hover:bg-emerald-50/40 rounded-lg'
                }`}
              >
                Use Cases
              </Link>
              <Link
                href="/industries"
                className={`relative px-4 py-2 text-sm lg:text-base font-medium text-emerald-700 hover:text-emerald-900 transition-all duration-300 ${
                  isActive('/industries') 
                    ? 'text-emerald-900 bg-emerald-50/80 rounded-lg shadow-[inset_0_0_0_1px_rgba(16,185,129,0.2)]' 
                    : 'hover:bg-emerald-50/40 rounded-lg'
                }`}
              >
                Industries
              </Link>
            </div>
            <Link 
              href="/contact" 
              className="ml-6 inline-flex items-center justify-center px-5 py-2 text-sm lg:text-base font-medium text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 transform"
            >
              Book a Consultation
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-emerald-700 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
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
              <div className="flex flex-col space-y-1 py-4">
                <Link
                  href="/"
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive('/')
                      ? 'text-emerald-900 bg-emerald-50'
                      : 'text-emerald-700 hover:bg-emerald-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <div className="space-y-1">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isServicesActive()
                        ? 'text-emerald-900 bg-emerald-50'
                        : 'text-emerald-700 hover:bg-emerald-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>Services</span>
                      <svg
                        className={`w-4 h-4 transform transition-transform duration-200 ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 space-y-1"
                      >
                        <Link
                          href="/services"
                          className={`block px-4 py-3 text-sm rounded-lg transition-colors ${
                            isActive('/services')
                              ? 'text-emerald-900 bg-emerald-50 font-medium'
                              : 'text-emerald-700 hover:bg-emerald-50'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          All Services
                        </Link>
                        <Link
                          href="/services/rag-as-a-service"
                          className={`block px-4 py-3 text-sm rounded-lg transition-colors ${
                            isActive('/services/rag-as-a-service')
                              ? 'text-emerald-900 bg-emerald-50 font-medium'
                              : 'text-emerald-700 hover:bg-emerald-50'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          RAG as a Service
                        </Link>
                        <Link
                          href="/services/ai-agent-solutions"
                          className={`block px-4 py-3 text-sm rounded-lg transition-colors ${
                            isActive('/services/ai-agent-solutions')
                              ? 'text-emerald-900 bg-emerald-50 font-medium'
                              : 'text-emerald-700 hover:bg-emerald-50'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          AI Agent Solutions
                        </Link>
                        <Link
                          href="/services/mvp-as-a-service"
                          className={`block px-4 py-3 text-sm rounded-lg transition-colors ${
                            isActive('/services/mvp-as-a-service')
                              ? 'text-emerald-900 bg-emerald-50 font-medium'
                              : 'text-emerald-700 hover:bg-emerald-50'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          MVP as a Service
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Link
                  href="/use-cases"
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive('/use-cases')
                      ? 'text-emerald-900 bg-emerald-50'
                      : 'text-emerald-700 hover:bg-emerald-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Use Cases
                </Link>
                <Link
                  href="/industries"
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive('/industries')
                      ? 'text-emerald-900 bg-emerald-50'
                      : 'text-emerald-700 hover:bg-emerald-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Industries
                </Link>
                <Link
                  href="/contact"
                  className="mx-4 mt-2 px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 transform inline-flex items-center justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started Free
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
} 