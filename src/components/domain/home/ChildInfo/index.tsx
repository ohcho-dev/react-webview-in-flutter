import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useRecoilValue } from "recoil";

import { deleteProfilImageApi } from "../../../../queries/domain/home/homeApi";
import CustomSelectModal from "../../../common/CustomSelectModal";
import { NativeFunction } from "../../../../utils/app/NativeFunction";
import { getDate } from "../../../../utils/date/getDateTime";
import UseImgix from "../../../../components/common/Imgix";
import getDday from "../../../../utils/date/getDday";
import { selectedChildInfoState, selectedHomeDataState } from "../../../../store/common";
import { homeQueryKeys } from "../../../../queries/domain/home/homeQueryKeys";
import { myQueryKeys } from "../../../../queries/domain/my/myQueryKeys";
import * as S from "./ChildInfo.styled";

const ChildInfo = () => {
  const queryClient = useQueryClient();
  const homeData = useRecoilValue(selectedHomeDataState);
  const selectedChild = useRecoilValue(selectedChildInfoState);
  const [openSelectModal, setOpenSelectModal] = useState(false);

  const deleteProfilImage = useMutation(deleteProfilImageApi, {
    onSuccess: res => {
      queryClient.invalidateQueries(myQueryKeys.childrenList);
    },
  });

  useEffect(() => {
    queryClient.invalidateQueries(homeQueryKeys.homeData);
  }, [selectedChild.id]);

  return (
    <S.ChildInfoWrap background={process.env.REACT_APP_IMGIX_URL + "/images/bg-home.svg"}>
      <S.FlexBox>
        <div>
          <S.BirthDateChip>
            탄생일<span>{selectedChild.birth_date && getDate(selectedChild.birth_date)}</span>
          </S.BirthDateChip>
          <S.DdayLabel>우리아이 태어난지</S.DdayLabel>
          <S.DdayValue>
            <span>
              {selectedChild.birth_date && Math.abs(getDday(selectedChild.birth_date)) + 1}
            </span>
            <span>일</span>
          </S.DdayValue>
        </div>
        {!selectedChild.image && (
          <S.ProfileImageWrap
            onClick={() => NativeFunction("routeNativeScreen", `imageUpload@${selectedChild.id}`)}
          >
            <UseImgix srcUrl="/images/profile-default.svg" alt="프로필 사진" />
            <UseImgix srcUrl="/images/icon-addbtn.svg" alt="사진 추가하기" />
          </S.ProfileImageWrap>
        )}
        {selectedChild.image && (
          <S.ProfileImageWrap onClick={() => setOpenSelectModal(true)}>
            <S.UploadImage>
              <UseImgix srcUrl={selectedChild.image} alt="프로필 사진" />
            </S.UploadImage>
          </S.ProfileImageWrap>
        )}
      </S.FlexBox>
      <S.NoticeWrap>
        <S.NoticeTitle>이 시기에 아이는</S.NoticeTitle>

        <S.NoticeDesc>
          {homeData.month_level_info.map((item, key) => (
            <span key={key}>{item}</span>
          ))}
        </S.NoticeDesc>
      </S.NoticeWrap>
      <CustomSelectModal
        title="프로필 사진"
        isOpen={openSelectModal}
        toggleModal={() => setOpenSelectModal(!openSelectModal)}
        selectBtnArray={[
          {
            id: 0,
            name: "앨범에서 이미지 선택",
            function: () => {
              NativeFunction("routeNativeScreen", `imageUpload@${selectedChild.id}`);
              setOpenSelectModal(false);
            },
          },
          {
            id: 1,
            name: "기본 이미지로 변경",
            function: () => {
              setOpenSelectModal(false);
              deleteProfilImage.mutate(selectedChild.id.toString());
            },
          },
        ]}
      />
    </S.ChildInfoWrap>
  );
};

export default ChildInfo;
