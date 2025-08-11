import React, { useEffect, useState } from 'react'
// Importing product images
import product1 from '../assets/38.jpeg';
import product2 from '../assets/19.jpeg';
import product3 from '../assets/39.jpeg';
import product4 from '../assets/22.jpeg';
import product5 from '../assets/16.jpeg';
import product6 from '../assets/29.jpeg';
import product7 from '../assets/44.jpeg';
import product8 from '../assets/13.jpeg'; 

// Importing icons from react-icons
import { FiChevronsLeft, FiChevronsRight, FiShoppingCart, FiStar, FiHeart } from 'react-icons/fi';

const Products = () => {
  // State for currently visible slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  // State for how many products to show per page, depends on screen size
  const [productsPerPage, setProductsPerPage] = useState(4);

  // Array of product objects with id, name, price, rating, image and discount
  const products = [
    { id: 1, name: 'Floral', price: 99.99, rating: 4.5, image: product1, discount: 20 },
    { id: 2, name: 'Oriental', price: 109.99, rating: 4.2, image: product2, discount: 10 },
    { id: 3, name: 'Moody', price: 89.99, rating: 4.6, image: product3, discount: 15 },
    { id: 4, name: 'Fruity', price: 99.99, rating: 4.5, image: product4, discount: 20 },
    { id: 5, name: 'Citrus', price: 109.99, rating: 3.5, image: product5, discount: 10 },
    { id: 6, name: 'Aromatic', price: 89.99, rating: 5.0, image: product6, discount: 15 },
    { id: 7, name: 'Chypre', price: 109.99, rating: 4.5, image: product7, discount: 5 },
    { id: 8, name: 'Leathery', price: 89.99, rating: 5.1, image: product8, discount: 15 }, 
  ];

  // Effect hook to update productsPerPage based on window width (responsive)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setProductsPerPage(1);  // On very small screens show 1 product
      } else if (window.innerWidth < 768) {
        setProductsPerPage(2);  // Small screens show 2
      } else if (window.innerWidth < 1024) {
        setProductsPerPage(3);  // Medium screens show 3
      } else {
        setProductsPerPage(4);  // Large screens show 4
      }
    };
    handleResize(); // Call once on mount
    window.addEventListener('resize', handleResize); // Update on resize
    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);

  // Calculate total number of slides needed (pages)
  const totalSliders = Math.ceil(products.length / productsPerPage);

  // Handler for next slide button - loops to start if at end
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSliders - 1 ? 0 : prev + 1));
  };

  // Handler for previous slide button - loops to end if at start
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSliders - 1 : prev - 1));
  };

  // Calculate which products to show on current slide/page
  const visibleProducts = products.slice(
    currentSlide * productsPerPage,
    (currentSlide + 1) * productsPerPage
  );

  return (
    <section
      id='products' // Section id for navigation
      className='py-12 scroll-mt-20 bg-gray-50' // Padding, scroll margin top, background color
    >
      <div className='container mx-auto px-4'>
        {/* Header row with title and slide controls */}
        <div className='flex justify-between items-center mb-8'>
          <h2 className='md:text-3xl text-2xl font-bold text-amber-900'>
            Featured Products
          </h2>
          <div className='flex space-x-4'>
            {/* Previous slide button */}
            <button
              onClick={prevSlide}
              className='p-2 rounded-full bg-white shadow-md hover:bg-pink-100 text-pink-600 transition-colors'
              aria-label='Previous slide'
            >
              <FiChevronsLeft size={24} />
            </button>
            {/* Next slide button */}
            <button
              onClick={nextSlide}
              className='p-2 rounded-full bg-white shadow-md hover:bg-pink-100 text-pink-600 transition-colors'
              aria-label='Next slide'
            >
              <FiChevronsRight size={24} />
            </button>
          </div>
        </div>

        {/* Product grid container */}
        <div className='relative overflow-hidden'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {/* Render visible products on current slide */}
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className='bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105'
              >
                <div className='relative'>
                  {/* Product image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className='w-full h-64 object-cover'
                  />
                  {/* Discount badge if product has discount */}
                  {product.discount > 0 && (
                    <span className='absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full'>
                      -{product.discount}%
                    </span>
                  )}
                  {/* Favorite / Wishlist button */}
                  <button className='absolute top-3 left-3 p-2 bg-white rounded-full shadow-md hover:bg-pink-100 text-gray-700'>
                    <FiHeart size={18} />
                  </button>
                </div>

                <div className='p-4'>
                  {/* Star rating display */}
                  <div className='flex items-center mb-2'>
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        size={16}
                        className={
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }
                      />
                    ))}
                    {/* Numeric rating */}
                    <span className='text-sm text-gray-500 ml-1'>({product.rating})</span>
                  </div>

                  {/* Product name */}
                  <h3 className='text-lg font-semibold text-gray-800 mb-1'>
                    {product.name}
                  </h3>

                  {/* Price and add to cart button */}
                  <div className='flex items-center justify-between'>
                    <div>
                      {/* Discounted price */}
                      <span className='text-lg font-bold text-pink-600'>
                        ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                      </span>
                      {/* Original price if discounted */}
                      {product.discount > 0 && (
                        <span className='text-sm text-gray-500 line-through ml-2'>
                          ${product.price.toFixed(2)}
                        </span>
                      )}
                    </div>

                    {/* Add to cart button */}
                    <button className='p-2 bg-pink-950 rounded-full text-white hover:bg-pink-700 transition-colors'>
                      <FiShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots for slides */}
        <div className='flex justify-center mt-6 space-x-2'>
          {[...Array(totalSliders)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)} // Click to jump to slide
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? 'bg-pink-950' : 'bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

