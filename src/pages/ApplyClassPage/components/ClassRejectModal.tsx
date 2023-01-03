import { useEffect, useState } from "react";
import styled from "styled-components";
import CustomModal from "../../../components/common/CustomModal";

const ApplicationCloseModalContent = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.2rem;
`;

interface contentType {
  title: string;
  content: string;
}

interface rejectModalProps {
  theme: "MONTH_NOT_ACCEPTABLE" | "CLASS_STUDENT_FULL" | "CLASS_ALREADY_APPLIED";
  openModal: boolean;
  toggleModal: () => void;
}

const MONTH_NOT_ACCEPTABLE_CONTENT = {
  title: "신청을 할 수 없어요.",
  content: "0~36개월 월령의 아이만 신청할 수 있어요.",
};

const CLASS_STUDENT_FULL_CONTENT = {
  title: "신청이 마감되었어요.",
  content: "",
};

const CLASS_ALREADY_APPLIED_CONTENT = {
  title: "이미 신청한 클래스에요!",
  content:
    "동일한 클래스는 동시에 진행할 수 없어요. 진행 중인 클래스 완료 후 다시 신청하시거나 다른 클래스에 신청해주세요.",
};

const ClassRejectModal = (props: rejectModalProps): JSX.Element => {
  const { theme, openModal, toggleModal } = props;
  const [content, setContent] = useState<contentType>({ title: "", content: "" });

  useEffect(() => {
    if (theme === "MONTH_NOT_ACCEPTABLE") {
      setContent(MONTH_NOT_ACCEPTABLE_CONTENT);
    } else if (theme === "CLASS_STUDENT_FULL") {
      setContent(CLASS_STUDENT_FULL_CONTENT);
    } else if (theme === "CLASS_ALREADY_APPLIED") {
      setContent(CLASS_ALREADY_APPLIED_CONTENT);
    }
  }, [theme]);

  return (
    <CustomModal
      topImage={
        theme !== "CLASS_ALREADY_APPLIED" ? (
          <img
            alt="sad icon"
            src="/images/icon-sad-circle.svg"
            style={{ width: "9.5rem", marginBottom: "1.5rem" }}
          />
        ) : undefined
      }
      title={content.title}
      content={content.content}
      isOpen={openModal}
      toggleModal={toggleModal}
      contentMarkup={
        theme === "CLASS_STUDENT_FULL" ? (
          <ApplicationCloseModalContent>
            <span>신청자가 많아 모집이 마감되었습니다.</span>
            <span>다른 프로그램을 신청해주세요.</span>
          </ApplicationCloseModalContent>
        ) : undefined
      }
    />
  );
};

export default ClassRejectModal;
