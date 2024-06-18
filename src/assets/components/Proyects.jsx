import React, { useEffect, useState } from 'react'
import FlyImg from '../../assets/img/PageFlybondi.webp'
import MenuImg from '../../assets/img/menuBackground.webp'
import ErideImg from '../../assets/img/EridePageImage.webp'

export default function Proyects() {
  const images = [FlyImg, MenuImg, ErideImg]
  return (
    <>
      <div className='flex  w-full overflow-hidden items-center justify-center'>
        <Carousel images={images} />
      </div>
    </>
  )
}
// Carousel.js

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(1)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
  }

  return (
    <div className=' relative w-[48em]  duration-200   '>
      <div
        className='flex transition-linear duration-500'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <>
            <img
              className='w-full md:px-5 h-50 md:h-80 flex brightness-90 hover:brightness-100 items-center justify-center  object-contain cursor md:rounded-xl'
              key={index}
              src={img}
              onClick={() => setCurrentIndex(index)}
              alt=''
            />
          </>
        ))}
      </div>
      <button
        className='flex xl:hidden absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-xl p-3'
        onClick={prevSlide}
      >
        &#9664;
      </button>
      <button
        className='flex xl:hidden absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-xl p-3'
        onClick={nextSlide}
      >
        &#9654;
      </button>
    </div>
  )
}
