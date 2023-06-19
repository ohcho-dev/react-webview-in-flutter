import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getNoticeDetail } from "../../../../queries/domain/my/mypage";
import { queryKeys } from "../../../../constants/queryKeys";
import LayoutDetailPage from "../../../../layouts/LayoutDetailPage";
import { getDate } from "../../../../utils/date/getDateTime";

const PageLayout = styled.div`
  margin-top: 7rem;
`;

const CreateDate = styled.div`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: rgba(10, 10, 10, 0.5);
`;

const TitleWrap = styled.div`
  padding-bottom: 2rem;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
  margin-bottom: 2.5rem;
`;

const SubjectDetail = styled.div`
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: -0.04rem;
  margin-bottom: 0.5rem;
`;

const ContentWrap = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.5rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
`;

const NoticeDetailPage = () => {
  const { noticeid } = useParams();
  const { data: noticeData } = useQuery(queryKeys.noticeDetail, () => getNoticeDetail(noticeid));

  return (
    <LayoutDetailPage>
      <PageLayout style={{ margin: "0 2.5rem" }}>
        <TitleWrap>
          <SubjectDetail>{noticeData[0].subject}</SubjectDetail>
          <CreateDate>
            {getDate(noticeData[0].updated_at.substr(0, 10)) ||
              getDate(noticeData[0].created_at.substr(0, 10))}
          </CreateDate>
        </TitleWrap>
        <ContentWrap>{noticeData[0].content}</ContentWrap>
      </PageLayout>
    </LayoutDetailPage>
  );
};

export default NoticeDetailPage;
