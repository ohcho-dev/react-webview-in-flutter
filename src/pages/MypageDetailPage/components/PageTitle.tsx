import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { useShareState } from "../../../recoil/atom";

const TitleWrap = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 3.2rem;
  letter-spacing: -0.04rem;
  color: #000000;
  background: #fff;
`;
const Container = styled.div`
  padding: 0.8rem 2.5rem 3rem;
`;

interface PageTitlePropsType {
  title: string;
}
const PageTitle = ({ title = "" }: PageTitlePropsType) => {
  const [share, setShare] = useRecoilState(useShareState);

  useEffect(() => {
    setShare(false);
  }, []);

  return (
    <TitleWrap>
      <Container>{title}</Container>
    </TitleWrap>
  );
};

export default PageTitle;
