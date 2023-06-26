import { ko } from "date-fns/esm/locale";
import dayjs from "dayjs";
import React, { useEffect, useRef, useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import "react-datepicker/dist/react-datepicker.css";

import Button from "../../../../components/common/Button";
import CustomModal from "../../../../components/common/CustomModal";
import { CustomRadioButton } from "../../../../components/common/CustomRadioButton";
import LayoutDetailPage from "../../../../layouts/LayoutDetailPage";
import { ForwardedInput } from "../../../../components/common/DatePickerInput";
import PageTitle from "../../../../components/domain/my/PageTitle";
import { createChildType, OptionType } from "../../../../types/domain/my";
import useCreateChild from "../../../../queries/domain/my/child/useCreateChild";
import { childrenListState } from "store/common";
import * as S from "../childManagement.styled";
import AffiliatedOrganizationBox from "components/domain/my/AffiliatedOrganizationBox";

export const DEFAULT_CHILD_TYPE = {
  id: 0,
  name: "",
  gender: "",
  birth_date: dayjs(new Date()).format("YYYY-MM-DD"),
  premature_flag: 0,
  due_date: "",
  image: "",
  parent_id: 0,
  birth_modifiable: false,
};

const Genders: OptionType[] = [
  { name: "여아", value: "F" },
  { name: "남아", value: "M" },
];
const Prematures: OptionType[] = [
  { name: "예정일 출산", value: 0 },
  { name: "이른둥이 출산", value: 1 },
];

const DEFAULT_GENDER = { name: "여아", value: "F" };
const DEFAULT_PREMATURE = { name: "예정일 출산", value: 0 };

const CreateChildPage = () => {
  const navigate = useNavigate();
  const [childData, setChildData] = useState<createChildType>(DEFAULT_CHILD_TYPE);
  const [birthDate, setBirthDate] = useState<Date | null>(new Date());
  const [dueDate, setDueDate] = useState<Date | null>(new Date());
  const [openLengthModal, setOpenLengthModal] = useState(false);
  const [openNameCheckModal, setOpenNameCheckModal] = useState(false);
  const [openSameNameCheckModal, setOpenSameNameCheckModal] = useState(false);
  const [openSaveModal, setOpenSaveModal] = useState(false);
  const inputRef = useRef(null);
  const childrenList = useRecoilValue(childrenListState);
  const { mutate: createChild } = useCreateChild(setOpenSaveModal);

  //   생일 날짜 string으로 변환
  useEffect(() => {
    setChildData({ ...childData, birth_date: dayjs(birthDate).format("YYYY-MM-DD") });
    setDueDate(birthDate);
  }, [birthDate]);

  // 이른둥이 출산일 날짜 string으로 변환
  useEffect(() => {
    setChildData({ ...childData, due_date: dayjs(dueDate).format("YYYY-MM-DD") });
  }, [dueDate]);

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

  useEffect(() => {
    if (childData.premature_flag === 0) {
      setChildData(current => {
        const { due_date, ...rest } = current;
        return rest;
      });
    } else if (childData.premature_flag === 1 && !childData.due_date) {
      setChildData({ ...childData, due_date: dayjs(childData.due_date).format("YYYY-MM-DD") });
    }
  }, [childData.premature_flag]);

  const handleSubmit = () => {
    const validCheck = childrenList.find((child: any) => child.name === childData.name);

    if (childrenList.length >= 5) {
      setOpenLengthModal(true);
      return;
    }
    if (!childData.name) {
      setOpenNameCheckModal(true);
      return;
    }
    if (validCheck) {
      setOpenSameNameCheckModal(true);
      return;
    }
    createChild(childData);
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
            type={Genders}
            defaultValue={DEFAULT_GENDER}
            onChangeFunction={(e: React.ChangeEvent<HTMLInputElement>) => {
              setChildData({ ...childData, gender: e.target.value });
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
            type={Prematures}
            defaultValue={DEFAULT_PREMATURE}
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
                minDate={birthDate}
                maxDate={dayjs(birthDate).add(90, "day").toDate()}
                customInput={<CustomInput inputRef={inputRef} modifiable={true} />}
                onChange={(date: Date | null) => setDueDate(date)}
              />
            </>
          )}
        </S.FormWrap>
        <S.InputTitle>제휴 기관</S.InputTitle>
        <AffiliatedOrganizationBox handleClick={() => console.log("d")} />
      </S.PageLayout>

      <CustomModal
        cancelBtn={false}
        title="아이는 최대 5명 이상 등록할 수 없습니다."
        isOpen={openLengthModal}
        toggleModal={() => setOpenLengthModal(!openLengthModal)}
        okBtnName="확인"
      />
      <CustomModal
        cancelBtn={false}
        title="아이 이름을 입력해주세요."
        isOpen={openNameCheckModal}
        toggleModal={() => setOpenNameCheckModal(!openNameCheckModal)}
        okBtnName="확인"
      />

      <CustomModal
        cancelBtn={false}
        title="같은 이름의 아이를 등록할 수 없습니다."
        isOpen={openSameNameCheckModal}
        toggleModal={() => setOpenSameNameCheckModal(!openSameNameCheckModal)}
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
