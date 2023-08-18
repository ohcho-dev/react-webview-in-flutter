import { ReactNode, useEffect, useRef } from "react";
import Slider from "react-slick";
import { useRecoilValue } from "recoil";
import { contentCarouselSlideNumberState } from "store/domain/coaching";

interface ContentCarouselProps {
  children: ReactNode;
  settings: object;
}

const ContentCarousel = ({ children, settings }: ContentCarouselProps) => {
  const sliderRef = useRef<Slider>(null);
  const contentCarouselSlideNumber = useRecoilValue(contentCarouselSlideNumberState);

  useEffect(() => {
    sliderRef?.current?.slickGoTo(contentCarouselSlideNumber);
  }, [contentCarouselSlideNumber]);

  return (
    <Slider ref={sliderRef} {...settings}>
      {children}
    </Slider>
  );
};

export default ContentCarousel;
