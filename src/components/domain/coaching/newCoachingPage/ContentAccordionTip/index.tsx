import { useState } from "react";
import * as S from "./ContentAccordionTip.styled";
import Text from "components/common/Text";
import { ColorLightBlack7, TextBase1624Regular } from "lds-common/src/constants/tokens/global";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const ContentAccordionTip: React.FC<AccordionProps> = ({ children, title, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <S.AccordionWrap {...props}>
      <S.AccordionHeader isOpen={isOpen} onClick={toggle}>
        <Text variant={TextBase1624Regular} color={ColorLightBlack7}>
          {title}
        </Text>
        <S.AccordionIcon
          isOpen={isOpen}
          background={import.meta.env.REACT_APP_IMGIX_URL + "/images/icon-arrow-down.svg"}
        />
      </S.AccordionHeader>
      <S.AccordionBody isOpen={isOpen}>{children}</S.AccordionBody>
    </S.AccordionWrap>
  );
};
export default ContentAccordionTip;
