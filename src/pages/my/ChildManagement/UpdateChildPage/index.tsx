import { ko } from "date-fns/esm/locale";
import dayjs from "dayjs";
import React, { useEffect, useRef, useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Button from "../../../../components/common/Button";

import CustomModal from "../../../../components/common/CustomModal";
import { CustomRadioButton } from "../../../../components/common/CustomRadioButton";
import LayoutDetailPage from "../../../../layouts/LayoutDetailPage";
import "react-datepicker/dist/react-datepicker.css";
import { ForwardedInput } from "../../../../components/common/DatePickerInput";
import PageTitle from "../../../../components/domain/my/PageTitle";
import { ChildType, OptionType } from "../../../../types/common";
import { childrenListState } from "../../../../store/common";
import useSelectedChild from "../../../../queries/domain/my/child/useSelectedChild";
import useUpdateChild from "../../../../queries/domain/my/child/useUpdateChild";
import * as S from "../childManagement.styled";
import AffiliatedOrganizationBox from "components/domain/my/AffiliatedOrganizationBox";
import ConfirmAffiliateOrganizationStatusModal from "components/domain/my/ConfirmAffiliateOrganizationStatusModal.tsx";
import ConfirmDeleteOrganizationModal from "components/domain/my/ConfirmDeleteOrganizationModal";
import RejectDeleteOrganizationModal from "components/domain/my/RejectDeleteOrganizationModal";
import RejectChangeOrganizationModal from "components/domain/my/RejectChangeOrganizationModal";
import { DEFAULT_CHILD_VALUE } from "utils/default";

const GenderOption: OptionType[] = [
  { name: "여아", value: "F" },
  { name: "남아", value: "M" },
];
const PrematureOption: OptionType[] = [
  { name: "예정일 출산", value: 0 },
  { name: "이른둥이 출산", value: 1 },
];

const UpdateChildPage = () => {
  const { childid } = useParams();
  const navigate = useNavigate();
  const [childData, setChildData] = useState<ChildType>(DEFAULT_CHILD_VALUE);
  const [openAffiliatedConfirmModal, setOpenAffiliatedConfirmModal] = useState(false);
  const [birthDate, setBirthDate] = useState<Date | null>(new Date());
  const [birthModifiable, setBirthModifiable] = useState(false);
  const [dueDate, setDueDate] = useState<Date | null>(new Date());
  const [openModal, setOpenModal] = useState(false);
  const [openBackModal, setOpenBackModal] = useState(false);
  const [openValidModal, setOpenValidModal] = useState(false);
  const [openSameNameModal, setOpenSameNameModal] = useState(false);
  const [openRejectModal, setOpenRejectModal] = useState(false);
  const [openRejectDeleteOrganizationModal, setOpenRejectDeleteOrganizationModal] = useState(false);
  const [openRejectChangeOrganizationModal, setOpenRejectChangeOrganizationModal] = useState(false);
  const [openConfirmDeleteOrganizationModal, setOpenConfirmDeleteOrganizationModal] =
    useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);
  const childList = useRecoilValue(childrenListState);
  const inputRef = useRef(null);
  const { data } = useSelectedChild(childid);
  const { mutate: updateChild } = useUpdateChild(setOpenModal);

  useEffect(() => {
    if (data.length) {
      setChildData(data[0]);
      setBirthDate(new Date(data[0].birth_date));
      data[0].due_date !== null && setDueDate(new Date(data[0].due_date));
      setBirthModifiable(data[0].birth_modifiable);
    }
  }, [data]);

  useEffect(() => {
    setDueDate(dayjs(birthDate).add(1, "day").toDate());
  }, [birthDate]);

  const handleGenderValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setChildData({ ...childData, gender: evt.target.value });
    setUpdateStatus(true);
  };

  const handlePrematureValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (!birthModifiable) {
      setOpenRejectModal(!openRejectModal);
      return;
    }
    const flag = Number(evt.target.value);
    if (flag === 1) {
      setDueDate(dayjs(birthDate).add(1, "day").toDate());
    }
    setChildData({ ...childData, premature_flag: flag });
    setUpdateStatus(true);
  };

  const handleTypeInformation = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const id = evt.target.id;
    const value = evt.target.value;
    const maxLength = evt.target.maxLength;

    // 한글, 영문, 숫자만 입력가능
    const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]*$/;
    if (!regex.test(value)) {
      value.replace(/[^a-z|A-Z|0-9|ㄱ-ㅎ|가-힣]/g, "");
      return;
    }

    // 최대 글자 수 제한
    if (maxLength && maxLength < value.length) return;

    if (id === "childName") {
      setChildData({ ...childData, name: value });
    } else if (id === "childBirth") {
      setChildData({ ...childData, birth_date: value });
    }
    setUpdateStatus(true);
  };

  const handleSubmit = () => {
    const validCheck = childList.find((child: any) => child.name === childData.name);
    if (!childData.name) {
      setOpenValidModal(true);
      return;
    }
    if (validCheck && data[0].name !== validCheck.name) {
      setOpenSameNameModal(true);
      return;
    }

    updateChild({
      ...childData,
      id: String(childid),
      birth_date: dayjs(birthDate).format("YYYY-MM-DD"),
      due_date: dayjs(dueDate).format("YYYY-MM-DD"),
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, react/display-name
  const CustomInput = forwardRef((props: any, ref) => {
    return <ForwardedInput {...props} ref={ref} />;
  });

  return (
    <LayoutDetailPage
      handleBackBtnClick={() => (updateStatus ? setOpenBackModal(!openBackModal) : navigate(-1))}
      bottomBtn
      bottomBtnElement={
        <Button theme={"black"} content={"아이 정보 수정하기"} onClick={handleSubmit} />
      }
    >
      <PageTitle title={"아이 정보 수정"} />
      <S.PageLayout>
        <S.FormWrap>
          <S.InputTitle>아이 이름</S.InputTitle>
          <S.InputBox
            placeholder="이름을 입력해주세요."
            id="childName"
            value={childData.name}
            maxLength={30}
            onChange={handleTypeInformation}
          />

          <S.InputTitle>아이 성별</S.InputTitle>
          <CustomRadioButton
            id="childGender"
            options={GenderOption}
            selectedValue={childData.gender}
            onChangeFunction={(e: React.ChangeEvent<HTMLInputElement>) => handleGenderValue(e)}
          />

          <S.InputTitle>아이 생년월일</S.InputTitle>
          <DatePicker
            withPortal
            showYearDropdown
            yearDropdownItemNumber={6}
            scrollableYearDropdown
            dateFormatCalendar="MMMM"
            locale={ko}
            dateFormat="yyyy.MM.dd"
            showPopperArrow={false}
            maxDate={new Date()}
            selected={birthDate}
            customInput={
              <CustomInput
                inputRef={inputRef}
                modifiable={birthModifiable}
                setOpenRejectModal={() => setOpenRejectModal(!openRejectModal)}
              />
            }
            onChange={(date: Date | null) => {
              setBirthDate(date);
              setUpdateStatus(true);
            }}
          />

          <S.InputTitle>이른둥이 여부</S.InputTitle>
          <CustomRadioButton
            id="childPremeture"
            options={PrematureOption}
            selectedValue={childData.premature_flag}
            modifiable={birthModifiable}
            onChangeFunction={handlePrematureValue}
          />

          {childData.premature_flag === 1 && (
            <>
              <S.InputTitle>기존 출산 예정일</S.InputTitle>
              <DatePicker
                withPortal
                showYearDropdown
                yearDropdownItemNumber={6}
                scrollableYearDropdown
                dateFormatCalendar="MMMM"
                locale={ko}
                dateFormat="yyyy.MM.dd"
                showPopperArrow={false}
                selected={dueDate}
                minDate={dayjs(birthDate).add(1, "day").toDate()}
                maxDate={dayjs(birthDate).add(90, "day").toDate()}
                customInput={
                  <CustomInput
                    inputRef={inputRef}
                    modifiable={birthModifiable}
                    setOpenRejectModal={() => setOpenRejectModal(!openRejectModal)}
                  />
                }
                onChange={(date: Date | null) => {
                  setDueDate(date);
                  setUpdateStatus(true);
                }}
              />
            </>
          )}
          <S.InputTitle>제휴 기관</S.InputTitle>
          {/* TODO: 제휴기관 등록 여부에 따라 다르게 보여주기 */}
          <AffiliatedOrganizationBox handleClick={() => setOpenAffiliatedConfirmModal(true)} />
          {/* <NoAffiliatedOrganizationBox /> */}
        </S.FormWrap>
      </S.PageLayout>
      <ConfirmAffiliateOrganizationStatusModal
        toggle={openAffiliatedConfirmModal}
        handleToggle={() => setOpenAffiliatedConfirmModal(!openAffiliatedConfirmModal)}
        handleDeleteBtnClick={async () => {
          await setOpenAffiliatedConfirmModal(false);
          await setOpenConfirmDeleteOrganizationModal(true);
        }}
        // TODO: 기관 변경하기 -> 진행중인 코칭 없을때 : 카메라 화면으로 이동
        handleChangeBtnClick={async () => {
          await setOpenAffiliatedConfirmModal(false);
          await setOpenRejectChangeOrganizationModal(true);
        }}
      />
      <ConfirmDeleteOrganizationModal
        toggle={openConfirmDeleteOrganizationModal}
        handleToggle={() => setOpenConfirmDeleteOrganizationModal(prev => !prev)}
        handleDeleteBtnClick={async () => {
          await setOpenConfirmDeleteOrganizationModal(false);
          // TODO: 진행 중 코칭이 있을 시 다르게 로직 실행
          await setOpenRejectDeleteOrganizationModal(true);
        }}
      />
      <RejectDeleteOrganizationModal
        toggle={openRejectDeleteOrganizationModal}
        handleToggle={() => setOpenRejectDeleteOrganizationModal(prev => !prev)}
      />
      <RejectChangeOrganizationModal
        toggle={openRejectChangeOrganizationModal}
        handleToggle={() => setOpenRejectChangeOrganizationModal(prev => !prev)}
      />
      <CustomModal
        cancelBtn={false}
        title="아이 이름을 입력해주세요."
        isOpen={openValidModal}
        toggleModal={() => {
          setOpenValidModal(false);
        }}
        okBtnName="확인"
      />
      <CustomModal
        cancelBtn={false}
        title="같은 이름의 아이를 등록할 수 없습니다."
        isOpen={openSameNameModal}
        toggleModal={() => {
          setOpenSameNameModal(false);
        }}
        okBtnName="확인"
      />
      <CustomModal
        cancelBtn={false}
        title="저장이 완료됐어요."
        content="수정사항을 저장했어요."
        isOpen={openModal}
        toggleModal={() => setOpenModal(!openModal)}
        okBtnName="확인"
        okBtnClick={() => {
          navigate(-1);
        }}
      />
      <CustomModal
        cancelBtn={false}
        title="변경할 수 없어요."
        content="진행중인 검사가 있을 경우 생일을 변경할 수 없습니다."
        isOpen={openRejectModal}
        toggleModal={() => setOpenRejectModal(!openRejectModal)}
        okBtnName="확인"
        okBtnClick={() => setOpenRejectModal(!openRejectModal)}
      />

      <CustomModal
        cancelBtn={true}
        title="수정사항 저장이 필요해요."
        content="수정 사항을 저장하지않았습니다. 저장없이 나가시겠어요?"
        isOpen={openBackModal}
        toggleModal={() => setOpenBackModal(!openBackModal)}
        okBtnName="수정사항 저장"
        okBtnClick={() => {
          setOpenBackModal(!openBackModal);
          handleSubmit();
        }}
        cancelBtnName="그냥 나가기"
        cancelBtnClick={() => {
          setOpenBackModal(!openBackModal);
          navigate(-1);
        }}
      />
    </LayoutDetailPage>
  );
};
export default UpdateChildPage;
