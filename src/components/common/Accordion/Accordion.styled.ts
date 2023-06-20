import styled from "styled-components";

export const AccordionWrap = styled.div`
  border-bottom: 1rem solid #f6f6f6;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;
export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  cursor: pointer;
`;
export const AccordionTitle = styled.div`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
`;
export const AccordionIcon = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background: url(${(prop: { isOpen: boolean; background: string }) => prop.background}) no-repeat
    50% 50%;
  background-size: 1.6rem 1.6rem;
  transform: ${(prop: { isOpen: boolean }) => (prop.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;
export const AccordionBody = styled.div`
  display: ${(prop: { isOpen: boolean }) => (prop.isOpen ? "block" : "none")};
  padding: 1.5rem 2rem;
`;
