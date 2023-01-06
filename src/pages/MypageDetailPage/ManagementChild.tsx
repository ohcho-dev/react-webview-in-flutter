import { useQueries, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { getChildrenList } from "../../api/childApi";
import Button from "../../components/common/Button";
import { CHILD_ID_FIELD } from "../../constant/localStorage";
import { queryKeys } from "../../constant/queryKeys";
import LayoutDetailPage from "../../layouts/LayoutDetailPage";
import { childrenListState } from "../../recoil/atom";
import getGender from "../../utils/getGender";
import { childType } from "../../utils/type";
import { BottomBtnWrap } from "../ProgramPage/components/styled";
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

  div {
    display: flex;
    align-items: center;

    img {
    }

    span {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
      color: #000000;
      margin-left: 0.8rem;
    }
  }
`;

export const ManagementChild = () => {
  const navigate = useNavigate();
  const { data: childrenList } = useQuery(queryKeys.childrenList, () => getChildrenList());

  return (
    <LayoutDetailPage>
      <PageTitle title="아이 관리" />
      <PageLayout>
        {childrenList[0].map((child: childType, index: number) => (
          <ChildrenListWrap
            key={index}
            onClick={() => navigate(`/my/management-child/${child.id}`)}
          >
            <div>
              <img alt="profile icon" src={`/images/profile-${index}.svg`} />
              <span>
                <b style={{ fontWeight: "600" }}>{child.name}</b> ({child.birth_date}){" "}
                {getGender(child.gender)}아
              </span>
            </div>
            <img src="/images/icon-mypage-arrow.svg" />
          </ChildrenListWrap>
        ))}
      </PageLayout>

      <BottomBtnWrap>
        <Button
          theme={"black"}
          content={"아이 추가하기"}
          onClick={() => navigate("/my/management-child/register")}
        />
      </BottomBtnWrap>
    </LayoutDetailPage>
  );
};

export default ManagementChild;
