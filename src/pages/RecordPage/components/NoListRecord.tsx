import Imgix from "react-imgix";
import styled from "styled-components";

const INFO_MESSAGE = [
  "아이의 발달을 위한 연습을 영상으로 기록해 보세요.",
  "발달 연습을 기록하면 예상 발달 정도를  확인할 수 있어요.",
  "기록을 하고 스탬프를 획득해 보세요. 엘턴 이용에 도움되는 다양한 혜택을 받을 수 있어요.",
];

const Empty4 = styled.div`
  height: 4rem;
`;

const ImageWrap = styled.div`
  img {
    width: 100%;
  }
`;

const EmptyTitle = styled.div`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.6rem;
  letter-spacing: -0.04rem;
  color: #020304;
  text-align: center;
`;

const EmptyDesc = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;
  letter-spacing: -0.4px;
  color: #9aa0a6;
  padding: 1.2rem 2rem;

  ol {
    margin-left: 1.5rem;

    li {
      list-style-position: inside;
      text-indent: -1.5rem;
    }
  }
`;

const NoListRecord = () => {
  return (
    <>
      <Empty4 />
      <ImageWrap>
        <Imgix src={`${process.env.REACT_APP_IMGIX_URL}/images/common/charactor_empty.svg`} />
      </ImageWrap>
      <EmptyTitle>아직 기록이 없어요.</EmptyTitle>
      <EmptyDesc>
        <ol>
          {INFO_MESSAGE.map((item, index) => (
            <li key={item} value={item}>
              {index + 1}. {item}
            </li>
          ))}
        </ol>
      </EmptyDesc>
    </>
  );
};

export default NoListRecord;
