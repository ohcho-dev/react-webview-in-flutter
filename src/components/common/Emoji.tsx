import React from "react";
import { EmojiProvider, Emoji } from "react-apple-emojis";
import emojiData from "react-apple-emojis/src/data.json";
import styled from "styled-components";

interface useEmojiProps {
  emojiName: string;
  width?: string;
}

const EmojiSizeWrap = styled.div`
  width: ${(prop: { customWidth: string | undefined }) => prop.customWidth || "2rem"};
`;

const CustomEmoji: React.FC<useEmojiProps> = ({ emojiName = "", width = "" }) => {
  return (
    <EmojiSizeWrap customWidth={width}>
      <EmojiProvider data={emojiData}>
        <Emoji name={emojiName} width="100%" />
      </EmojiProvider>
    </EmojiSizeWrap>
  );
};

export default CustomEmoji;
