import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getChildrenList } from "../../api/childApi";
import BottomFixBtnWrap from "../../components/common/BottomFixBtnWrap";
import Button from "../../components/common/Button";
import CustomModal from "./components/ChildUpdateModal";
import { queryKeys } from "../../constant/queryKeys";
import LayoutDetailPage from "../../layouts/LayoutDetailPage";
import getGender from "../../utils/getGender";
import { childType } from "../../utils/type";
import PageTitle from "./components/PageTitle";

const PageLayout = styled.div`
  margin-top: 7rem;
`;
const ChildrenListWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 5rem);
  padding: 2.4rem 1.4rem 2.4rem 2rem;
  margin: 0 auto 1rem;

  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 0.8rem;
`;

const ChildInfoSection = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 3rem 6rem auto;

  width: 100%;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #000000;
  margin-left: 0.8rem;
`;

const ChildName = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  margin-right: 0.5rem;
  margin-left: 1rem;
`;

export const ManagementChild = () => {
  const navigate = useNavigate();
  const { data: childrenList } = useQuery(queryKeys.childrenList, () => getChildrenList());
  const [openBreakModal, setOpenBreakModal] = useState(false);
  const handleCreateCHildBtn = () => {
    if (childrenList.length >= 5) {
      setOpenBreakModal(!openBreakModal);
      return;
    }
    navigate("/my/management-child/register", { replace: true });
  };

  return (
    <LayoutDetailPage>
      <PageTitle title="아이 관리" />
      <PageLayout>
        {childrenList.map((child: childType, index: number) => (
          <ChildrenListWrap
            key={index}
            onClick={() => navigate(`/my/management-child/${child.id}`, { replace: true })}
          >
            <ChildInfoSection>
              <img alt="profile icon" src={`/images/profile-${index}.svg`} />
              <ChildName style={{ fontWeight: "600" }}>{child.name}</ChildName>
              <span>
                ({child.birth_date}) {getGender(child.gender)}아
              </span>
            </ChildInfoSection>
            <img src="/images/icon-mypage-arrow.svg" />
          </ChildrenListWrap>
        ))}
      </PageLayout>

      <BottomFixBtnWrap>
        <Button theme={"black"} content={"아이 추가하기"} onClick={handleCreateCHildBtn} />
      </BottomFixBtnWrap>

      <CustomModal
        topImage={
          <img src={"/images/icon-sad-circle.svg"} alt="character" style={{ width: "9.5rem" }} />
        }
        title="아이를 더 이상 추가할 수 없어요."
        content="아이는 최대 5명까지 등록할 수 있어요."
        isOpen={openBreakModal}
        toggleModal={() => setOpenBreakModal(!openBreakModal)}
        okBtnName="확인"
        okBtnClick={() => setOpenBreakModal(!openBreakModal)}
      />
    </LayoutDetailPage>
  );
};

export default ManagementChild;
