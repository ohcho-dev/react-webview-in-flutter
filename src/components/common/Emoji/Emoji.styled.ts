import styled from "styled-components";

export const EmojiSizeWrap = styled.div`
  width: ${(prop: { customWidth: string | undefined }) => prop.customWidth || "2rem"};
`;
