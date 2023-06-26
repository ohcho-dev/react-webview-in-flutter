import Button from "components/common/Button";
import CustomBottomModal from "components/common/CustomBottomModal";
import { BaseModalPropsType } from "types/common/modal";
import * as S from "./ConfirmAffiliateOrganizationStatusModal.styled";

interface ConfirmAffiliateOrganizationStatusModalPropsType extends BaseModalPropsType {
  handleDeleteBtnClick: () => void;
  handleChangeBtnClick?: () => void;
}

const ConfirmAffiliateOrganizationStatusModal = ({
  toggle,
  handleToggle,
  handleDeleteBtnClick,
  handleChangeBtnClick,
}: ConfirmAffiliateOrganizationStatusModalPropsType) => {
  return (
    <CustomBottomModal toggle={toggle} handleToggle={handleToggle}>
      <S.ModalWrapper>
        <S.Title>제휴 기관을 변경 또는 삭제하시겠어요?</S.Title>
        <S.SubTitle>등록된 제휴 기관을 변경하거나 삭제할 수 있어요.</S.SubTitle>
        <S.BtnSection>
          <Button theme={"warning"} content={"삭제하기"} onClick={handleDeleteBtnClick} />
          <Button theme={"black"} content={"기관 변경하기"} onClick={handleChangeBtnClick} />
        </S.BtnSection>
      </S.ModalWrapper>
    </CustomBottomModal>
  );
};

export default ConfirmAffiliateOrganizationStatusModal;
