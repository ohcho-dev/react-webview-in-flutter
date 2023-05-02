import LayoutMainPage from "../../layouts/LayoutMainPage";
import RecordGrade from "./components/RecordGrade";
import RecordList from "./components/RecordList";

const RecordPage = () => {
  return (
    <LayoutMainPage>
      <h1>Record Page</h1>
      <RecordGrade />
      <RecordList />
    </LayoutMainPage>
  );
};

export default RecordPage;
