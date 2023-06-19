import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getChildrenList } from "../../api/childApi";
import Button from "../../components/common/Button";
import CustomModal from "../../components/common/CustomModal";
import { queryKeys } from "../../constants/queryKeys";
import LayoutDetailPage from "../../layouts/LayoutDetailPage";
import { getDate } from "../../utils/getDateTime";
import getGender from "../../utils/getGender";
import { childType } from "../../utils/type";
import UseImgix from "../../utils/UseImgix";
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
  display: flex;
  align-items: center;

  width: 100%;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #000000;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 1.5rem;
  }
`;

const ChildName = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 9rem;
  margin: 0 1.5rem 0 0.9rem;
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
    navigate("/my/management-child/register");
  };

  return (
    <LayoutDetailPage
      bottomBtn
      bottomBtnElement={
        <Button theme={"black"} content={"아이 추가하기"} onClick={handleCreateCHildBtn} />
      }
    >
      <PageTitle title="아이 관리" />
      <PageLayout>
        {childrenList.map((child: childType, index: number) => (
          <ChildrenListWrap
            key={index}
            onClick={() => navigate(`/my/management-child/${child.id}`)}
          >
            <ChildInfoSection>
              <UseImgix alt="profile icon" srcUrl={`/images/profile-${index}.png`} />
              <ChildName style={{ fontWeight: "600" }}>{child.name}</ChildName>
              <span style={{ marginLeft: "-1rem" }}>
                ({getDate(child.birth_date)}) {getGender(child.gender)}아
              </span>
            </ChildInfoSection>
            <UseImgix
              srcUrl="/images/icon-mypage-arrow.svg"
              alt="right arrow icon"
              style={{ width: "2.8rem", height: "2.8rem" }}
            />
          </ChildrenListWrap>
        ))}
      </PageLayout>

      <CustomModal
        cancelbtn={false}
        topImage={
          <UseImgix
            srcUrl={"/images/icon-sad-circle.svg"}
            alt="character"
            style={{ width: "9.5rem" }}
          />
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
