import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { selectedChildInfoState } from "../../../recoil/atom";
import Dday from "../../../utils/Dday";
import { getDate } from "../../../utils/getDateTime";
import { NativeFunction } from "../../../utils/NativeFunction";
import { HomeData } from "../../../utils/type";

interface ChildInfoType {
  childData: HomeData;
}

const ChildInfoWrap = styled.div`
  padding: 11.6rem 2rem 3rem;
  background: url("/images/bg-home.svg") no-repeat 50% 0;
  background-size: 100%;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BirthDateChip = styled.div`
  border-radius: 0.6rem;
  background: #060606;
  padding: 0.5rem 1rem;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 3rem;

  span {
    margin-left: 0.5rem;
  }
`;

const DdayLabel = styled.div`
  margin-top: 2rem;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
`;

const DdayValue = styled.div`
  margin-top: 1rem;

  span:nth-child(1) {
    font-weight: 900;
    font-size: 3.5rem;
    line-height: 2.2rem;
    letter-spacing: -0.04rem;
    color: #0a0a0a;
  }
  span:nth-child(2) {
    font-weight: 600;
    font-size: 2.2rem;
    line-height: 3.2rem;
    letter-spacing: -0.04rem;
    color: #0a0a0a;
    margin-left: 0.3rem;
  }
`;

const ProfileImageWrap = styled.div`
  text-align: right;
  position: relative;

  img:nth-child(1) {
    width: 18.5rem;
    height: 18.5rem;
  }

  img:nth-child(2) {
    width: 2.8rem;
    height: 2.8rem;
    position: absolute;
    right: 0.5rem;
    bottom: 2.5rem;
  }
`;
const UploadImage = styled.img`
  width: 18.5rem;
  height: 18.5rem;
  border-radius: 10rem;
  border: solid 1rem #fff;
  box-shadow: 0px 0.4rem 0.8rem rgba(0, 0, 0, 0.12);
`;

const NoticeWrap = styled.div`
  margin-top: 0.6rem;
`;

const NoticeTitle = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: #5ac4b1;
  margin-left: 0.8rem;
`;

const NoticeDesc = styled.div`
  background: #f6f6f6;
  border-radius: 0.8rem;
  padding: 2rem 2.1rem 2rem 3.5rem;
  margin-top: 0.8rem;

  span {
    display: inline-block;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: -0.04rem;
    color: rgba(10, 10, 10, 0.5);
    list-style-type: disc;
    position: relative;
    margin-bottom: 0.8rem;
    word-break: keep-all;

    &:last-child {
      margin-bottom: 0;
    }

    &:before {
      content: ".";
      font-size: 2rem;
      line-height: 0;
      display: black;
      position: absolute;
      left: -1rem;
      top: 0.2rem;
    }
  }
`;
const ChildInfo: React.FC<ChildInfoType> = ({ childData }) => {
  const { id } = useRecoilValue(selectedChildInfoState);

  return (
    <ChildInfoWrap>
      <FlexBox>
        <div>
          <BirthDateChip>
            탄생일<span>{childData.birth_date && getDate(childData.birth_date)}</span>
          </BirthDateChip>
          <DdayLabel>우리아이 태어난지</DdayLabel>
          <DdayValue>
            <span>{childData.birth_date && Math.abs(Dday(childData.birth_date)) + 1}</span>
            <span>일</span>
          </DdayValue>
        </div>
        {!childData.image && (
          <ProfileImageWrap
            onClick={() => NativeFunction("routeNativeScreen", `/imageUpload/${id}`)}
          >
            <img src="/images/profile-default.svg" alt="프로필 사진" />
            <img src="/images/icon-addbtn.svg" alt="사진 추가하기" />
          </ProfileImageWrap>
        )}
        {childData.image && (
          <ProfileImageWrap
            onClick={() => NativeFunction("routeNativeScreen", `/imageUpload/${id}`)}
          >
            <UploadImage src={childData.image} alt="프로필 사진 테두리" />
          </ProfileImageWrap>
        )}
      </FlexBox>
      <NoticeWrap>
        <NoticeTitle>이 시기에 아이는</NoticeTitle>

        <NoticeDesc>
          {childData.month_level_info.map((item, key) => (
            <span key={key}>{item}</span>
          ))}
        </NoticeDesc>
      </NoticeWrap>
    </ChildInfoWrap>
  );
};

export default ChildInfo;
