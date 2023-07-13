import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/common/Button";
import CustomModal from "../../../../components/common/CustomModal";
import LayoutDetailPage from "../../../../layouts/LayoutDetailPage";
import { ChildType } from "../../../../types/common";
import { getDate } from "../../../../utils/date/getDateTime";
import getGender from "../../../../utils/user/getGender";
import UseImgix from "../../../../components/common/Imgix";
import PageTitle from "../../../../components/domain/my/PageTitle";
import useChildrenList from "../../../../queries/domain/my/child/useChildrenList";
import { ColorLightSlate8 } from "constants/ldsConstants/global";
import Icon from "components/common/Icon";
import * as S from "./ChildrenListPage.styeld";

export const ChildrenListPage = () => {
  const navigate = useNavigate();
  const { data: childrenList } = useChildrenList();

  const [openBreakModal, setOpenBreakModal] = useState(false);
  const handleCreateCHildBtn = () => {
    if (childrenList && childrenList.length >= 5) {
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
      <S.PageLayout>
        {childrenList?.map((child: ChildType, index: number) => (
          <S.SingleChildWrapper
            key={child.id}
            onClick={() => navigate(`/my/management-child/${child.id}`)}
          >
            <S.ChildInfoSection>
              <UseImgix alt="profile icon" srcUrl={`/images/profile-${index}.png`} />
              <S.ChildName style={{ fontWeight: "600" }}>{child.name}</S.ChildName>
              <span style={{ marginLeft: "-1rem" }}>
                ({getDate(child.birth_date)}) {getGender(child.gender)}아
              </span>
            </S.ChildInfoSection>
            <Icon icon={"chevron-right"} size={24} fill={ColorLightSlate8} />
          </S.SingleChildWrapper>
        ))}
      </S.PageLayout>
      <CustomModal
        cancelBtn={false}
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
      />
    </LayoutDetailPage>
  );
};

export default ChildrenListPage;
