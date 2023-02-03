import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getDate } from "../utils/getDateTime";
import { childType } from "../utils/type";
import CustomBottomModal from "./common/CustomBottomModal";

interface ChildSelectBottomModalProps {
  selectedChildInfo: childType;
  childrenList: childType[];
  openModal: boolean;
  toggleModal: () => void;
  handleChildClick: (evt: React.MouseEvent<HTMLElement>) => void;
}

const ChildrenListModalTitleSection = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 2rem;

  span {
    font-weight: 700;
    font-size: 2rem;
  }

  img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const ChildrenListModalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ChildInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 1.9rem 0;

  div {
    display: flex;
    align-items: center;

    img {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 1.6rem;
    }
  }
`;

const ChildName = styled.span`
  overflow: hidden;

  font-size: 1.6rem;
  font-weight: 600;

  width: 7rem;
  max-width: 7rem;
  text-overflow: ellipsis;
  margin-left: 0.95rem;
`;

const ChildInfo = styled.div`
  font-size: 1.6rem;
  font-weight: 400;

  column-gap: 0.5rem;

  span:nth-child(1) {
    width: 10.2rem;
  }
`;

const ChildSelectBottomModal: React.FC<ChildSelectBottomModalProps> = props => {
  const { openModal, toggleModal, childrenList, selectedChildInfo, handleChildClick } = props;
  const navigate = useNavigate();

  return (
    <CustomBottomModal toggle={openModal} handleToggle={toggleModal}>
      <ChildrenListModalWrapper>
        <ChildrenListModalTitleSection>
          <span>아이 선택</span>
          <img
            alt="close icon"
            src="/images/icon-close.svg"
            onClick={() => {
              toggleModal();
            }}
          />
        </ChildrenListModalTitleSection>
        {childrenList.slice(0, 5).map((child: childType, index: number) => {
          return (
            <ChildInfoWrapper
              onClick={handleChildClick}
              id={child.id.toString()}
              key={child.id.toString()}
            >
              <div>
                <img alt="profile icon" src={child.image || `/images/profile-${index}.svg`} />
                <ChildName>{child.name}</ChildName>
                <ChildInfo>
                  <span>({getDate(child.birth_date)}) </span>
                  <span>{child.gender === "M" ? "남아" : "여아"}</span>
                </ChildInfo>
              </div>

              {selectedChildInfo.id === child.id && (
                <img alt="selected-icon" src="/images/icon-selected.svg" />
              )}
            </ChildInfoWrapper>
          );
        })}
      </ChildrenListModalWrapper>
    </CustomBottomModal>
  );
};

export default ChildSelectBottomModal;
