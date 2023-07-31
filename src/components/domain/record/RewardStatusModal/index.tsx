import CustomModal from "components/common/CustomModal";
import UseImgix from "components/common/Imgix";
import Text from "components/common/Text";
import {
  ColorLightBlack5,
  ColorLightBlack7,
  ColorLightBlack8,
  TextSm1420Regular,
  TextXl2030Bold,
} from "lds-common/src/constants/tokens/global";
import * as S from "./RewardStatus.styled";

interface RewardStatusModalProps {
  openRewardStatusModal: boolean;
  toggleModal: () => void;
  stampName: string;
  imgUrl: string;
  condition: string;
  reward?: string;
  achievementDate?: string;
  ableToGetReward: boolean;
  handleClickGettingRewardBtn?: () => void;
}

const RewardStatusModal = ({
  openRewardStatusModal,
  toggleModal,
  stampName,
  imgUrl,
  condition,
  reward,
  achievementDate,
  ableToGetReward,
  handleClickGettingRewardBtn,
}: RewardStatusModalProps) => {
  return (
    <CustomModal
      isOpen={openRewardStatusModal}
      toggleModal={toggleModal}
      okBtnName={ableToGetReward ? "보상 받기" : "확인"}
      cancelBtnName={ableToGetReward ? "나중에 받기" : undefined}
      cancelBtn={ableToGetReward}
      okBtnClick={
        ableToGetReward && handleClickGettingRewardBtn ? handleClickGettingRewardBtn : toggleModal
      }
    >
      <S.ModalWrapper>
        <Text variant={TextXl2030Bold} color={ColorLightBlack8}>
          {stampName}
        </Text>
        <S.StampImg>
          <UseImgix srcUrl={imgUrl} />
        </S.StampImg>
        <Text variant={TextSm1420Regular} color={ColorLightBlack7}>
          {condition}
        </Text>
        {achievementDate && (
          <Text variant={TextSm1420Regular} color={ColorLightBlack5}>
            {achievementDate}
          </Text>
        )}
        {reward && (
          <Text variant={TextSm1420Regular} color={ColorLightBlack5}>
            {reward}
          </Text>
        )}
      </S.ModalWrapper>
    </CustomModal>
  );
};

export default RewardStatusModal;
