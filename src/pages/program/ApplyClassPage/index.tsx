import React, { RefObject, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import ChildSelectBottomModal from "../../../components/common/ChildSelectBottomModal";
import Button from "../../../components/common/Button";
import CustomModal from "../../../components/common/CustomModal";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";

import { ChildType } from "../../../types/common";
import { getDate } from "../../../utils/date/getDateTime";
import UseImgix from "../../../components/common/Imgix";
import { ApplyClassBodyType } from "../../../types/apis/program";
import {
  childrenListState,
  selectedChildInfoState,
  visibleShareState,
} from "../../../store/common";
import * as S from "./applyClassPage.styled";
import ProgramSection from "../../../components/domain/program/applyClassPage/ProgramSection";
import PriceSection from "../../../components/domain/program/applyClassPage/PriceSection";
import ClassRejectModal from "../../../components/domain/program/applyClassPage/ClassRejectModal";
import useSelectedClassInfo from "queries/domain/program/useSelectedClassInfo";
import useApplyClass from "queries/domain/program/useApplyClass";
import { DEFAULT_CHILD_VALUE } from "utils/default";

const USER_SECTION_HEIGHT = 37;

const ApplyClassPage = () => {
  const { classid } = useParams();
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneNumberInputRef = useRef<HTMLInputElement>(null);
  const fullHeight = useRef<number>(window.innerHeight);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const defaultChild = useRecoilValue(selectedChildInfoState);
  const setShareBtnVisibility = useSetRecoilState(visibleShareState);
  const childrenList = useRecoilValue(childrenListState);
  const [openChildrenModal, setOpenChildrenModal] = useState<boolean>(false);
  const [openValidationMoadl, setOpenValidationModal] = useState<boolean>(false);
  const [requiredInfo, setRequiredInfo] = useState<ApplyClassBodyType>({
    child_id: "",
    class_id: "",
    parent_name: "",
    parent_phone: "",
  });
  const [selectedChildInfo, setSelectedChildInfo] = useState<ChildType>(DEFAULT_CHILD_VALUE);
  const [errorCode, setErrorCode] = useState<
    "MONTH_NOT_ACCEPTABLE" | "CLASS_STUDENT_FULL" | "CLASS_ALREADY_APPLIED"
  >("MONTH_NOT_ACCEPTABLE");
  const [openRejectModal, setOpenRejectModal] = useState(false);
  const activeInputref = useRef<HTMLInputElement | null>(null);
  const { data: classInfo } = useSelectedClassInfo(classid);

  const { mutate: applyClass } = useApplyClass(setErrorCode, setOpenRejectModal);

  useEffect(() => {
    setShareBtnVisibility(false);
    setSelectedChildInfo(defaultChild);
    fullHeight.current = window.innerHeight;

    if (window.visualViewport) {
      const handleResize = (event: any) => {
        // if (os.indexOf("android") > -1) {
        //   eventName = fullHeight.current > window.innerHeight ? "keyboardopen" : "keyboardclose";
        //   keyboardHeight = fullHeight.current - window.innerHeight;
        //   if (current !== null) {
        //     if (fullHeight.current > window.innerHeight) {
        //       current.style.height = `${37 + keyboardHeight / 10}rem`;
        //       reff.current?.scrollIntoView({ behavior: "smooth" });
        //       console.log(current.style.height);
        //     } else {
        //       current.style.height = "37rem";
        //     }
        //   }
        // }
        // if (os.indexOf("iphone") > -1) {
        //   const keyboardHeight = fullHeight.current - visualViewportHeight;
        //   if (current !== null) {
        //     if (fullHeight.current > visualViewportHeight) {
        //       current.style.height = `${
        //         USER_SECTION_HEIGHT + keyboardHeight / 10 - BOTTOM_BTN_WRAP_HEIGHT - 1.5
        //       }rem`;
        //       activeInputref.current?.scrollIntoView({ behavior: "smooth" });
        //     } else {
        //       current.style.height = `${USER_SECTION_HEIGHT}rem`;
        //     }
        //   }
        // }
      };
      window.visualViewport.addEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (selectedChildInfo.id) {
      setRequiredInfo({ ...requiredInfo, child_id: selectedChildInfo.id.toString() });
      setSelectedIndex(childrenList.findIndex((item: any) => item.id === selectedChildInfo.id));
    }
  }, [selectedChildInfo]);

  const toggleModal = () => {
    setOpenChildrenModal(!openChildrenModal);
  };

  const handleChildClick = (evt: React.MouseEvent<HTMLElement>) => {
    const childId = (evt.currentTarget as HTMLButtonElement).id;
    setSelectedChildInfo(
      childrenList.filter((child: ChildType) => child.id.toString() === childId)[0],
    );
    setOpenChildrenModal(false);
  };

  const handleApplyBtnClick = () => {
    const { child_id, parent_name, parent_phone } = requiredInfo;
    if (child_id && parent_name && parent_phone && classid) {
      applyClass({ ...requiredInfo, class_id: classid.toString() });
    } else {
      setOpenValidationModal(true);
    }
  };

  const handleTypeInformation = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const id = evt.target.id;
    const value = evt.target.value;
    const maxLength = evt.target.maxLength;

    // 최대 글자 수 제한
    if (maxLength && maxLength < value.length) return;

    if (id === "parentName") {
      // 한글, 영문, 숫자만 입력가능
      const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]*$/;
      if (!regex.test(value)) {
        value.replace(/[^a-z|A-Z|0-9|ㄱ-ㅎ|가-힣]/g, "");
        return;
      }
      setRequiredInfo({ ...requiredInfo, parent_name: value });
    } else if (id === "parentPhoneNumber") {
      setRequiredInfo({ ...requiredInfo, parent_phone: value });
    }
  };

  const handleFocusInput = (ref: RefObject<HTMLInputElement>) => {
    document.getElementById("main")?.scrollTo();
    activeInputref.current = ref.current;
  };

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLDivElement>) => {
    if (evt.key === "Enter") {
      const { current: section } = sectionRef;
      if (section !== null) {
        section.style.height = `${USER_SECTION_HEIGHT}rem`;
        (document.activeElement as HTMLElement).blur();
      }
    }
  };

  return (
    <>
      <LayoutDetailPage
        style={{ background: "#f6f6f6" }}
        titleBarBorder={true}
        bottomBtn
        bottomBtnElement={
          <Button theme={"black"} content={"신청하기"} onClick={handleApplyBtnClick} />
        }
      >
        <ProgramSection classInfo={classInfo} />
        <PriceSection classInfo={classInfo} />
        <S.UserSection ref={sectionRef}>
          <S.Title style={{ display: "flex" }}>
            아이 정보<div style={{ color: "#FD7473" }}>*</div>
          </S.Title>
          <S.SelectChildBtn onClick={() => toggleModal()}>
            {selectedChildInfo.id ? (
              <S.SelectedChildInfo>
                <UseImgix alt="icon-profile" srcUrl={`/images/profile-${selectedIndex}.png`} />
                <span>{selectedChildInfo.name}</span>
                <span>{`(${getDate(selectedChildInfo.birth_date)}) ${
                  selectedChildInfo.gender === "F" ? "여아" : "남아"
                }`}</span>
              </S.SelectedChildInfo>
            ) : (
              <span>아이를 선택해 주세요.</span>
            )}

            <UseImgix alt="icon-arrow-down" srcUrl="/images/icon-arrow-down-bg.svg" />
          </S.SelectChildBtn>
          <S.Title style={{ display: "flex" }}>
            보호자 정보<div style={{ color: "#FD7473" }}>*</div>
          </S.Title>
          <S.InputTitle ref={nameInputRef}>이름</S.InputTitle>
          <S.InputBox
            onKeyDown={handleKeyDown}
            onFocus={() => handleFocusInput(nameInputRef)}
            placeholder="이름을 입력해주세요."
            id="parentName"
            maxLength={30}
            value={requiredInfo.parent_name || ""}
            onChange={handleTypeInformation}
          />
          <S.InputTitle ref={phoneNumberInputRef}>휴대전화 번호</S.InputTitle>
          <S.InputBox
            onKeyDown={handleKeyDown}
            onFocus={() => handleFocusInput(phoneNumberInputRef)}
            placeholder="번호를 입력해주세요."
            type={"number"}
            id="parentPhoneNumber"
            pattern="[0-9]*"
            maxLength={11}
            value={requiredInfo.parent_phone || ""}
            onChange={handleTypeInformation}
          />
        </S.UserSection>
      </LayoutDetailPage>
      <ChildSelectBottomModal
        selectedChildInfo={selectedChildInfo}
        childrenList={childrenList}
        openModal={openChildrenModal}
        toggleModal={() => setOpenChildrenModal(!openChildrenModal)}
        handleChildClick={handleChildClick}
      />
      <CustomModal
        cancelBtn={false}
        title="필수 정보를 모두 입력해주세요."
        content="필수 정보를 모두 입력해야 신청이 가능해요."
        isOpen={openValidationMoadl}
        toggleModal={() => setOpenValidationModal(!openValidationMoadl)}
      />

      <ClassRejectModal
        theme={errorCode}
        month_start={classInfo.month_level.month_start}
        month_end={classInfo.month_level.month_end}
        openModal={openRejectModal}
        toggleModal={() => {
          setOpenRejectModal(!openRejectModal);
          navigate("/program");
        }}
      />
    </>
  );
};

export default ApplyClassPage;
