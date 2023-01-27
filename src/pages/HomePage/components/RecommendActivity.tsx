import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HomeData } from "../../../utils/type";
import UseEmoji from "../../../utils/UseEmoji";
interface HomeDataType {
  childData: HomeData;
}
const ActivityWrap = styled.div`
  padding: 3.5rem 0;
`;
const ActivityTitle = styled.div`
  padding: 0 2rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    margin-left: 0.4rem;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2rem;
    color: #000000;
  }
`;
const ActivityContent = styled.div`
  padding: 0 2rem;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  &::-webkit-scrollbar-thumb {
    display: none; /* Chrome, Safari, Opera*/
  }

  img {
    width: 100%;
  }
`;

const ItemWrap = styled.div`
  display: inline-block;
  width: 22rem;
  margin-right: 1.2rem;

  &:last-child {
    margin-right: 0;
  }

  img {
    border-radius: 0.8rem;
    border: solid 1px #efefef;
  }
`;
const ItemTitle = styled.div`
  margin-top: 1.3rem;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const LinkBanner = styled.div`
  margin: 3.5rem 2rem 0;
  padding: 2.2rem 2rem 2.1rem;
  background: #efefef;
  border-radius: 0.8rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    position: absolute;
    right: 1.5rem;
    top: 0.6rem;
    width: 7.8rem;
  }
`;

const BannerTitle = styled.div`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
`;
const BannerDesc = styled.div`
  margin-top: 0.2rem;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
`;

const RecommendActivity: React.FC<HomeDataType> = ({ childData }) => {
  const navigate = useNavigate();

  return (
    <ActivityWrap>
      <ActivityTitle>
        <UseEmoji emojiName="thumbs-up" />
        <span>이 시기에 도움이 되는 활동</span>
      </ActivityTitle>
      <ActivityContent>
        <>
          {childData.month_level_content.map((item: any) => (
            <ItemWrap key={item.id} onClick={() => window.open(item.url)}>
              <img src={item.image} alt={item.subject} />
              <ItemTitle>{item.subject}</ItemTitle>
            </ItemWrap>
          ))}
        </>
      </ActivityContent>

      <LinkBanner onClick={() => navigate("/program")}>
        <BannerTitle>우리 아이 잘 자라고 있는걸까?</BannerTitle>
        <BannerDesc>발달에 맞는 전문 코칭을 받아보세요.</BannerDesc>
        <img src="/images/banner-home.svg" alt="프로그램 바로가기" />
      </LinkBanner>
    </ActivityWrap>
  );
};

export default RecommendActivity;
