// Carousel.js
import React, { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 300px;
  position: relative;
`;

const CarouselInner = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
`;

const CarouselItem = styled.div`
  min-width: 100%;
  box-sizing: border-box;
  background: ${({ background }) => background};
  color: white;
  text-align: center;
  font-size: 2em;
  padding: 20px;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  ${({ direction }) => direction}: 10px;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1;
`;

const items = [
  { background: 'tomato', content: 'Item 1' },
  { background: 'skyblue', content: 'Item 2' },
  { background: 'limegreen', content: 'Item 3' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <CarouselContainer>
      <CarouselInner currentIndex={currentIndex}>
        {items.map((item, index) => (
          <CarouselItem key={index} background={item.background}>
            {item.content}
          </CarouselItem>
        ))}
      </CarouselInner>
      <NavButton direction="left" onClick={prevSlide}>
        &#9664;
      </NavButton>
      <NavButton direction="right" onClick={nextSlide}>
        &#9654;
      </NavButton>
    </CarouselContainer>
  );
};

export default Carousel;
