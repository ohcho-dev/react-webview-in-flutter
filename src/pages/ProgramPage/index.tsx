import { Suspense } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import LayoutMainPage from "../../layouts/LayoutMainPage";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import CoachingList from "./CoachingList";
import ClassList from "./ClassList";
import { ErrorBoundary } from "../ErrorPage";
import { useQueryErrorResetBoundary } from "react-query";

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
  margin-top: 5rem;
`;

const ProgramTitle = styled.span`
  font-weight: 700;
  font-size: 2rem;
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
  const { reset } = useQueryErrorResetBoundary();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
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
          <ProgramTitle>📄 전문 검사와 함께하는 코칭</ProgramTitle>
          <ErrorBoundary onReset={reset}>
            <Suspense fallback={<LoadingSpinner />}>
              <CoachingList />
            </Suspense>
          </ErrorBoundary>
        </CouchingSection>

        <ClassSection>
          <ProgramTitle>🤖 전문가와 함께하는 클래스</ProgramTitle>
          <ErrorBoundary onReset={reset}>
            <Suspense fallback={<LoadingSpinner />}>
              <ClassList />
            </Suspense>
          </ErrorBoundary>
        </ClassSection>
      </ProgramPageWrapper>
    </LayoutMainPage>
  );
};

export default ProgramPage;
