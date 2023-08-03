import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QnaCategory from "../QnaCategory";
import QuestionItem from "../QuestionItem";
import * as S from "./QnaList.styled";

const MenuCategory = ["전체", "발달", "언어", "놀이", "결과지"];

const QnaList = () => {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState("전체");
  return (
    <S.QnaListWrapper>
      <QnaCategory
        selectedCategory={selectedMenu}
        CategoryList={MenuCategory}
        handleCategoryClick={category => setSelectedMenu(category)}
      />
      <S.QuestionSection>
        <QuestionItem
          handleClick={() => navigate("/coaching/qna/question-detail/1")}
          category={"결과지"}
          title={
            "결과지 언어부분에서 결과지 언어부분에서결과지 언어부분에서결과지 언어부분에서결과지 언어부분에서결과지 언어부분에서결과지 언어부분에서결과지 언어부분에서결과지 언어부분에서"
          }
          date={"2023.04.09"}
          status={"답변완료"}
          commentNum={3}
        />
      </S.QuestionSection>
    </S.QnaListWrapper>
  );
};

export default QnaList;
