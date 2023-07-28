import FloatingButton from "../../../components/common/FloatingButton";
import LayoutMainPage from "../../../layouts/LayoutMainPage";
import { useNavigate } from "react-router-dom";
import RecordGrade from "../../../components/domain/record/explanationRecordPage/RecordGrade";
import RecordList from "../../../components/domain/record/explanationRecordPage/RecordList";
import * as S from "./RecordPage.styled";

const RecordPage = () => {
  const navigate = useNavigate();

  return (
    <LayoutMainPage>
      <RecordGrade />
      <S.Divider />
      <RecordList />
      <FloatingButton
        page="main"
        iconUrl={`/images/record/record_icon_pencil.svg`}
        onClick={() => navigate("/record/record-task-list")}
      />
    </LayoutMainPage>
  );
};

export default RecordPage;
