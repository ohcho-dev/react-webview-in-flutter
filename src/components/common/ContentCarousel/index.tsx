import { ReactNode, useRef } from "react";
import Slider from "react-slick";

interface ContentCarouselProps {
  children: ReactNode;
  settings: object;
}

const ContentCarousel = ({ children, settings }: ContentCarouselProps) => {
  const sliderRef = useRef<Slider>(null);

  return (
    <Slider ref={sliderRef} {...settings}>
      {children}
    </Slider>
  );
};

export default ContentCarousel;
