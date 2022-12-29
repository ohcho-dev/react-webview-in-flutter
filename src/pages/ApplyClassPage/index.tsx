import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { getSelectedClassInfo } from "../../api/programApi";
import ChildSelectBottomModal from "../../components/ChildSelectBottomModal";
import Button from "../../components/common/Button";
import CustomModal from "../../components/common/CustomModal";
import { queryKeys } from "../../constant/queryKeys";
import LayoutDetailPage from "../../layouts/LayoutDetailPage";
import { childrenListState, useShareState } from "../../recoil/atom";
import { childType } from "../../utils/type";
import { BottomBtnWrap } from "../ProgramPage/components/styled";
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

  color: rgba(0, 0, 0, 0.8);

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

const SelectedChildInfo = styled.div`
  display: flex;
  align-items: center;

  color: black;
  font-weight: 400;
  font-size: 1.6rem;

  img {
    margin-right: 1rem;
    width: 2.5rem;
  }

  span:nth-child(2) {
    font-weight: 600;
    margin-right: 0.5rem;
  }
`;

const ApplicationCloseModalContent = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.2rem;
`;

const ApplyClassPage = () => {
  const { classid } = useParams();
  const navigate = useNavigate();
  const { data: classInfo } = useQuery(queryKeys.selectedClassInfo, () =>
    getSelectedClassInfo(classid),
  );
  const setShareBtnVisibility = useSetRecoilState(useShareState);
  const [openChildrenModal, setOpenChildrenModal] = useState<boolean>(false);
  const [openValidationMoadl, setOpenValidationModal] = useState<boolean>(false);
  const [requiredInfo, setRequiredInfo] = useState<requeiredInfo>({
    childId: "",
    parentName: "",
    parentPhoneNumber: "",
  });
  const [selectedChildInfo, setSelectedChildInfo] = useState<childType>({
    id: 0,
    name: "",
    parent_id: 0,
    gender: "",
    birth_date: "",
  });
  const childrenList = useRecoilValue(childrenListState);

  useEffect(() => {
    setShareBtnVisibility(false);
  }, []);

  useEffect(() => {
    if (selectedChildInfo.id) {
      setRequiredInfo({ ...requiredInfo, childId: selectedChildInfo.id.toString() });
    }
  }, [selectedChildInfo]);

  const toggleModal = () => {
    setOpenChildrenModal(!openChildrenModal);
  };

  const handleChildClick = (evt: React.MouseEvent<HTMLElement>) => {
    const childId = (evt.currentTarget as HTMLButtonElement).id;
    setSelectedChildInfo(
      childrenList.filter((child: childType) => child.id.toString() === childId)[0],
    );
    setOpenChildrenModal(false);
  };

  const handleApplyBtnClick = () => {
    const { childId, parentName, parentPhoneNumber } = requiredInfo;
    if (childId && parentName && parentPhoneNumber) {
      // TODO: 클래스 신청이 아직 마감되지 않았는지 조건 추가하기
      navigate("/program/class/apply-class/success");
    } else {
      setOpenValidationModal(true);
    }
  };

  const handleTypeInformation = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const id = evt.target.id;
    const value = evt.target.value;
    if (id === "parentName") {
      setRequiredInfo({ ...requiredInfo, parentName: value });
    } else if (id === "parentPhoneNumber") {
      setRequiredInfo({ ...requiredInfo, parentPhoneNumber: value });
    }
  };

  return (
    <LayoutDetailPage style={{ background: "#f6f6f6" }} bottomBtn>
      <ProgramSection classInfo={classInfo} />
      <PriceSection classInfo={classInfo} />
      <UserSection>
        <Title style={{ display: "flex" }}>
          아이 정보<div style={{ color: "#FD7473" }}>*</div>
        </Title>
        <SelectChildBtn onClick={() => toggleModal()}>
          {selectedChildInfo.id ? (
            <SelectedChildInfo>
              <img alt="icon-profile" src="/images/profile-0.svg" />
              <span>{selectedChildInfo.name}</span>
              <span>{`(${selectedChildInfo.birth_date}) ${
                selectedChildInfo.gender === "W" ? "여아" : "남아"
              }`}</span>
            </SelectedChildInfo>
          ) : (
            <span>아이를 선택해 주세요.</span>
          )}

          <img alt="icon-arrow-down" src="/images/icon-arrow-down-bg.svg" />
        </SelectChildBtn>
        <Title style={{ display: "flex" }}>
          보호자 정보<div style={{ color: "#FD7473" }}>*</div>
        </Title>
        <InputTitle>이름</InputTitle>
        <InputBox
          placeholder="이름을 입력해주세요."
          id="parentName"
          onChange={handleTypeInformation}
        />
        <InputTitle>휴대전화 번호</InputTitle>
        <InputBox
          placeholder="번호를 입력해주세요."
          type={"number"}
          id="parentPhoneNumber"
          onChange={handleTypeInformation}
        />
      </UserSection>
      <BottomBtnWrap>
        <Button theme={"black"} content={"신청하기"} onClick={handleApplyBtnClick} />
      </BottomBtnWrap>
      <ChildSelectBottomModal
        selectedChildInfo={selectedChildInfo}
        childrenList={childrenList}
        openModal={openChildrenModal}
        toggleModal={() => setOpenChildrenModal(!openChildrenModal)}
        handleChildClick={handleChildClick}
      />
      <CustomModal
        title="필수 정보를 모두 입력해주세요."
        content="필수 정보를 모두 입력해야 신청이 가능해요."
        isOpen={openValidationMoadl}
        toggleModal={() => setOpenValidationModal(!openValidationMoadl)}
      />
      <CustomModal
        topImage={
          <img
            alt="sad icon"
            src="/images/icon-sad-circle.svg"
            style={{ width: "9.5rem", marginBottom: "1.5rem" }}
          />
        }
        title="신청이 마감되었어요."
        isOpen={false}
        contentMarkup={
          <ApplicationCloseModalContent>
            <span>신청자가 많아 모집이 마감되었습니다.</span>
            <span>다른 프로그램을 신청해주세요.</span>
          </ApplicationCloseModalContent>
        }
        toggleModal={() => setOpenValidationModal(!openValidationMoadl)}
      />
    </LayoutDetailPage>
  );
};

export default ApplyClassPage;
