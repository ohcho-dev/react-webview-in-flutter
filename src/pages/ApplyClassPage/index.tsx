import React, { RefObject, useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { applyClass, getSelectedClassInfo } from "../../api/programApi";
import ChildSelectBottomModal from "../../components/ChildSelectBottomModal";
import Button from "../../components/common/Button";
import CustomModal from "../../components/common/CustomModal";
import { queryKeys } from "../../constant/queryKeys";
import LayoutDetailPage from "../../layouts/LayoutDetailPage";
import { childrenListState, selectedChildInfoState, useShareState } from "../../recoil/atom";
import { applyClassBodyType, childType } from "../../utils/type";
import { BottomBtnWrap } from "../ProgramPage/components/styled";
import ClassRejectModal from "./components/ClassRejectModal";
import PriceSection from "./components/PriceSection";
import ProgramSection from "./components/ProgramSection";

interface requeiredInfo {
  id: string;
  parent_name: string;
  parent_phone: string;
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

const ApplyClassPage = () => {
  const { classid } = useParams();
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneNumberInputRef = useRef<HTMLInputElement>(null);
  const fullHeight = useRef<number>(window.innerHeight);
  const defaultChild = useRecoilValue(selectedChildInfoState);
  const setShareBtnVisibility = useSetRecoilState(useShareState);
  const childrenList = useRecoilValue(childrenListState);
  const [openChildrenModal, setOpenChildrenModal] = useState<boolean>(false);
  const [openValidationMoadl, setOpenValidationModal] = useState<boolean>(false);
  const [requiredInfo, setRequiredInfo] = useState<applyClassBodyType>({
    child_id: "",
    class_id: "",
    parent_name: "",
    parent_phone: "",
  });
  const [selectedChildInfo, setSelectedChildInfo] = useState<childType>({
    id: 0,
    name: "",
    parent_id: 0,
    gender: "",
    birth_date: "",
  });
  const [errorCode, setErrorCode] = useState<
    "MONTH_NOT_ACCEPTABLE" | "CLASS_STUDENT_FULL" | "CLASS_ALREADY_APPLIED"
  >("MONTH_NOT_ACCEPTABLE");
  const [openRejectModal, setOpenRejectModal] = useState(false);
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const reff = useRef<HTMLInputElement | null>(null);
  const { data: classInfo } = useQuery(queryKeys.selectedClassInfo, () =>
    getSelectedClassInfo(classid),
  );
  const callApplyClasses = useMutation(applyClass, {
    onSuccess: res => {
      if (res.purchase_id) {
        navigate("/program/class/apply-class/success");
      } else {
        setErrorCode(res.code);
        setOpenRejectModal(true);
      }
    },
  });

  useEffect(() => {
    setShareBtnVisibility(false);
    setSelectedChildInfo(defaultChild);
    fullHeight.current = window.innerHeight;

    if (window.visualViewport) {
      const handleResize = (event: any) => {
        const os = navigator.userAgent.toLowerCase();
        const { height: visualViewportHeight } = event.target;
        const { current } = sectionRef;
        let eventName = "";
        let keyboardHeight = 0;

        if (os.indexOf("android") > -1) {
          eventName = fullHeight.current > window.innerHeight ? "keyboardopen" : "keyboardclose";
          keyboardHeight = fullHeight.current - window.innerHeight;
          if (current !== null) {
            if (fullHeight.current > window.innerHeight) {
              current.style.height = `${37 + keyboardHeight / 10}rem`;
              reff.current?.scrollIntoView({ behavior: "smooth" });
              console.log(current.style.height);
            } else {
              current.style.height = "37rem";
            }
          }
        } else if (os.indexOf("iphone") > -1 || os.indexOf("ipad") > -1) {
          eventName = fullHeight.current > visualViewportHeight ? "keyboardopen" : "keyboardclose";
          keyboardHeight = fullHeight.current - visualViewportHeight;
          if (current !== null) {
            if (fullHeight.current > visualViewportHeight) {
              current.style.height = `${37 + keyboardHeight / 10}rem`;
              reff.current?.scrollIntoView({ behavior: "smooth" });
            } else {
              current.style.height = "37rem";
            }
          }
        }

        alert(`${eventName} ${keyboardHeight}`);
      };
      window.visualViewport.addEventListener("resize", handleResize);
    }

    // const handleWindowResize = () => {
    //   const os = navigator.userAgent.toLowerCase();
    //   alert(
    //     `fullHeight: ${fullHeight.current} / innerHeight: ${window.innerHeight} / viewportHeight: ${window.visualViewport?.height} / os: ${os}`,
    //   );
    // };
    // window.addEventListener("resize", handleWindowResize);
  }, []);

  // useEffect(() => {
  //   const { current } = sectionRef;

  //   if (keyboardOpen) {
  //     if (current !== null) {
  //       current.style.height = "37rem";
  //     }
  //   } else {
  //   }
  // }, [keyboardOpen]);

  useEffect(() => {
    if (selectedChildInfo.id) {
      setRequiredInfo({ ...requiredInfo, child_id: selectedChildInfo.id.toString() });
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
    const { child_id, parent_name, parent_phone } = requiredInfo;
    if (child_id && parent_name && parent_phone && classid) {
      callApplyClasses.mutate({ ...requiredInfo, class_id: classid.toString() });
    } else {
      setOpenValidationModal(true);
    }
  };

  const handleTypeInformation = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const id = evt.target.id;
    const value = evt.target.value;
    if (id === "parentName") {
      setRequiredInfo({ ...requiredInfo, parent_name: value });
    } else if (id === "parentPhoneNumber") {
      setRequiredInfo({ ...requiredInfo, parent_phone: value });
    }
  };

  const handleFocusInput = (ref: RefObject<HTMLInputElement>) => {
    reff.current = ref.current;
    const os = navigator.userAgent.toLowerCase();

    if (os.indexOf("android") > -1) {
      alert(
        `fullHeight: ${fullHeight.current} / innerHeight: ${window.innerHeight} / viewportHeight: ${window.visualViewport?.height} / os: ${os}`,
      );
    }

    //ref.current?.scrollIntoView({ behavior: "smooth" });
    // const { current } = sectionRef;
    // if (current !== null) {
    //   if (current.style.height !== "59rem") {
    //     current.style.height = "59rem";
    //     ref.current?.scrollIntoView({ behavior: "smooth" });
    //   }
    // }
  };

  const handleBlurInput = (ref: RefObject<HTMLInputElement>) => {
    const { current } = sectionRef;
    if (current !== null) {
      // current.style.height = "37rem";
    }
  };

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLDivElement>) => {
    if (evt.key === "Enter") {
      const { current } = sectionRef;
      if (current !== null) {
        current.style.height = "37rem";
      }
    }
  };

  return (
    <>
      <LayoutDetailPage
        style={{ background: "#f6f6f6" }}
        bottomBtn
        bottomBtnElement={
          <Button theme={"black"} content={"신청하기"} onClick={handleApplyBtnClick} />
        }
      >
        <ProgramSection classInfo={classInfo} />
        <PriceSection classInfo={classInfo} />
        <UserSection ref={sectionRef}>
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
          <InputTitle ref={nameInputRef}>이름</InputTitle>
          <InputBox
            onKeyDown={handleKeyDown}
            onBlur={() => handleBlurInput(nameInputRef)}
            onFocus={() => handleFocusInput(nameInputRef)}
            placeholder="이름을 입력해주세요."
            id="parentName"
            onChange={handleTypeInformation}
          />
          <InputTitle ref={phoneNumberInputRef}>휴대전화 번호</InputTitle>
          <InputBox
            onKeyDown={handleKeyDown}
            onBlur={() => handleBlurInput(phoneNumberInputRef)}
            onFocus={() => handleFocusInput(phoneNumberInputRef)}
            placeholder="번호를 입력해주세요."
            type={"number"}
            id="parentPhoneNumber"
            pattern="[0-9]*"
            onChange={handleTypeInformation}
          />
        </UserSection>
      </LayoutDetailPage>
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

      <ClassRejectModal
        theme={errorCode}
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
