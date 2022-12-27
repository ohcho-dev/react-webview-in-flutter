import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useNavigate } from "react-router-dom";
import LayoutMainPage from "../../layouts/LayoutMainPage";
import ProgramCard from "./components/ProgramCard";
import { useQuery } from "react-query";
import { getClassList, getCoachingList } from "../../api/programApi";
import { queryKeys } from "../../constant/queryKeys";
import { coachingType } from "../../utils/type";
import { getDiscountPercentage } from "../../utils/getDiscountPercentage";
import { Divider } from "./components/styled";

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
  const navigate = useNavigate();
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    mobileFirst: false,
    cssEase: "ease-out",
  };

  const { data: coachingList } = useQuery(queryKeys.coachingList, () => getCoachingList());
  const { data: classList } = useQuery(queryKeys.classList, () => getClassList());

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
          {coachingList[0].map((coaching: coachingType, index: number) => {
            return (
              <div key={index}>
                <ProgramCard
                  id={coaching.id}
                  handleCardClick={() => handleCardClick(coaching.id, "coaching")}
                  programImage={coaching.main_image}
                  title={coaching.name}
                  originalPrice={coaching.base_price}
                  price={coaching.price}
                  discountPercentage={getDiscountPercentage(coaching.base_price, coaching.price)}
                  utilVisible={false}
                />
                {index !== coachingList[0].length - 1 && <Divider />}
              </div>
            );
          })}
        </CouchingSection>
        <ClassSection>
          <ProgramTitle>🤖 전문가와 함께하는 클래스</ProgramTitle>
          {classList.map((singleClass: { [key: string]: any }, index: number) => {
            return (
              <div key={index}>
                <ProgramCard
                  id={singleClass.id}
                  handleCardClick={() => handleCardClick(singleClass.id, "class")}
                  programImage={singleClass.main_image}
                  title={singleClass.name}
                  originalPrice={singleClass.base_price}
                  price={singleClass.price}
                  discountPercentage={getDiscountPercentage(
                    singleClass.base_price,
                    singleClass.price,
                  )}
                  utilVisible={false}
                />
                {index !== classList.length - 1 && <Divider />}
              </div>
            );
          })}
        </ClassSection>
      </ProgramPageWrapper>
    </LayoutMainPage>
  );
};

export default ProgramPage;
