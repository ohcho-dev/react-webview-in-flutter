import React from "react";
import styled from "styled-components";

const BasePage = styled.div``;

interface LayoutBasePageProps {
  children?: React.ReactNode;
}
const LayoutBasePage: React.FC<LayoutBasePageProps> = ({ children }) => {
  return <BasePage id="body">{children}</BasePage>;
};

export default LayoutBasePage;
