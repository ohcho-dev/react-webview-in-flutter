import * as S from "./NoListRecord.styled";
import UseImgix from "../../../../../components/common/Imgix";
import EmptyBox from "../../../../../components/common/EmptyBox";

const INFO_MESSAGE = [
  "아이의 발달을 위한 연습을 영상으로 기록해 보세요.",
  "발달 연습을 기록하면 예상 발달 정도를  확인할 수 있어요.",
  "기록을 하고 스탬프를 획득해 보세요. 엘턴 이용에 도움되는 다양한 혜택을 받을 수 있어요.",
];

const NoListRecord = () => {
  return (
    <>
      <EmptyBox height="4rem" />
      <S.ImageWrap>
        <UseImgix srcUrl="/images/common/charactor_empty.svg" />
      </S.ImageWrap>
      <S.EmptyTitle>아직 기록이 없어요.</S.EmptyTitle>
      <S.EmptyDesc>
        <ol>
          {INFO_MESSAGE.map((item, index) => (
            <li key={item} value={item}>
              {index + 1}. {item}
            </li>
          ))}
        </ol>
      </S.EmptyDesc>
    </>
  );
};

export default NoListRecord;
