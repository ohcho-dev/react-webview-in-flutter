import React, { useState } from 'react';
import styled from 'styled-components';
import ProgramCard from '../components/ProgramCard';
import LayoutMainPage from '../layouts/LayoutMainPage';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { useNavigate } from 'react-router-dom';

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

const Divider = styled.div`
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
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
  const navigate = useNavigate();
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    mobileFirst: false,
    cssEase: 'ease-out',
  };

  const handleCardClick = (id: string) => {
    navigate(`/program/class/${id}`);
    navigate(`/program/coaching/${id}`);
  };

  return (
    <LayoutMainPage>
      <ProgramPageWrapper>
        <CarouselSection>
          <Slider {...settings}>
            <SliderContainer
              onClick={() => {
                console.log('1');
              }}
            >
              <img alt="banner 1" src="/images/banner-1.svg" />
            </SliderContainer>
            <SliderContainer
              onClick={() => {
                console.log('2');
              }}
            >
              <img alt="banner 1" src="/images/banner-example.png" />
            </SliderContainer>
          </Slider>
        </CarouselSection>
        <CouchingSection>
          <ProgramTitle>📄 전문 검사와 함께하는 코칭</ProgramTitle>
          <ProgramCard
            id={'1'}
            handleCardClick={handleCardClick}
            programImage="/images/program-image.svg"
            isDeadlineComingUp
            title="우리아이 양육 코칭"
            originalPrice={150000}
            price={29900}
            discountPercentage={85}
            isCoaching
          />
        </CouchingSection>
        <ClassSection>
          <ProgramTitle>🤖 전문가와 함께하는 클래스</ProgramTitle>
          <ProgramCard
            id={'3'}
            handleCardClick={handleCardClick}
            programImage="/images/program-image.svg"
            isDeadlineComingUp
            isOnline
            ageRange="12~15개월"
            title="[모집 10명] 아빠랑 같이 하는 모래놀이 클래스"
            location="서울시 송파구 어린이 문화회관"
            originalPrice={150000}
            price={29900}
            discountPercentage={85}
            isCoaching={false}
          />
          {/* Divider 마지막 index에서만 숨김처리하기 */}
          <Divider />
          <ProgramCard
            id={'2'}
            handleCardClick={handleCardClick}
            programImage="/images/program-image.svg"
            isDeadlineComingUp
            ageRange="전체 연령"
            title="[모집 10명] 아빠랑 같이 하는 모래놀이 클래스"
            dateTime="2022.11.22(화) 21:00"
            originalPrice={150000}
            price={29900}
            discountPercentage={85}
            isCoaching={false}
          />
        </ClassSection>
      </ProgramPageWrapper>
    </LayoutMainPage>
  );
};

export default ProgramPage;
