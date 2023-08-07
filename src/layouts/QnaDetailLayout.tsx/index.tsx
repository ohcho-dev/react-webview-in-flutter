import Icon from "components/common/Icon";
import { DetailTitleBar } from "components/domain/my/TitleBar";
import { TITLE_BAR_HEIGHT_REM } from "constants/size";
import LayoutBasePage from "layouts/LayoutBasePage";
import { DetailPage } from "layouts/LayoutDetailPage";
import {
  ColorLightEltern9Base,
  ColorLightSlate9Base,
} from "lds-common/src/constants/tokens/global";
import { useEffect, useRef, useState } from "react";
import * as S from "./QnaDetailLayout.styled";

interface QnaDetailLayoutProps {
  hideTitleBar?: boolean;
  titleBarBorder?: boolean;
  children: React.ReactNode;
  bottomBtn?: boolean;
  bottomBtnElement?: React.ReactNode;
  style?: object;
  title?: string;
  leftBtn?: React.ReactNode;
  bottomScrollAnimationEffect?: boolean;
  handleBackBtnClick?: () => void | undefined;
  titleType?: "back" | "close";
  handleScroll: (y: number) => void;
  handleSendBtnClick: () => void;
}

const QnaDetailLayout: React.FC<QnaDetailLayoutProps> = ({
  children,
  hideTitleBar = false,
  titleBarBorder = false,
  bottomBtn = false,
  bottomScrollAnimationEffect = false,
  style,
  title,
  leftBtn,
  handleBackBtnClick,
  titleType,
  handleScroll,
  handleSendBtnClick,
}) => {
  const BottomSectionRef = useRef<HTMLDivElement>(null);
  const TextAreaRef = useRef<HTMLTextAreaElement>(null);
  const [content, setContent] = useState("");
  const scrollRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [scrollY, setScrollY] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [scrollAtBottom, setScrollAtBottom] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (scrollY === scrollRef?.current?.scrollTop) {
        setScrolling(false);
      }
    }, 500);
  }, [scrollY]);

  useEffect(() => {
    // 댓글창의 크기가 커질때 스크롤이 제일 아래로 오게 함
    if (scrollRef.current) {
      if (scrollAtBottom) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }
  }, [BottomSectionRef.current?.clientHeight, scrollAtBottom]);

  return (
    <LayoutBasePage>
      {!hideTitleBar && (
        <DetailTitleBar
          style={titleBarBorder ? { borderBottom: "solid 0.5px rgba(0, 0, 0, 0.15)" } : {}}
          leftBtn={leftBtn}
          title={title}
          handleBackBtnClick={handleBackBtnClick}
          titleType={titleType}
        />
      )}
      <DetailPage
        id="main"
        bottomBtn={bottomBtn}
        style={{
          ...style,
          height: `calc(100vh - ${TITLE_BAR_HEIGHT_REM}rem - ${
            BottomSectionRef.current ? BottomSectionRef.current.clientHeight / 10 : 0
          }rem)`,
        }}
        ref={scrollRef}
        onScroll={() => {
          const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

          handleScroll(scrollTop);
          // 0.5는 스크롤 UI에 따른 미세한 차이값
          setScrollAtBottom(scrollHeight - clientHeight <= scrollTop + 0.5);
          setScrollY(scrollTop);
          if (!scrolling) {
            setScrolling(true);
          }
        }}
      >
        {children}
      </DetailPage>
      <S.InputBottomSectionWrapper
        $scrolling={bottomScrollAnimationEffect && scrolling}
        ref={BottomSectionRef}
      >
        <S.CustomInput>
          <textarea
            ref={TextAreaRef}
            rows={1}
            placeholder="댓글을 입력해 주세요."
            value={content}
            onChange={evt => {
              const { value } = evt.target;
              setContent(value);
              if (TextAreaRef.current) {
                TextAreaRef.current.style.height = "auto";
                if (TextAreaRef.current.scrollHeight > 45)
                  TextAreaRef.current.style.height = TextAreaRef.current.scrollHeight / 10 + "rem";
              }
            }}
          />
          <S.SendBtnSection onClick={handleSendBtnClick}>
            <Icon
              icon="send"
              size={24}
              fill={content.length ? ColorLightEltern9Base : ColorLightSlate9Base}
            />
          </S.SendBtnSection>
        </S.CustomInput>
      </S.InputBottomSectionWrapper>
    </LayoutBasePage>
  );
};

export default QnaDetailLayout;
