import React, { Suspense } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import LayoutMainPage from "../../layouts/LayoutMainPage";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import CoachingList from "./CoachingList";
import ClassList from "./ClassList";
import UseEmoji from "../../utils/UseEmoji";

const ProgramPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem;
`;

const CarouselSection = styled.div`
  width: 100%;
  margin: 0 0 3rem 0;
`;

const CouchingSection = styled.div`
  width: 100%;
`;

const ClassSection = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const ProgramTitle = styled.span`
  font-weight: 700;
  font-size: 2rem;
  line-height: 2rem;
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  margin-left: 0.4rem;
`;

const SliderContainer = styled.div`
  width: 31.5rem;
  height: 14rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ProgramPage = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1300,
    autoplaySpeed: 3000,
    mobileFirst: false,
    cssEase: "ease-out",
  };

  return (
    <LayoutMainPage>
      <ProgramPageWrapper>
        <CarouselSection>
          <Slider {...settings}>
            <SliderContainer
              onClick={() => {
                console.log("1");
              }}
            >
              <img alt="banner 1" src="/images/banner-1.svg" />
            </SliderContainer>
            <SliderContainer
              onClick={() => {
                console.log("2");
              }}
            >
              <img alt="banner 1" src="/images/banner-example.png" />
            </SliderContainer>
          </Slider>
        </CarouselSection>
        <CouchingSection>
          <ProgramTitle>
            <UseEmoji emojiName="page-facing-up" />
            <Title>전문 검사와 함께하는 코칭</Title>
          </ProgramTitle>
          <Suspense fallback={<LoadingSpinner height="30vw" />}>
            <CoachingList />
          </Suspense>
        </CouchingSection>
        <ClassSection>
          <ProgramTitle>
            <UseEmoji emojiName="robot" />
            <Title>전문가와 함께하는 클래스</Title>
          </ProgramTitle>
          <Suspense fallback={<LoadingSpinner height="30vw" />}>
            <ClassList />
          </Suspense>
        </ClassSection>
      </ProgramPageWrapper>
    </LayoutMainPage>
  );
};

export default ProgramPage;
