
import React from 'react';
import Product from '../assets/65.jpeg';

function About() {
  return (
    <section
      id='about'
      className='min-h-screen scroll-at-20 bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8'>
        {/* image section */}
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row gap-12 mb-20'>
          <div className='lg:w-1/2 mt-20'> 
  <div className='relative rounded-2xl overflow-hidden h-[550px] shadow-xl'>
    <img
      src={Product}
      alt='Luxury perfumes'
      className='w-full h-full object-cover'
    />
    <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50'>
      <div className='absolute bottom-0 left-0 p-6 text-white'>
        <h3 className='text-2xl font-bold'>Since 2010</h3>
        <p className='mt-2'>ShopEase</p>
      </div>
    </div>
  </div>
</div>


          {/* text section */}
          <div className='lg:w-1/2 flex flex-col justify-center'>
            <h2 className='text-4xl font-bold text-amber-900 mb-6'>About Us</h2>
            <p className='text-lg text-gray-600 mb-6'>
              Welcome to ShopEase - your one  stop destination for all your shopping needs.
              We offer a wide range of products from electronics to fashion,all at unbeatable prices.
            </p>

            <div className='grid grid-cols-2 gap-4'>
              <div className='bg-white p-4 rounded-lg shadow-sm border border-gray-100'>
                <h4 className='font-semibold text-pink-600'>50+</h4>
                <p className='text-gray-600'>Unique fragrances</p>
              </div>
              <div className='bg-white p-4 rounded-lg shadow-sm border border-gray-100'>
                <h4 className='font-semibold text-pink-600'>50+</h4>
                <p className='text-gray-600'>Countries worldwide</p>
              </div>
              <div className='bg-white p-4 rounded-lg shadow-sm border border-gray-100'>
                <h4 className='font-semibold text-pink-600'>100%</h4>
                <p className='text-gray-600'>Customer satisfaction</p>
              </div>
              <div className='bg-white p-4 rounded-lg shadow-sm border border-gray-100'>
                <h4 className='font-semibold text-pink-600'>24/7</h4>
                <p className='text-gray-600'>Customer support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
