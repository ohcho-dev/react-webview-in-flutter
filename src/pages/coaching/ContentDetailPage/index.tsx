import LayoutDetailPage from "layouts/LayoutDetailPage";
import { useParams } from "react-router-dom";

const ContentDetailPage = () => {
  const { contentId } = useParams();
  return (
    <LayoutDetailPage>
      <span>ContentDetail page</span>
    </LayoutDetailPage>
  );
};

export default ContentDetailPage;
