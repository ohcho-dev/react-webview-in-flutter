import CustomModal from "components/common/CustomModal";
import UseImgix from "components/common/Imgix";
import { BaseModalPropsType } from "types/common/modal";

interface ConfirmDeleteOrganizationModalPropsType extends BaseModalPropsType {
  handleDeleteBtnClick: () => void;
}

const ConfirmDeleteOrganizationModal = ({
  toggle,
  handleToggle,
  handleDeleteBtnClick,
}: ConfirmDeleteOrganizationModalPropsType) => {
  return (
    <CustomModal
      isOpen={toggle}
      toggleModal={handleToggle}
      deleteBtn
      deleteBtnClick={handleDeleteBtnClick}
      title="제휴 기관을 삭제하시겠어요?"
      content="삭제 시 더 이상 제휴 기관용 프로그램에 참여하실 수 없습니다."
      topImage={<UseImgix srcUrl="/images/icon-sad-circle.svg" />}
      okBtnName="취소"
    />
  );
};

export default ConfirmDeleteOrganizationModal;
