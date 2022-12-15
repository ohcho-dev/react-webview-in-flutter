import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AlarmBadge from "./AlarmBadge";

const TitleBarWrap = styled.section`
  width: 100%;
  height: 6rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-bottom: 0.05rem solid rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;
const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
const ProfileImageWrap = styled.div`
  width: 3.2rem;
`;
const ChildrenName = styled.div`
  max-width: 19rem;
  height: 1.9rem;
  margin-left: 0.8rem;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ArrowWrap = styled.div`
  width: 0.8rem;
  margin-left: 0.7rem;
`;
const HistoryBackIconWrap = styled.div`
  width: 2.8rem;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-left: 8px;
  }
`;
const ShareBtn = styled.div`
  width: 2.8rem;
`;

const MainTitleBar = () => {
  return (
    <TitleBarWrap>
      <ProfileWrap>
        <ProfileImageWrap>
          <img src="/images/icon-profile-default.svg" width="100%" />
        </ProfileImageWrap>
        <ChildrenName>김나나</ChildrenName>
        <ArrowWrap>
          <img src="/images/icon-arrow-down.svg" width="100%" />
        </ArrowWrap>
      </ProfileWrap>
      <AlarmBadge />
    </TitleBarWrap>
  );
};

interface DetailTitleBarProps {
  useShare?: boolean;
}
export const DetailTitleBar: React.FC<DetailTitleBarProps> = ({ useShare }) => {
  const navigate = useNavigate();
  return (
    <TitleBarWrap>
      <HistoryBackIconWrap onClick={() => navigate(-1)}>
        <img src="/images/icon-back.svg" width="100%" />
      </HistoryBackIconWrap>
      <ButtonWrap>
        {useShare && (
          <ShareBtn>
            <img src="/images/icon-share.svg" width="100%" />
          </ShareBtn>
        )}
      </ButtonWrap>
    </TitleBarWrap>
  );
};

export default MainTitleBar;
