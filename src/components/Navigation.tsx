'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface NavigationProps {
  buttonText?: string;
  buttonLink?: string;
  showMargin?: boolean;
}

export default function Navigation({ 
  buttonText = "BEKIJK TRAININGEN", 
  buttonLink = "#training-section",
  showMargin = true 
}: NavigationProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  // removed unused click handler

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 1000);
    setHoverTimeout(timeout);
  };

  const handleMegaMenuLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsDropdownOpen(false);
  };

  const headerClasses = showMargin 
    ? "m-10 bg-white/95 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50"
    : "bg-white/95 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50";

  const courses = [
    {
      category: "Scrum Master",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "primary",
      courses: [
        { name: "Scrum Master Basis", link: "/scrum-master", duration: "4 dagdelen" },
        { name: "Scrum Master Vervolg", link: "/scrum-master-vervolg", duration: "4 dagdelen" }
      ]
    },
    {
      category: "Product Owner",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      color: "primary",
      courses: [
        { name: "Product Owner Basis", link: "/product-owner", duration: "2 dagen" },
        { name: "Product Owner Gevorderd", link: "/product-owner", duration: "2 dagen" }
      ]
    },
    {
      category: "Agile Coach",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "accent",
      courses: [
        { name: "Agile Coach Opleiding", link: "/agile-coach", duration: "4 dagen" }
      ]
    },
    {
      category: "Agile Leiderschap",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "accent",
      courses: [
        { name: "Agile Leiderschap Opleiding", link: "/agile-leiderschap", duration: "1.5 dagen" }
      ]
    },
    {
      category: "Obeya",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "primary",
      courses: [
        { name: "Leading with Obeya", link: "/obeya", duration: "2 dagen" },
        { name: "Facilitator in Obeya", link: "/obeya", duration: "2 dagen" }
      ]
    }
  ];

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main navigation row */}
        <div className="pt-4 pb-4 relative">
          <div className="flex items-center justify-between">
            {/* Left side - Logo + Trainingen */}
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <Link href="/" className="flex items-center relative">
                <Image 
                  src="/images/lag-logo.png" 
                  alt="Lean Agile Groep Logo" 
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-sm rotate-45"></div>
              </Link>

              {/* Trainingen Dropdown */}
              <div className="relative group">
                <button
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 py-2"
                  aria-label={buttonText}
                >
                  <span>Trainingen</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Invisible bridge to prevent gap */}
            {isDropdownOpen && (
              <div 
                className="absolute top-full left-0 right-0 h-2 z-40"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              ></div>
            )}

            {/* Right side - Contact Info */}
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span className="font-medium">Contact:</span> 
              <span className="text-primary-600 font-semibold">088-5326720</span>
            </div>
          </div>
          
          {/* Mega Menu - Positioned relative to navigation container */}
          {isDropdownOpen && (
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMegaMenuLeave}
              className="absolute top-full -top-5 left-0 right-0 bg-white shadow-xl border-t border-gray-200 z-50 rounded-xl"
            >
              <div className="w-full px-6 lg:px-8 py-8">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {courses.map((category, index) => (
                      <div key={index} className="space-y-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-8 h-8 bg-${category.color}-100 rounded-lg flex items-center justify-center text-${category.color}-600`}>
                            {category.icon}
                          </div>
                          <h3 className="font-semibold text-gray-900 text-lg">{category.category}</h3>
                        </div>
                        <div className="space-y-3">
                          {category.courses.map((course, courseIndex) => (
                            <Link
                              key={courseIndex}
                              href={course.link}
                              className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group border border-gray-100 hover:border-gray-200"
                            >
                              <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600">
                                {course.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <Link
                        href={buttonLink}
                        className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                      >
                        Bekijk alle trainingen
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
