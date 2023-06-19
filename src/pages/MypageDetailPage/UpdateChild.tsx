import { ko } from "date-fns/esm/locale";
import dayjs from "dayjs";
import React, { useEffect, useRef, useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { getSelectedChild, updateChild } from "../../apis/childApi";
import Button from "../../components/common/Button";

import CustomModal from "../../components/common/CustomModal";
import { CustomRadioButton } from "../../components/common/CustomRadioButton";
import { queryKeys } from "../../constants/queryKeys";
import LayoutDetailPage from "../../layouts/LayoutDetailPage";
import { childrenListState } from "../../store/atom";
import "react-datepicker/dist/react-datepicker.css";
import { updateChildSuccessedAction } from "../../utils/google-analytics/events/ManagementChildEvent";
import { ForwardedInput } from "./components/DatePickerInput";
import PageTitle from "./components/PageTitle";
import { NativeFunction } from "../../utils/app/NativeFunction";
import { ChildType } from "../../types/common";

const DEFAULT_CHILD_TYPE = {
  id: 0,
  name: "",
  gender: "",
  birth_date: "",
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

const UpdateChild = () => {
  const { childid } = useParams();
  const navigate = useNavigate();
  const [childData, setChildData] = useState<ChildType>(DEFAULT_CHILD_TYPE);

  const [defaultGender, setDefaultGender] = useState({ name: "여아", value: "F" });
  const [defaultPremature, setDefaultPremature] = useState({ name: "예정일 출산", value: 0 });
  const [birthDate, setBirthDate] = useState<Date | null>(new Date());
  const [birthModifiable, setBirthModifiable] = useState(false);
  const [dueDate, setDueDate] = useState<Date | null>(new Date());
  const [openModal, setOpenModal] = useState(false);
  const [openBackModal, setOpenBackModal] = useState(false);
  const [openValidModal, setOpenValidModal] = useState(false);
  const [openSameNameModal, setOpenSameNameModal] = useState(false);
  const [openRejectModal, setOpenRejectModal] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);
  const childList = useRecoilValue(childrenListState);
  const inputRef = useRef(null);
  const { data } = useQuery(queryKeys.updatedChildInfo, () => getSelectedChild(childid));
  const callUpdateChildInfo = useMutation(updateChild, {
    onSuccess: () => {
      NativeFunction("ga4logNativeEventLog", `${updateChildSuccessedAction}`);
      setOpenModal(true);
    },
    onError: error => {
      throw error;
    },
  });

  useEffect(() => {
    if (data.length) {
      setChildData(data[0]);
      setBirthDate(new Date(data[0].birth_date));
      data[0].due_date !== null && setDueDate(new Date(data[0].due_date));
      setDefaultGender(Genders.filter(gender => gender.value === data[0].gender)[0]);
      setDefaultPremature(
        Prematures.filter(premature => premature.value === data[0].premature_flag)[0],
      );
      setBirthModifiable(data[0].birth_modifiable);
    }
  }, [data]);

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
      setDueDate(birthDate);
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

    callUpdateChildInfo.mutate({
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

  const handleBackBtn = () => {
    if (updateStatus) {
      setOpenBackModal(!openBackModal);
    } else {
      navigate(-1);
    }
  };

  return (
    <LayoutDetailPage
      handleBackBtnClick={handleBackBtn}
      bottomBtn
      bottomBtnElement={
        <Button theme={"black"} content={"아이 정보 수정하기"} onClick={handleSubmit} />
      }
    >
      <PageTitle title={"아이 정보 수정"} />
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
            defaultValue={defaultGender}
            onChangeFunction={(e: React.ChangeEvent<HTMLInputElement>) => handleGenderValue(e)}
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
              if (childData.premature_flag) {
                setDueDate(date);
              }
            }}
          />

          <InputTitle>이른둥이 여부</InputTitle>
          <CustomRadioButton
            id="childPremeture"
            type={Prematures}
            defaultValue={defaultPremature}
            modifiable={birthModifiable}
            onChangeFunction={handlePrematureValue}
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
        </FormWrap>
      </PageLayout>
      <CustomModal
        cancelbtn={false}
        title="아이 이름을 입력해주세요."
        isOpen={openValidModal}
        toggleModal={() => {
          setOpenValidModal(false);
        }}
        okBtnName="확인"
      />
      <CustomModal
        cancelbtn={false}
        title="같은 이름의 아이를 등록할 수 없습니다."
        isOpen={openSameNameModal}
        toggleModal={() => {
          setOpenSameNameModal(false);
        }}
        okBtnName="확인"
      />
      <CustomModal
        cancelbtn={false}
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
        cancelbtn={false}
        title="변경할 수 없어요."
        content="진행중인 검사가 있을 경우 생일을 변경할 수 없습니다."
        isOpen={openRejectModal}
        toggleModal={() => setOpenRejectModal(!openRejectModal)}
        okBtnName="확인"
        okBtnClick={() => setOpenRejectModal(!openRejectModal)}
      />

      <CustomModal
        cancelbtn={true}
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
export default UpdateChild;
