import { ko } from "date-fns/esm/locale";
import dayjs from "dayjs";
import React, { useEffect, useRef, useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css";

import { createChild } from "../../../../queries/domain/my/childApi";
import Button from "../../../../components/common/Button";
import CustomModal from "../../../../components/common/CustomModal";
import { CustomRadioButton } from "../../../../components/common/CustomRadioButton";
import LayoutDetailPage from "../../../../layouts/LayoutDetailPage";
import { registChildSuccessedAction } from "../../../../utils/google-analytics/events/ManagementChildEvent";
import { ForwardedInput } from "../../../../components/common/DatePickerInput";
import PageTitle from "../../../../components/domain/my/PageTitle";
import { NativeFunction } from "../../../../utils/app/NativeFunction";
import { createChildType } from "../../../../types/domain/my";
import { childrenListState } from "../../../../store/common";

const DEFAULT_CHILD_TYPE = {
  name: "",
  gender: "F",
  birth_date: dayjs(new Date()).format("YYYY-MM-DD"),
  premature_flag: 0,
  due_date: "",
};

interface TypeProps {
  name: string;
  value: any;
}

const Genders: TypeProps[] = [
  { name: "여아", value: "F" },
  { name: "남아", value: "M" },
];
const Prematures: TypeProps[] = [
  { name: "예정일 출산", value: 0 },
  { name: "이른둥이 출산", value: 1 },
];

const PageLayout = styled.div`
  margin-top: 7rem;
`;

const FormWrap = styled.form`
  padding: 0 2.5rem;
`;

const InputTitle = styled.div`
  margin-bottom: 1rem;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.5rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
`;

const InputBox = styled.input`
  width: 100%;
  border: none;

  font-weight: 500;
  font-size: 18px;
  line-height: 25px;

  color: rgba(0, 0, 0, 0.8);

  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  :focus {
    outline: none;
    border-bottom: 1px solid #5ac4b1;
  }

  ::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`;

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

  const callCreateChildInfo = useMutation(createChild, {
    onSuccess: () => {
      NativeFunction("ga4logNativeEventLog", `${registChildSuccessedAction}`);
      setOpenSaveModal(true);
    },
    onError: error => {
      throw error;
    },
  });

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
    callCreateChildInfo.mutate(childData);
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
      <PageLayout>
        <FormWrap>
          <InputTitle>이름</InputTitle>
          <InputBox
            placeholder="이름을 입력해주세요."
            id="childName"
            value={childData.name}
            maxLength={30}
            onChange={handleTypeInformation}
          />

          <InputTitle>성별</InputTitle>
          <CustomRadioButton
            id="childGender"
            type={Genders}
            defaultValue={DEFAULT_GENDER}
            onChangeFunction={(e: React.ChangeEvent<HTMLInputElement>) => {
              setChildData({ ...childData, gender: e.target.value });
            }}
          />

          <InputTitle>생년월일</InputTitle>
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

          <InputTitle>이른둥이 여부</InputTitle>
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
              <InputTitle>기존 출산 예정일</InputTitle>
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
        </FormWrap>
      </PageLayout>

      <CustomModal
        cancelbtn={false}
        title="아이는 최대 5명 이상 등록할 수 없습니다."
        isOpen={openLengthModal}
        toggleModal={() => setOpenLengthModal(!openLengthModal)}
        okBtnName="확인"
      />
      <CustomModal
        cancelbtn={false}
        title="아이 이름을 입력해주세요."
        isOpen={openNameCheckModal}
        toggleModal={() => setOpenNameCheckModal(!openNameCheckModal)}
        okBtnName="확인"
      />

      <CustomModal
        cancelbtn={false}
        title="같은 이름의 아이를 등록할 수 없습니다."
        isOpen={openSameNameCheckModal}
        toggleModal={() => setOpenSameNameCheckModal(!openSameNameCheckModal)}
        okBtnName="확인"
      />
      <CustomModal
        cancelbtn={false}
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
