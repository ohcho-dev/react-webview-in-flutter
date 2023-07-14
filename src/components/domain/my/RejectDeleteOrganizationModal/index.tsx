import CustomModal from "components/common/CustomModal";
import UseImgix from "components/common/Imgix";
import { BaseModalPropsType } from "types/common/modal";

const RejectDeleteOrganizationModal = ({ toggle, handleToggle }: BaseModalPropsType) => {
  return (
    <CustomModal
      isOpen={toggle}
      toggleModal={handleToggle}
      title="삭제할 수 없어요."
      content="진행 중인 검사가 종료되어야 제휴 기관을 삭제할 수 있습니다."
      topImage={<UseImgix srcUrl="/images/icon-sad-circle.svg" />}
    />
  );
};

export default RejectDeleteOrganizationModal;
