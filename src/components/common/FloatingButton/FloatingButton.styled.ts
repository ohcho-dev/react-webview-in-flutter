import styled from "styled-components";
import { ColorLightBlack9Base } from "../../../constants/ldsConstants/global";

export const Container = styled.div`
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
