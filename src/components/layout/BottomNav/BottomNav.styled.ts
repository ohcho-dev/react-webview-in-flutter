import styled from "styled-components";

export const BottomNavWrap = styled.ul`
  width: 100%;
  height: 6.5rem;
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-top: 0.05rem solid rgba(0, 0, 0, 0.15);
  position: fixed;
  bottom: 0;
  z-index: 110;
`;

export const Lists = styled.li`
  width: 100%;
  text-align: center;
  padding-bottom: 1.3rem;
`;

export const ImageWrap = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  margin: 0 auto;
`;

export const Text = styled.div`
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 2.2rem;
  letter-spacing: 0.04rem;
  color: ${(prop: { selected: boolean }) => (prop.selected ? "#000000" : "#747474")};
`;
