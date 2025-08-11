import React from 'react'
// Importing hero image from assets folder

 import hero from '../assets/2.jpeg'




function Hero() {
  return (
    <section
      id='home' // Section id for navigation or linking
      className='bg-amber-50 scroll-mt-20 py-16' 
      /* Background color, scroll margin top for anchor offset, vertical padding */
    >
      <div
        className='max-w-7xl mx-auto px-4 5m:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-10'
      >
        <div className='text-center lg:text-left max-w-xl'>
          <h1 className='text-4xl 5m:text-5xl font-bold text-amber-950 leading-tight mb-4'>
            Discover The Best Deals on Top Products
          </h1>
          <p className='text-gray-700 text-base 5m:text-lg mb-6'>
           Experience unparalleled discounts on top brands today.
          </p>
          <div className='flex justify-center lg:justify-start gap-4'>
            <a
              href='./products' // Link to products page
              className='px-6 py-3 bg-pink-900 text-white text-5m font-semibold rounded-lg shadow hover:bg-pink-600 transition'
            >
              Shop Now
            </a>
            <a
              href='./offers' // Link to offers page
              className='px-6 py-3 border border-pink-500 text-pink-600 text-5m font-semibold rounded-lg hover:bg-pink-200 transition'
            >
              View Offers
            </a>
          </div>
        </div>

        <div className='w-full lg:w-1/2 flex justify-center'>
          <img
            src='src/assets/2.jpeg' // Image source - should use imported variable 'hero' instead
            alt="hero image" // Alt text for accessibility
            className='w-3/4 lg:w-full max-w-md mx-auto rounded-xl shadow-lg'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
