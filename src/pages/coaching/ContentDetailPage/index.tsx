import EmptyBox from "components/common/EmptyBox";
import { ContentHeader } from "components/domain/coaching/newCoachingPage/ContentHeader";
import LayoutDetailPage from "layouts/LayoutDetailPage";
import { ColorLight1 } from "lds-common/src/constants/tokens/global";
import { useParams } from "react-router-dom";

const ContentDetailPage = () => {
  const { contentId } = useParams();
  return (
    <LayoutDetailPage>
      <EmptyBox height="0.8rem" backgroundColor={ColorLight1} />
      <ContentHeader type="DETAIL" />
    </LayoutDetailPage>
  );
};

export default ContentDetailPage;
