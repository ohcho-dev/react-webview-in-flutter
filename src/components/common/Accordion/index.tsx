import { useState } from "react";
import * as S from "./Accordion.styled";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ children, title, ...props }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <S.AccordionWrap {...props}>
      <S.AccordionHeader onClick={toggle}>
        <S.AccordionTitle>{title}</S.AccordionTitle>
        <S.AccordionIcon
          isOpen={isOpen}
          background={process.env.REACT_APP_IMGIX_URL + "/images/icon-arrow-down.svg"}
        />
      </S.AccordionHeader>
      <S.AccordionBody isOpen={isOpen}>{children}</S.AccordionBody>
    </S.AccordionWrap>
  );
};
export default Accordion;
