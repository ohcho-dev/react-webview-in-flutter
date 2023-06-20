import React from "react";
import { EmojiProvider, Emoji } from "react-apple-emojis";
import emojiData from "react-apple-emojis/src/data.json";
import * as S from "./Emoji.styled";

interface useEmojiProps {
  emojiName: string;
  width?: string;
}

const CustomEmoji: React.FC<useEmojiProps> = ({ emojiName = "", width = "" }) => {
  return (
    <S.EmojiSizeWrap customWidth={width}>
      <EmojiProvider data={emojiData}>
        <Emoji name={emojiName} width="100%" />
      </EmojiProvider>
    </S.EmojiSizeWrap>
  );
};

export default CustomEmoji;
