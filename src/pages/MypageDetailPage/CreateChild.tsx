import React, { useEffect, useRef, useState, forwardRef } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createChild } from "../../api/childApi";
import Button from "../../components/common/Button";
import { CustomRadioButton } from "../../components/common/CustomRadioButton";
import LayoutDetailPage from "../../layouts/LayoutDetailPage";
import { createChildType } from "../../utils/type";
import { BottomBtnWrap } from "../ProgramPage/components/styled";
import PageTitle from "./components/PageTitle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ForwardedInput } from "./components/DatePickerInput";
import moment from "moment";
import { ko } from "date-fns/esm/locale";
import CustomModal from "../../components/common/CustomModal";

const DEFAULT_CHILD_TYPE = {
  name: "",
  gender: "F",
  birth_date: moment(new Date()).format("YYYY-MM-DD"),
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

const CreateChild = () => {
  const navigate = useNavigate();
  const [childData, setChildData] = useState<createChildType>(DEFAULT_CHILD_TYPE);

  const [defaultGender, setDefaultGender] = useState({ name: "여아", value: "F" });
  const [defaultPremature, setDefaultPremature] = useState({ name: "예정일 출산", value: 0 });
  const [birthDate, setBirthDate] = useState<Date | null>(new Date());
  const [dueDate, setDueDate] = useState<Date | null>(new Date());
  const [openModal, setOpenModal] = useState(false);
  const inputRef = useRef(null);

  const callCreateChildInfo = useMutation(createChild, {
    onSuccess: () => {
      setOpenModal(true);
    },
    onError: error => {
      throw error;
    },
  });

  //   생일 날짜 string으로 변환
  useEffect(() => {
    setChildData({ ...childData, birth_date: moment(birthDate).format("YYYY-MM-DD") });
  }, [birthDate]);

  // 이른둥이 출산일 날짜 string으로 변환
  useEffect(() => {
    setChildData({ ...childData, due_date: moment(dueDate).format("YYYY-MM-DD") });
  }, [dueDate]);

  const handleGenderValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setChildData({ ...childData, gender: value });
  };

  const handlePrematureValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setChildData({ ...childData, premature_flag: Number(value) });
  };

  const handleTypeInformation = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const id = evt.target.id;
    const value = evt.target.value;
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
    } else {
      setChildData({ ...childData, due_date: moment(dueDate).format("YYYY-MM-DD") });
    }
  }, [childData.due_date]);

  useEffect(() => {
    if (childData.premature_flag === 0) {
      setChildData(current => {
        const { due_date, ...rest } = current;
        return rest;
      });
    } else if (childData.premature_flag === 1 && !childData.due_date) {
      setChildData({ ...childData, due_date: moment(childData.due_date).format("YYYY-MM-DD") });
    }
  }, [childData.premature_flag]);

  const handleSubmit = () => {
    console.log(childData);
    callCreateChildInfo.mutate(childData);
  };

  const CustomInput = forwardRef((props: any, ref) => {
    return <ForwardedInput {...props} ref={ref} />;
  });
  return (
    <LayoutDetailPage>
      <PageTitle title={"아이 등록"} />
      <PageLayout>
        <FormWrap>
          <InputTitle>아이 이름</InputTitle>
          <InputBox
            placeholder="이름을 입력해주세요."
            id="childName"
            value={childData.name}
            onChange={handleTypeInformation}
          />

          <InputTitle>아이 성별</InputTitle>
          <CustomRadioButton
            id="childGender"
            type={Genders}
            defaultValue={defaultGender}
            onChangeFunction={(e: React.ChangeEvent<HTMLInputElement>) => handleGenderValue(e)}
          />

          <InputTitle>아이 생년월일</InputTitle>
          <DatePicker
            showYearDropdown
            locale={ko}
            dateFormat="yyyy-MM-dd"
            showPopperArrow={false}
            selected={birthDate}
            customInput={<CustomInput inputRef={inputRef} />}
            onChange={(date: Date | null) => setBirthDate(date)}
          />

          <InputTitle>아이 출산일</InputTitle>
          <CustomRadioButton
            id="childPremeture"
            type={Prematures}
            defaultValue={defaultPremature}
            onChangeFunction={handlePrematureValue}
          />

          {childData.premature_flag === 1 && (
            <>
              <InputTitle>이른둥이 출산일 선택</InputTitle>
              <DatePicker
                showYearDropdown
                locale={ko}
                dateFormat="yyyy-MM-dd"
                showPopperArrow={false}
                selected={dueDate}
                customInput={<CustomInput inputRef={inputRef} />}
                onChange={(date: Date | null) => setDueDate(date)}
              />
            </>
          )}
        </FormWrap>
      </PageLayout>
      <BottomBtnWrap>
        <Button theme={"black"} content={"아이 추가하기"} onClick={handleSubmit} />
      </BottomBtnWrap>

      <CustomModal
        title="저장이 완료됐어요."
        content="수정사항을 저장했어요."
        isOpen={openModal}
        toggleModal={() => navigate(-1)}
        okBtnName="확인"
        okBtnClick={() => navigate(-1)}
      />
    </LayoutDetailPage>
  );
};

export default CreateChild;
