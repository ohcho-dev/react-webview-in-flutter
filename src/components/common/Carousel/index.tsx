import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import UseImgix from "../Imgix";
import * as S from "./Carousel.styled";
import { CSSProperties } from "react";

interface CarouselProps {
  setting?: { [key: string]: any };
  sliderInfoArr: { id: string | number; imgUrl: string; handleClick: () => void }[];
  carouselWrapperStyle?: CSSProperties;
}

const Carousel = ({ setting, sliderInfoArr, carouselWrapperStyle }: CarouselProps) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: sliderInfoArr.length > 1,
    speed: 1300,
    autoplaySpeed: 3000,
    mobileFirst: false,
    cssEase: "ease-out",
    ...setting,
  };
  return (
    <S.CarouselWrapper style={{ ...carouselWrapperStyle }}>
      <Slider {...settings}>
        {sliderInfoArr.map(({ imgUrl, handleClick, id }) => (
          <div onClick={handleClick} key={id}>
            <UseImgix srcUrl={imgUrl} style={{ width: "100%" }} />
          </div>
        ))}
      </Slider>
    </S.CarouselWrapper>
  );
};

export default Carousel;
