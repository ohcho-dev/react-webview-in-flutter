import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useNavigate } from "react-router-dom";
import LayoutMainPage from "../../layouts/LayoutMainPage";
import ProgramCard from "./components/ProgramCard";
import { useQuery } from "react-query";
import { getCoachingList } from "../../api/programApi";
import { queryKeys } from "../../constant/queryKeys";
import { coachingType } from "../../utils/type";
import { getDiscountPercentage } from "../../utils/getDiscountPercentage";

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
    cssEase: "ease-out",
  };

  const { data } = useQuery(queryKeys.coachingList, () => getCoachingList());

  const handleCardClick = (id: number, category: "coaching" | "class") => {
    if (category === "coaching") {
      navigate(`/program/coaching/${id}`);
    } else {
      navigate(`/program/class/${id}`);
    }
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
          {data[0].map((coaching: coachingType, index: number) => {
            return (
              <>
                <ProgramCard
                  id={coaching.id}
                  handleCardClick={() => handleCardClick(coaching.id, "coaching")}
                  programImage={coaching.main_image}
                  isDeadlineComingUp
                  title={coaching.name}
                  originalPrice={coaching.base_price}
                  price={coaching.price}
                  discountPercentage={getDiscountPercentage(coaching.base_price, coaching.price)}
                  utilVisible={false}
                />
                {index !== data[0].length - 1 && <Divider />}
              </>
            );
          })}
        </CouchingSection>
        <ClassSection>
          <ProgramTitle>🤖 전문가와 함께하는 클래스</ProgramTitle>
          <ProgramCard
            id={2}
            handleCardClick={() => handleCardClick(2, "class")}
            programImage="/images/program-image.svg"
            isDeadlineComingUp
            isOnline
            ageRange="12~15개월"
            title="[모집 10명] 아빠랑 같이 하는 모래놀이 클래스"
            location="서울시 송파구 어린이 문화회관"
            originalPrice={150000}
            price={29900}
            discountPercentage={85}
            utilVisible
          />
          {/* Divider 마지막 index에서만 숨김처리하기 */}
          <Divider />
          <ProgramCard
            id={3}
            handleCardClick={() => handleCardClick(3, "class")}
            programImage="/images/program-image.svg"
            isDeadlineComingUp
            ageRange="전체 연령"
            title="[모집 10명] 아빠랑 같이 하는 모래놀이 클래스"
            dateTime="2022.11.22(화) 21:00"
            originalPrice={150000}
            price={29900}
            discountPercentage={85}
            utilVisible
          />
        </ClassSection>
      </ProgramPageWrapper>
    </LayoutMainPage>
  );
};

export default ProgramPage;
