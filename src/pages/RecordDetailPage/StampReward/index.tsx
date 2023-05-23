import EmptyBox from "../../../components/globals/EmptyBox";
import { ColorLightEltern4 } from "../../../constant/ldsConstants/global";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";
import UseImgix from "../../../utils/UseImgix";
import * as SC from "./styled";

const StampReward = () => {
  const StampList = [
    {
      id: 0,
      imgUrl: "/images/record/record_muscle.svg",
      title: "대근육 아이",
    },
    {
      id: 1,
      imgUrl: "/images/record/record_daily.svg",
      title: "대근육 아이",
    },
    {
      id: 2,
      imgUrl: "/images/record/record_play.svg",
      title: "대근육 아이",
    },
    {
      id: 3,
      imgUrl: "/images/record/record_muscle.svg",
      title: "대근육 아이",
    },
    {
      id: 4,
      imgUrl: "/images/record/record_daily.svg",
      title: "대근육 아이",
    },
    {
      id: 5,
      imgUrl: "/images/record/record_play.svg",
      title: "대근육 아이",
    },
    {
      id: 6,
      imgUrl: "/images/record/record_muscle.svg",
      title: "대근육 아이",
    },
    {
      id: 7,
      imgUrl: "/images/record/record_daily.svg",
      title: "대근육 아이",
    },
    {
      id: 8,
      imgUrl: "/images/record/record_play.svg",
      title: "대근육 아이",
    },
  ];

  return (
    <LayoutDetailPage titleType="close">
      <SC.Title>기록 목록</SC.Title>
      <SC.StampContainer>
        {StampList.map((stampItem, index) => {
          let backgroundColor = "";
          if (index === 2) console.log((index + 1) % 3);
          switch ((index + 1) % 3) {
            case 0:
              backgroundColor = "#FFE6E6";
              break;
            case 1:
              backgroundColor = "#FFF3DB";
              break;
            case 2:
              backgroundColor = ColorLightEltern4;
              break;
          }
          return (
            <SC.StampListWrap key={index}>
              <SC.StampImage style={{ backgroundColor }}>
                <UseImgix srcUrl={stampItem.imgUrl} alt={stampItem.title} />
              </SC.StampImage>
              <SC.StampTitle style={{ width: "10rem" }}>{stampItem.title}</SC.StampTitle>
            </SC.StampListWrap>
          );
        })}
      </SC.StampContainer>
      <EmptyBox height="2.4rem" />
      <SC.Title>기록 여정</SC.Title>
    </LayoutDetailPage>
  );
};

export default StampReward;
