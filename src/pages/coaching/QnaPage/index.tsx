import LayoutDetailPage from "layouts/LayoutDetailPage";
import { useParams } from "react-router-dom";

const QnaPage = () => {
  const { id } = useParams();

  return (
    <LayoutDetailPage>
      <span>QnA</span>
    </LayoutDetailPage>
  );
};

export default QnaPage;
