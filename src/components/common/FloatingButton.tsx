import Imgix from "react-imgix";
import styled from "styled-components";
import { ColorLightBlack9Base } from "../../constant/ldsConstants/global";

interface FloatingButtonProps {
  page: "main" | "detail";
  onClick: () => void;
  iconUrl: string;
}

const Container = styled.div`
  position: fixed;
  right: 2rem;
  bottom: ${(props: { page: string }) => (props.page === "main" ? "8.3rem" : "2.4rem")};
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  background-color: ${ColorLightBlack9Base};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 3.2rem;
  }
`;

const FloatingButton: React.FC<FloatingButtonProps> = ({ page = "", iconUrl = "", onClick }) => {
  return (
    <Container onClick={onClick} page={page}>
      <Imgix src={iconUrl} />
    </Container>
  );
};

export default FloatingButton;
