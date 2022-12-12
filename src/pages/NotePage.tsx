import { useState } from "react";
import { useQuery } from "react-query";
import { apis } from "../api/apis";
import CustomModal from "../components/common/CustomModal";

import LayoutMainPage from "../layouts/LayoutMainPage";

const NotePage = () => {
  const { data, isLoading } = useQuery("check", apis.getList);
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(!modalIsOpen);
  }
  const handleOkBtnClick = () => {
    console.log("click");
  };
  return (
    <LayoutMainPage>
      <button onClick={openModal}>Open Modal</button>
      <CustomModal
        topImage={
          <img
            src={"/images/reject-eltern.svg"}
            alt="character"
            style={{ width: "9.5rem" }}
          />
        }
        toggleModal={openModal}
        title="과제를 먼저 끝내주세요!"
        content="주어진 과제를 모두 끝내야만 결과지를 준비해드릴 수 있어요."
        isOpen={modalIsOpen}
        okBtnName="확인"
        okBtnClick={openModal}
      />
    </LayoutMainPage>
  );
};

export default NotePage;
