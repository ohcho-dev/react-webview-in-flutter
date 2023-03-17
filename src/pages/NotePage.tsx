import { useState } from "react";
import CustomModal from "../components/common/CustomModal";

import LayoutMainPage from "../layouts/LayoutMainPage";
import UseImgix from "../utils/UseImgix";

const NotePage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(!modalIsOpen);
  }

  return (
    <LayoutMainPage>
      <button onClick={openModal}>Open Modal</button>
      <CustomModal
        cancelbtn={false}
        topImage={<UseImgix srcUrl="/images/reject-eltern.svg" alt="character" />}
        toggleModal={openModal}
        title="과제를 먼저 끝내주세요!"
        content="주어진 과제를 모두 끝내야만 결과지를 준비해드릴 수 있어요."
        isOpen={modalIsOpen}
        okBtnName="확인"
      />
    </LayoutMainPage>
  );
};

export default NotePage;
