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

  max-width: 11rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0 0.95rem;
`;

const ChildInfo = styled.div`
  font-size: 1.6rem;
  font-weight: 400;

  column-gap: 0.5rem;

  span:nth-child(1) {
    width: 9rem;
  }
`;

const GoToChildManagementBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  margin-top: 1rem;

  font-weight: 400;
  font-size: 1.4rem;
  color: rgba(10, 10, 10, 0.5);

  img {
    margin-left: 1rem;
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
                <img alt="profile icon" src={child.image || `/images/profile-${index}.png`} />
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
        <GoToChildManagementBtn
          onClick={() => {
            toggleModal();
            navigate("/my/management-child");
          }}
        >
          아이 관리로 이동하기
          <img alt="arrow-right" src={"/images/icon-arrow-right-small.svg"} />
        </GoToChildManagementBtn>
      </ChildrenListModalWrapper>
    </CustomBottomModal>
  );
};

export default ChildSelectBottomModal;
