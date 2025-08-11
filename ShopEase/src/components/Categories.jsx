
import React from 'react';
// Importing product images from assets folder
import product9 from '../assets/68.jpeg';
import product10 from '../assets/69.jpeg';
import product11 from '../assets/62.jpeg';
import product12 from '../assets/47.jpeg';
import product13 from '../assets/36.jpeg';
import product14 from '../assets/63.jpeg';
// React icon (unused here, but imported)
import { BiCategory } from 'react-icons/bi';

// Array of category objects with image, alt text, title and description
const categoryData = [
  { img: product9, alt: "Men's perfumes", title: "Men's Collection", description: "Find your favorite scent.." },
  { img: product10, alt: "Woman's perfumes", title: "Woman's Collection", description: "Find your favorite scent.." },
  { img: product11, alt: "Luxury perfumes", title: "Luxury Editions", description: "Find your favorite scent." },
  { img: product12, alt: "Unisex perfumes", title: "Unisex Editions", description: "Find your favorite scent." },
  { img: product13, alt: "Arabic Oud", title: "Arabic Oud", description: "Find your favorite scent." },
  { img: product14, alt: "Gift Sets", title: "Gift Packages", description: "Find your favorite scent." }, 
];

// Functional component to render the categories section
function Categories() {
  return (
    <section
      id='categories' // Section ID for navigation or linking
      className='py-16 scroll-mt-20 bg-white' // Padding, scroll margin top and background color styling
    >
      <div className='container mx-auto px-4'> 
        {/* Centered container with horizontal padding */}
        
        <div className='text-center mb-12'>
          {/* Section header with title and subtitle */}
          <h2 className='text-3xl font-bold text-amber-950 mb-3'>
            Explore Our Fragrance Collection
          </h2>
          <p className='text-gray-800 max-w-2xl mx-auto'>
                  Explore our latest collection.
          </p>
        </div>

        {/* Grid layout for category cards: 1 column on mobile, 3 columns on small+ screens */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
          {/* Loop through each category object to create cards */}
          {categoryData.map((category, index) => (
            <div
              key={index} // Unique key for list rendering
              className='relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
              /* Card container with rounded corners, shadow and hover effect */
            >
              <div className='h-64 overflow-hidden'>
                {/* Fixed height container for image with overflow hidden to crop */}
                <img
                  src={category.img} // Category image source
                  alt={category.alt} // Alt text for accessibility
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                  /* Image covers container, zooms on hover smoothly */
                />
              </div>

              {/* Gradient overlay on image to improve text readability */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'>
                {/* Positioned text container at bottom-left with padding */}
                <div className='absolute bottom-0 left-0 p-6'>
                  <h3 className='text-xl font-semibold text-white'>{category.title}</h3>
                  {/* Title of the category */}
                  <p className='text-gray-200 mt-1'>{category.description}</p>
                  {/* Short description bel Lorem ipsum dolow title */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
