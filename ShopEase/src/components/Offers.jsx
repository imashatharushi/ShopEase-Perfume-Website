
import React from 'react';
// Importing icons from react-icons for UI decoration
import { FiClock, FiGift, FiPercent } from 'react-icons/fi';

const Offers = () => {
  // Array of current offer objects with details like title, description, discount info, colors, etc.
  const currentOffers = [
    {
      id: 1,
      title: 'Hot Summer Sale',
      description: 'Up to 30% off on summer perfume collection',
      discount: '30%',
      endDate: '2026-08-31',
      code: 'SUMMER30',
      bgColor: 'bg-amber-200',     // Background color class for the card
      textColor: 'text-amber-700',  // Text color class for headings and icons
      isDiscount: true,             // Flag to decide which icon to show
    },
    {
      id: 2,
      title: 'Free Perfume Offers',
      description: 'Get a free perfume when you buy two products from our luxury brands',
      discount: 'Gift',
      endDate: '2026-09-15',
      code: 'FREEPERFUME',
      bgColor: 'bg-purple-200',
      textColor: 'text-purple-700',
      isDiscount: false,
    },
    {
      id: 3,
      title: 'New Launch Discount',
      description: '20% off on our newly launched perfumes',
      discount: '20%',
      endDate: '2026-07-10',
      code: 'NEW20',
      bgColor: 'bg-pink-200',
      textColor: 'text-pink-700',
      isDiscount: true,
    },
  ];

  return (
    <section
      id='offers' // Section id for navigation or linking
      className='container scroll-mt-20 mx-auto px-4 py-12' 
      /* Container with max width and padding,
         scroll margin top for offset on anchor navigation */
    >
      {/* Section title */}
      <h2 className='text-3xl font-bold text-center mb-2 text-amber-900'>
        Special Offers
      </h2>
      {/* Section subtitle */}
      <p className='text-center text-gray-600 mb-12'>
        Take advantage of these limited-time offers
      </p>

      {/* Responsive grid layout for offer cards:
          1 column on small screens,
          2 columns on medium,
          3 columns on large screens */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* Loop through each offer object to create cards */}
        {currentOffers.map((offer) => (
          <div
            key={offer.id} // Unique key for React list rendering
            className={`${offer.bgColor} rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105`}
            /* Card container with dynamic background color,
               rounded corners, shadow,
               overflow hidden to clip children,
               smooth scale transform on hover */
          >
            <div className='p-6'>
              {/* Header of the card with title and icon */}
              <div className='flex justify-between items-start mb-4'>
                <h3 className={`${offer.textColor} text-xl font-semibold`}>
                  {offer.title}
                </h3>
                <span className='bg-white rounded-full p-3 shadow-md'>
                  {/* Conditional icon rendering based on discount or gift */}
                  {offer.isDiscount ? (
                    <FiPercent className={`${offer.textColor} text-2xl`} />
                  ) : (
                    <FiGift className={`${offer.textColor} text-2xl`} />
                  )}
                </span>
              </div>

              {/* Offer description */}
              <p className='text-gray-700 mb-6'>{offer.description}</p>

              {/* Offer expiry info with clock icon */}
              <div className='flex items-center text-gray-600 mb-6'>
                <FiClock className='mr-2' />
                <span>Ends on {offer.endDate}</span>
              </div>

              {/* Offer code box */}
              <div className='bg-white rounded-lg p-4 mb-4'>
                <p className='text-sm text-gray-500 mb-1'>Use Code</p>
                <p className='font-mono font-bold text-lg'>{offer.code}</p>
              </div>

              {/* Claim offer button with dynamic text and border colors */}
              <button
                className={`w-full py-3 rounded-lg ${offer.textColor} font-semibold border ${offer.textColor.replace(
                  'text',
                  'border'
                )} hover:bg-white`}
              >
                Claim Offer
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
