import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LayoutMainPage from "../../layouts/LayoutMainPage";
import ContentItem from "./components/ContentItem";
import ContentTitle from "./components/ContentTitle";

const PageTitleWrap = styled.div`
  position: fixed;
  top: 5.9rem;
  left: 0;
  width: 100%;
  background: #fff;
  border-bottom: solid 0.2rem #f5f5f5;
  padding: 2rem 2.5rem;
  z-index: 10;
`;
const ShadowBox = styled.div`
  position: fixed;
  top: 16.2rem;
  left: 0;
  width: 100%;
  height: 1px;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.5);
  background: #f00;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 3.2rem;
  letter-spacing: -0.04rem;
  color: #000000;
`;

const ProgramStatus = styled.div`
  margin-top: 0.8rem;

  span:nth-child(2) {
    margin-left: 0.5rem;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 2.2rem;
    letter-spacing: -0.04rem;
    color: rgba(0, 0, 0, 0.3);
  }

  span:nth-child(3) {
    margin-left: 0.5rem;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 2.2rem;
    letter-spacing: -0.04rem;
    color: rgba(0, 0, 0, 0.3);
  }
`;

const ProceedStatus = styled.span`
  height: 2.4rem;
  background: #ffffff;
  border: 1px solid ${(props: { color: string }) => props.color};
  border-radius: 2rem;
  padding: 0.2rem 0.9rem;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: #00c7b1;
`;

const CoachingDetailPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <LayoutMainPage marginTop="10rem">
        <PageTitleWrap>
          <Title>우리아이 양육 코칭 23~24개월</Title>
          <ProgramStatus>
            <ProceedStatus color={"#00c7b1"}>{"진행중"}</ProceedStatus>
            <span>~2022.11.14</span>
            <span>12일 남음</span>
          </ProgramStatus>
        </PageTitleWrap>
        <ShadowBox />
        <ContentTitle emoji="flag-in-hole" name="결과지" />
        <ContentItem
          imgUrl="/images/coaching-detail-default-img.svg"
          chipStatus={["waiting", "success"]}
          name="123"
          useArrowBtn={true}
          handleClick={() => navigate("/coaching/questionnarie/1")}
        />
        <ContentTitle emoji="check-mark-button" name="과제" />

        <ContentItem
          imgUrl="/images/coaching-detail-default-img.svg"
          chipStatus={["waiting", "success"]}
          name="123"
          useArrowBtn={true}
          handleClick={() => navigate("/coaching/questionnarie/1")}
        />
      </LayoutMainPage>
    </>
  );
};

export default CoachingDetailPage;
