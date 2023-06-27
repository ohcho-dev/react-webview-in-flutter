import { ko } from "date-fns/esm/locale";
import dayjs from "dayjs";
import React, { useEffect, useRef, useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

import Button from "../../../../components/common/Button";
import CustomModal from "../../../../components/common/CustomModal";
import { CustomRadioButton } from "../../../../components/common/CustomRadioButton";
import LayoutDetailPage from "../../../../layouts/LayoutDetailPage";
import { ForwardedInput } from "../../../../components/common/DatePickerInput";
import PageTitle from "../../../../components/domain/my/PageTitle";
import useCreateChild from "../../../../queries/domain/my/child/useCreateChild";
import * as S from "../childManagement.styled";
import AffiliatedOrganizationBox from "components/domain/my/AffiliatedOrganizationBox";
import ConfirmAffiliateOrganizationStatusModal from "components/domain/my/ConfirmAffiliateOrganizationStatusModal.tsx";
import ConfirmDeleteOrganizationModal from "components/domain/my/ConfirmDeleteOrganizationModal";
import RejectDeleteOrganizationModal from "components/domain/my/RejectDeleteOrganizationModal";
import RejectChangeOrganizationModal from "components/domain/my/RejectChangeOrganizationModal";
import useValidChildInfo from "hooks/my/useValidChildInfo";
import { OptionType } from "types/common";
import { CreateChildObjType } from "types/domain/my";
import { DEFAULT_CREATE_CHILD_VALUE } from "utils/default";

const GenderOption: OptionType[] = [
  { name: "여아", value: "F" },
  { name: "남아", value: "M" },
];
const PrematureOption: OptionType[] = [
  { name: "예정일 출산", value: 0 },
  { name: "이른둥이 출산", value: 1 },
];

const validationModalTitleArr = [
  "아이는 최대 5명 이상 등록할 수 없습니다.",
  "아이 이름을 입력해주세요.",
  "같은 이름의 아이를 등록할 수 없습니다.",
];

const CreateChildPage = () => {
  const navigate = useNavigate();
  const [childData, setChildData] = useState<CreateChildObjType>(DEFAULT_CREATE_CHILD_VALUE);
  const [birthDate, setBirthDate] = useState<Date | null>(new Date());
  const [dueDate, setDueDate] = useState<Date | null>(new Date());
  const [validationModalTitle, setValidationModalTitle] = useState<string>("");
  const [openValidationModal, setOpenValidationModal] = useState<boolean>(false);
  const [openSaveModal, setOpenSaveModal] = useState(false);
  const inputRef = useRef(null);
  const [openRejectDeleteOrganizationModal, setOpenRejectDeleteOrganizationModal] = useState(false);
  const [openRejectChangeOrganizationModal, setOpenRejectChangeOrganizationModal] = useState(false);
  const [openConfirmDeleteOrganizationModal, setOpenConfirmDeleteOrganizationModal] =
    useState(false);
  const [openAffiliatedConfirmModal, setOpenAffiliatedConfirmModal] = useState(false);
  const { mutate: createChild } = useCreateChild(setOpenSaveModal);
  const [isValid, titleNum] = useValidChildInfo(childData);

  //   생일 날짜 string으로 변환
  useEffect(() => {
    setChildData({ ...childData, birth_date: dayjs(birthDate).format("YYYY-MM-DD") });
    setDueDate(dayjs(birthDate).add(1, "day").toDate());
  }, [birthDate]);

  // 이른둥이 출산일 날짜 string으로 변환
  useEffect(() => {
    setChildData({ ...childData, due_date: dayjs(dueDate).format("YYYY-MM-DD") });
  }, [dueDate]);

  useEffect(() => {
    if (childData.premature_flag === 0) {
      setChildData(prev => ({ ...prev, due_date: "" }));
    } else if (childData.premature_flag === 1 && !childData.due_date) {
      setChildData({ ...childData, due_date: dayjs(childData.due_date).format("YYYY-MM-DD") });
      setDueDate(dayjs(birthDate).add(1, "day").toDate());
    }
  }, [childData.premature_flag]);

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
  };

  const handleSubmit = () => {
    if (isValid) {
      createChild(childData);
    } else {
      setValidationModalTitle(validationModalTitleArr[titleNum]);
      setOpenValidationModal(true);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, react/display-name
  const CustomInput = forwardRef((props: any, ref) => {
    return <ForwardedInput {...props} ref={ref} />;
  });

  return (
    <LayoutDetailPage
      bottomBtn
      bottomBtnElement={<Button theme={"black"} content={"아이 추가하기"} onClick={handleSubmit} />}
    >
      <PageTitle title={"아이 등록"} />
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
            onChangeFunction={(e: React.ChangeEvent<HTMLInputElement>) => {
              setChildData({ ...childData, gender: e.target.value as "F" | "M" });
            }}
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
            customInput={<CustomInput inputRef={inputRef} modifiable={true} />}
            onChange={(date: Date | null) => setBirthDate(date)}
          />

          <S.InputTitle>이른둥이 여부</S.InputTitle>
          <CustomRadioButton
            id="childPremeture"
            options={PrematureOption}
            selectedValue={childData.premature_flag}
            onChangeFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
              setChildData({ ...childData, premature_flag: Number(e.target.value) })
            }
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
                customInput={<CustomInput inputRef={inputRef} modifiable={true} />}
                onChange={(date: Date | null) => setDueDate(date)}
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
        title={validationModalTitle}
        isOpen={openValidationModal}
        toggleModal={() => setOpenValidationModal(!openValidationModal)}
        okBtnName="확인"
      />
      <CustomModal
        cancelBtn={false}
        title="아이등록이 완료됐어요."
        isOpen={openSaveModal}
        toggleModal={() => setOpenSaveModal(false)}
        okBtnName="확인"
        okBtnClick={() => {
          setOpenSaveModal(false);
          navigate("/my/management-child", { replace: true });
        }}
      />
    </LayoutDetailPage>
  );
};

export default CreateChildPage;
