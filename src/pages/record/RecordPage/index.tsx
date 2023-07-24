import styled from "styled-components";

import FloatingButton from "../../../components/common/FloatingButton";
import LayoutMainPage from "../../../layouts/LayoutMainPage";
import { useNavigate } from "react-router-dom";
import RecordGrade from "../../../components/domain/record/explanationRecordPage/RecordGrade";
import RecordList from "../../../components/domain/record/explanationRecordPage/RecordList";

const Devider = styled.div`
  height: 1rem;
  background: #f8f9fa;
`;

const RecordPage = () => {
  const navigate = useNavigate();

  return (
    <LayoutMainPage>
      <RecordGrade />
      <Devider />
      <RecordList />
      <FloatingButton
        page="main"
        iconUrl={`${import.meta.env.REACT_APP_IMGIX_URL}/images/record/record_icon_pencil.svg`}
        onClick={() => navigate("/record/record-task-list")}
      />
    </LayoutMainPage>
  );
};

export default RecordPage;
