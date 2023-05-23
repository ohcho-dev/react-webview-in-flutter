import styled from "styled-components";
import { ColorLightBlack9Base, ColorLightEltern8 } from "../../../constant/ldsConstants/global";
import Imgix from "react-imgix";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  padding: 2rem;
`;
const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.div`
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: bold;
`;

const QuestionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 0.4rem;

  img {
    width: 2rem;
    height: 2rem;
  }
`;
const QuestionText = styled.div`
  font-size: 1.4rem;
  color: ${ColorLightEltern8};
`;

const GradeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 1.6rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`;

const GradeText = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 2.4rem;
  color: ${ColorLightBlack9Base};
`;

const UtilWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 0.2rem;

  img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const CountChip = styled.div`
  padding: 0.4rem 0.8rem;
  background: #ebfaf6;
  border-radius: 1.8rem;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: #00c7b1;
`;

const RecordGrade = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <FlexBox style={{ padding: "0.4rem 0 0.6rem" }}>
        <Title>기록 등급</Title>
        <QuestionButton onClick={() => navigate("/record/explanation")}>
          <Imgix src={`${process.env.REACT_APP_IMGIX_URL}/images/record/record_info-circle.svg`} />
          <QuestionText>왜 기록해야 하나요?</QuestionText>
        </QuestionButton>
      </FlexBox>

      <FlexBox>
        <GradeWrap>
          <Imgix src={`${process.env.REACT_APP_IMGIX_URL}/images/record/record_sprout.svg`} />
          <GradeText>새싹</GradeText>
        </GradeWrap>
        <UtilWrap onClick={() => navigate("/record/stampreward")}>
          <CountChip>10개 기록</CountChip>
          <Imgix src={`${process.env.REACT_APP_IMGIX_URL}/images/common/chevron-right.svg`} />
        </UtilWrap>
      </FlexBox>
    </Container>
  );
};

export default RecordGrade;
