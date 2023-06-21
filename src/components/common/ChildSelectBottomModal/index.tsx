import { useNavigate } from "react-router-dom";

import { ChildType } from "../../../types/common";
import { getDate } from "../../../utils/date/getDateTime";
import UseImgix from "../Imgix";
import CustomBottomModal from "../CustomBottomModal";
import * as S from "./ChildSelectBottomModal.styled";

interface ChildSelectBottomModalProps {
  selectedChildInfo: ChildType;
  childrenList: ChildType[];
  openModal: boolean;
  toggleModal: () => void;
  handleChildClick: (evt: React.MouseEvent<HTMLElement>) => void;
}

const ChildSelectBottomModal: React.FC<ChildSelectBottomModalProps> = props => {
  const { openModal, toggleModal, childrenList, selectedChildInfo, handleChildClick } = props;
  const navigate = useNavigate();
  return (
    <CustomBottomModal toggle={openModal} handleToggle={toggleModal}>
      <S.ChildrenListModalWrapper>
        <S.ChildrenListModalTitleSection>
          <span>아이 선택</span>
          <span onClick={() => toggleModal()}>
            <UseImgix srcUrl="/images/icon-close.svg" alt="close icon" />
          </span>
        </S.ChildrenListModalTitleSection>
        {childrenList.slice(0, 5).map((child: ChildType, index: number) => {
          return (
            <S.ChildInfoWrapper
              onClick={handleChildClick}
              id={child.id.toString()}
              key={child.id.toString()}
            >
              <div>
                <UseImgix srcUrl={`/images/profile-${index}.png`} alt="profile icon" />
                <S.ChildName>{child.name}</S.ChildName>
                <S.ChildInfo>
                  <span>({getDate(child.birth_date)}) </span>
                  <span>{child.gender === "M" ? "남아" : "여아"}</span>
                </S.ChildInfo>
              </div>

              {selectedChildInfo.id === child.id && (
                <UseImgix alt="selected-icon" srcUrl="/images/icon-selected.svg" />
              )}
            </S.ChildInfoWrapper>
          );
        })}
        <S.GoToChildManagementBtn
          onClick={() => {
            toggleModal();
            navigate("/my/management-child");
          }}
        >
          아이 관리로 이동하기
          <UseImgix alt="arrow-right" srcUrl={"/images/icon-arrow-right-small.svg"} />
        </S.GoToChildManagementBtn>
      </S.ChildrenListModalWrapper>
    </CustomBottomModal>
  );
};

export default ChildSelectBottomModal;
