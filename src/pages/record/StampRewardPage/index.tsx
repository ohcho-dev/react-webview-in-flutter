import * as S from "./StampReward.styled";
import UseImgix from "../../../components/common/Imgix";
import EmptyBox from "../../../components/common/EmptyBox";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";
import Text from "components/common/Text";
import {
  ColorLightBlack9Base,
  TextBase1624Semibold,
  TextLg1826Semibold,
} from "lds-common/src/constants/tokens/global";
import Stamp from "components/domain/record/Stamp";

const StampRewardPage = () => {
  const StampList = [
    {
      id: 0,
      imgUrl: "/images/active_gross_motor_stamp.svg",
      title: "대근육 아이",
      active: true,
    },
    {
      id: 1,
      imgUrl: "/images/active_daily_stamp.svg",
      title: "#데일리",
      active: true,
    },
    {
      id: 2,
      imgUrl: "/images/active_play_stamp.svg",
      title: "놀이 마스터",
      active: true,
    },
    {
      id: 3,
      imgUrl: "/images/inactive_gross_motor_stamp.svg",
      title: "대근육 아이",
      active: false,
    },
    {
      id: 4,
      imgUrl: "/images/inactive_daily_stamp.svg",
      title: "#데일리",
      active: false,
    },
    {
      id: 5,
      imgUrl: "/images/inactive_play_stamp.svg",
      title: "놀이 마스터",
      active: false,
    },
  ];

  const rewardStampList = [
    {
      id: 0,
      imgUrl: "/images/active_seed_stamp.svg",
      title: "씨앗",
      active: true,
    },
    {
      id: 1,
      imgUrl: "/images/active_new_sprout_stamp.svg",
      title: "새싹",
      active: true,
    },
  ];

  return (
    <LayoutDetailPage titleType="close">
      <S.StampSection>
        <Text variant={TextLg1826Semibold} color={ColorLightBlack9Base}>
          기록 달성
        </Text>
        <S.StampContainer>
          {StampList.map(stampItem => (
            <Stamp
              active={stampItem.active}
              imgUrl={stampItem.imgUrl}
              title={stampItem.title}
              key={stampItem.id}
            />
          ))}
        </S.StampContainer>
      </S.StampSection>
      <S.StampSection lastOne>
        <EmptyBox height="2.5rem" />
        <Text variant={TextLg1826Semibold} color={ColorLightBlack9Base}>
          발달 챌린지
        </Text>
        <S.StampContainer>
          {rewardStampList.map(stampItem => (
            <Stamp
              active={stampItem.active}
              imgUrl={stampItem.imgUrl}
              title={stampItem.title}
              key={stampItem.id}
            />
          ))}
        </S.StampContainer>
      </S.StampSection>
    </LayoutDetailPage>
  );
};

export default StampRewardPage;
