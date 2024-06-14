// Carousel.js
import React, { useState } from 'react'

const images = [
  'https://via.placeholder.com/300x200?text=1',
  'https://via.placeholder.com/300x200?text=2',
  'https://via.placeholder.com/300x200?text=3',
  'https://via.placeholder.com/300x200?text=4',
  'https://via.placeholder.com/300x200?text=5',
]

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(2)

  const handleClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className='relative w-[40em] overflow-hidden'>
      <div
        className='flex transition-transform duration-500'
        style={{
          transform: `translateX(calc(50% - ${currentIndex * 100}% - ${
            currentIndex * 10
          }px))`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className='w-64 h-40 cursor-pointer m-1'
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <button
        className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2'
        onClick={() =>
          handleClick((currentIndex - 1 + images.length) % images.length)
        }
      >
        &#9664;
      </button>
      <button
        className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2'
        onClick={() => handleClick((currentIndex + 1) % images.length)}
      >
        &#9654;
      </button>
    </div>
  )
}