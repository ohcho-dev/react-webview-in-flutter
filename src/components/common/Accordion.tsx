import { useState } from "react";
import styled from "styled-components";

const AccordionWrap = styled.div`
  border-bottom: 1rem solid #f6f6f6;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;
const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  cursor: pointer;
`;
const AccordionTitle = styled.div`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
`;
const AccordionIcon = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background: url(${(prop: { isOpen: boolean; background: string }) => prop.background}) no-repeat
    50% 50%;
  background-size: 1.6rem 1.6rem;
  transform: ${(prop: { isOpen: boolean }) => (prop.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;
const AccordionBody = styled.div`
  display: ${(prop: { isOpen: boolean }) => (prop.isOpen ? "block" : "none")};
  padding: 1.5rem 2rem;
`;
interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ children, title, ...props }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <AccordionWrap {...props}>
      <AccordionHeader onClick={toggle}>
        <AccordionTitle>{title}</AccordionTitle>
        <AccordionIcon
          isOpen={isOpen}
          background={process.env.REACT_APP_IMGIX_URL + "/images/icon-arrow-down.svg"}
        />
      </AccordionHeader>
      <AccordionBody isOpen={isOpen}>{children}</AccordionBody>
    </AccordionWrap>
  );
};
export default Accordion;
