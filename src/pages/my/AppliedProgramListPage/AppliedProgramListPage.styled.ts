import { NoMainImage } from "components/domain/program/NoMainImage/NoImage.styled";
import styled from "styled-components";

export const PageLayout = styled.div`
  margin-top: 7rem;
`;

export const TabWrapper = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f6f6f6;
  border-radius: 2.45rem;
  padding: 0.5rem;
  margin: 0 2.5rem 1rem;
`;

export const TabItem = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  font-weight: ${(prop: { tab?: string; selectedTab?: string }) =>
    prop.tab === prop.selectedTab ? 600 : 400};
  color: ${(prop: { tab?: string; selectedTab?: string }) =>
    prop.tab === prop.selectedTab ? "#000" : "rgba(10, 10, 10, 0.5)"};
  background: ${(prop: { tab?: string; selectedTab?: string }) =>
    prop.tab === prop.selectedTab ? "#fff" : "none"};
  border-radius: 2.45rem;
`;

export const ListScroll = styled.div`
  padding: 0 2.5rem 1rem;
  height: calc(100vh - 20rem);
  overflow-x: hidden;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  &::-webkit-scrollbar-thumb {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
