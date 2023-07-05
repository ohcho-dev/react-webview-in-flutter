import UseImgix from "components/common/Imgix";
import LayoutDetailPage from "layouts/LayoutDetailPage";
import * as S from "./LanguageExplanationPage.styled";

const LanguageExplanationPage = () => {
  const descSet = [
    {
      name: "표현언어",
      imgName: "message_circle",
      description:
        "표현 언어는 모든 방법으로 자신의 의사를 표현하는 것을 의미합니다. 자신의 생각이나 감정, 요구 등을 언어로 전달하는 개념으로 말하기, 쓰기, 몸짓 등이 포함됩니다.",
    },
    {
      name: "수용언어",
      imgName: "ear",
      description:
        "수용 언어는 언어로 전달되는 메시지를 이해하는 것을 의미합니다. 청각, 시각 등 다양한 감각으로 타인이 전달하는 의미를 이해하고 받아들이는 능력에 대한 개념입니다.",
    },
  ];
  return (
    <LayoutDetailPage>
      <S.Wrapper>
        {descSet.map(({ name, imgName, description }) => (
          <S.ExplanationBox key={name}>
            <UseImgix
              srcUrl={`/images/${imgName}.svg`}
              style={{ width: "3.3rem", height: "3.3rem" }}
            />
            <S.Title>{name}</S.Title>
            <S.Description>{description}</S.Description>
          </S.ExplanationBox>
        ))}
      </S.Wrapper>
    </LayoutDetailPage>
  );
};

export default LanguageExplanationPage;
