import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getNoticeList } from "../../../../queries/domain/my/mypage";
import LayoutDetailPage from "../../../../layouts/LayoutDetailPage";
import { getDate } from "../../../../utils/date/getDateTime";
import UseImgix from "../../../../components/common/Imgix";
import PageTitle from "../../../../components/domain/my/PageTitle";
import { myQueryKeys } from "../../../../queries/domain/my/myQueryKeys";

const PageLayout = styled.div`
  margin-top: 7rem;
`;

const ListScroll = styled.div`
  padding: 0 2.5rem 1rem;
  height: calc(100vh - 13rem);
  overflow: scroll;
`;

const NoticeItem = styled.div`
  padding: 1.5rem 0.4rem;
  position: relative;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);

  img {
    position: absolute;
    right: 0.3rem;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

const Subject = styled.div`
  width: calc(100% - 3rem);
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
  margin-bottom: 0.5rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CreateDate = styled.div`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: rgba(10, 10, 10, 0.5);
`;

export const ChildrenListPage = () => {
  const navigate = useNavigate();
  const { data: noticeList } = useQuery(myQueryKeys.noticeList, () => getNoticeList());

  return (
    <LayoutDetailPage>
      <PageTitle title="공지사항" />
      <PageLayout>
        <ListScroll>
          {noticeList[0].map((notice: { [key: string]: any }) => (
            <NoticeItem key={notice.id} onClick={() => navigate(`/my/notice/${notice.id}`)}>
              <Subject>{notice.subject}</Subject>
              <CreateDate>{getDate(notice.created_at.substr(0, 10))}</CreateDate>
              <UseImgix
                srcUrl="/images/icon-mypage-arrow.svg"
                alt="mypage arrow"
                style={{ width: "2.7rem" }}
              />
            </NoticeItem>
          ))}
        </ListScroll>
      </PageLayout>
    </LayoutDetailPage>
  );
};

export default ChildrenListPage;
