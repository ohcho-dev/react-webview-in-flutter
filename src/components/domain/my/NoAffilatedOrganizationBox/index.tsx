import * as S from "./NoAffiliatedOrganizationBox.styled";

const NoAffiliatedOrganizationBox = () => {
  const handleSectionClick = () => {
    console.log("click");
  };
  return (
    <S.BoxWrapper onClick={handleSectionClick}>
      <S.InformText>아직 등록한 기관이 없습니다.</S.InformText>
    </S.BoxWrapper>
  );
};

export default NoAffiliatedOrganizationBox;
