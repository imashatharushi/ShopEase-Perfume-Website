import React, { useEffect, useState } from 'react';
// Importing icons from react-icons
import { FiHeart, FiSearch, FiMenu, FiShoppingCart, FiUser } from 'react-icons/fi';

const Header = () => {
  // State to track if the page is scrolled past 10px to change header style
  const [isScrolled, setIsScrolled] = useState(false);
  // State to track mobile menu open/close
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect to add/remove scroll listener on mount/unmount
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // true if scrolled more than 10px
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items with ids, display names, and anchor links
  const navItems = [
    { id: 1, name: 'Home', link: '#home' },
    { id: 2, name: 'Products', link: '#products' },
    { id: 3, name: 'Categories', link: '#categories' },
    { id: 4, name: 'Offers', link: '#offers' },
    { id: 5, name: 'About', link: '#about' },
    { id: 6, name: 'Contact', link: '#contact' },
  ];

  return (
    // Sticky header at top with z-index and smooth transition for style changes
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top part of header: changes background and padding when scrolled */}
      <div className={`w-full ${isScrolled ? 'bg-amber-50 backdrop-blur shadow-md py-2' : 'bg-gray-100 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Flex container for logo, search, and user icons */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
            {/* Logo and mobile menu button container */}
            <div className="flex justify-between items-center w-full md:w-auto">
              {/* Logo link */}
              <a href="/" className="text-2xl font-bold text-pink-600">ShopEase</a>
              {/* Mobile menu toggle button - visible only on small screens */}
              <button
                className="md:hidden text-gray-700 hover:text-indigo-600"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <FiMenu size={24} />
              </button>
            </div>

            {/* Search input with icon */}
            <div className="w-full md:flex-1 max-w-5xl">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="search..."
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-indigo-600"
                  aria-label="Search button"
                >
                  <FiSearch size={16} />
                </button>
              </div>
            </div>

            {/* User action icons: wishlist, cart, user profile */}
            <div className="flex items-center justify-end space-x-4 w-full md:w-auto">
              {/* Wishlist button with badge */}
              <button className="relative p-2 text-gray-700 hover:text-pink-600" aria-label="Wishlist">
                <FiHeart size={20} />
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>

              {/* Shopping cart button with badge */}
              <button className="relative p-2 text-gray-700 hover:text-pink-600" aria-label="Cart">
                <FiShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  5
                </span>
              </button>

              {/* User profile button */}
              <button className="p-2 text-gray-700 hover:text-pink-600" aria-label="User">
                <FiUser size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar below the top header, with background color */}
      <div className="bg-pink-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop navigation menu - hidden on small screens */}
          <nav className="hidden md:flex justify-center py-3">
            <ul className="flex flex-wrap gap-x-6 text-sm font-medium text-white">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="hover:text-pink-300 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile navigation menu - shown only when toggled open */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-2 bg-white rounded-lg shadow-md p-4 space-y-3 text-amber-950 text-center">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="block hover:text-amber-600 text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
