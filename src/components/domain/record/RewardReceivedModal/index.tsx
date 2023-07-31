import CustomModal from "components/common/CustomModal";
import UseImgix from "components/common/Imgix";
import Text from "components/common/Text";
import { ColorLightBlack7, TextSm1420Regular } from "lds-common/src/constants/tokens/global";
import * as S from "./RewardReceivedModal.styled";

interface RewardReceivedModalProps {
  openModal: boolean;
  toggleModal: () => void;
}

const RewardReceivedModal = ({ openModal, toggleModal }: RewardReceivedModalProps) => {
  return (
    <CustomModal
      isOpen={openModal}
      toggleModal={toggleModal}
      topImage={<UseImgix srcUrl="/images/checking.svg" style={{ width: "9.6rem" }} />}
      title={"축하해요! 보상을 받았어요."}
    >
      <S.ConfirmGettingRewardModalBody>
        <Text variant={TextSm1420Regular} color={ColorLightBlack7}>
          보상을 획득했어요!
        </Text>
        <Text variant={TextSm1420Regular} color={ColorLightBlack7}>
          쿠폰함을 확인해주세요.
        </Text>
      </S.ConfirmGettingRewardModalBody>
    </CustomModal>
  );
};

export default RewardReceivedModal;
