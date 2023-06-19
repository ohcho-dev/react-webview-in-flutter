import * as S from "./ExplanationRecord.styled";
import UseImgix from "../../../components/common/Imgix";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";

const INFO_MESSAGE = [
  {
    id: 0,
    title: "왜 기록해야 할까요?",
    imgUrl: "/images/record/record_information.svg",
    info: [
      "엘턴은 아이의 성장과 발달 과정을 더 잘 관찰할 수 있는 발달 포인트를 과제로 제공합니다.",
      "가이드를 따라 촬영하고 비교해 보세요. 동영상으로 기록함으로써 성장을 비교하여 확인할 수 있습니다.",
      "발달 상황에 대한 정확한 평가가 필요할 때 도움이 될 자료가 됩니다.",
      "아이 발달을 위한 활동을 연습하며 촬영하는 습관을 들여 보세요. 처음 혼자 걸은 날, 처음 숟가락으로 밥 먹는 모습 등 귀중한 순간을 영상에 담을 수 있습니다.",
    ],
  },
  {
    id: 1,
    title: "이런 기록을 남겨 보세요.",
    imgUrl: "/images/record/record_pencil.svg",
    info: [
      "OO 연습 : 운동 능력 발달에 도움되는 활동을 연습하고 영상으로 기록합니다.",
      "OO 놀이 : 아이 놀이가 능숙해 가는 모습을 영상으로 기록하며 비교해볼 수 있어요.",
    ],
  },
];

const ExplanationRecord = () => {
  return (
    <LayoutDetailPage titleType="close">
      <S.Wrapper>
        {INFO_MESSAGE.map((item, index) => (
          <S.Section key={index}>
            <UseImgix srcUrl={item.imgUrl} alt={item.title} />
            <S.Title>{item.title}</S.Title>
            <S.Desc>
              {item.info.map((info, key) => (
                <li key={key}>{info}</li>
              ))}
            </S.Desc>
          </S.Section>
        ))}
      </S.Wrapper>
    </LayoutDetailPage>
  );
};

export default ExplanationRecord;
