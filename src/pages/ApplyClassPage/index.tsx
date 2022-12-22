import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import Button from "../../components/common/Button";
import LayoutDetailPage from "../../layouts/LayoutDetailPage";
import { useShareState } from "../../recoil/atom";
import { PaymentBtnWrap } from "../ProgramDetailPage";
import PriceSection from "./components/PriceSection";
import ProgramSection from "./components/ProgramSection";

interface requeiredInfo {
  childId: string;
  parentName: string;
  parentPhoneNumber: string;
}

export const Title = styled.div`
  font-weight: 700;
  font-size: 1.8rem;

  margin-bottom: 2.5rem;
`;

const Base = styled.div`
  background: white;
  width: 100%;

  padding: 2.5rem;
  margin-bottom: 1rem;
`;

const UserSection = styled(Base)`
  height: 37rem;
`;

const SelectChildBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;

  font-weight: 500;
  font-size: 18px;
  line-height: 25px;

  color: rgba(0, 0, 0, 0.2);
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const InputTitle = styled.div`
  margin-bottom: 1rem;

  font-weight: 400;
  font-size: 1.4rem;
  line-height: 25px;

  color: rgba(10, 10, 10, 0.8);
`;

const InputBox = styled.input`
  width: 100%;
  border: none;

  font-weight: 500;
  font-size: 18px;
  line-height: 25px;

  color: rgba(0, 0, 0, 0.5);

  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  :focus {
    outline: none;
  }

  ::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`;

const ApplyClassPage = () => {
  const { classid } = useParams();
  const setShareBtnVisibility = useSetRecoilState(useShareState);
  const [requiredInfo, setRequiredInfo] = useState<requeiredInfo>({
    childId: "",
    parentName: "",
    parentPhoneNumber: "",
  });

  useEffect(() => {
    setShareBtnVisibility(false);
  }, []);

  const handleSelectChildBtnClick = () => {};

  return (
    <LayoutDetailPage style={{ background: "#f6f6f6" }} bottomBtn>
      <ProgramSection />
      <PriceSection />
      <UserSection>
        <Title style={{ display: "flex" }}>
          아이 정보<div style={{ color: "#FD7473" }}>*</div>
        </Title>
        <SelectChildBtn onClick={handleSelectChildBtnClick}>
          <span>아이를 선택해 주세요.</span>
          <img alt="icon-arrow-down" src="/images/icon-arrow-down-bg.svg" />
        </SelectChildBtn>
        <Title style={{ display: "flex" }}>
          보호자 정보<div style={{ color: "#FD7473" }}>*</div>
        </Title>
        <InputTitle>이름</InputTitle>
        <InputBox placeholder="이름을 입력해주세요." />
        <InputTitle>휴대전화 번호</InputTitle>
        <InputBox placeholder="번호를 입력해주세요." />
      </UserSection>
      <PaymentBtnWrap>
        <Button theme={"black"} content={"신청하기"} />
      </PaymentBtnWrap>
    </LayoutDetailPage>
  );
};

export default ApplyClassPage;
