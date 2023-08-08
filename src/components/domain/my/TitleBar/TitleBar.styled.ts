import { TITLE_BAR_HEIGHT_REM } from "constants/size";
import { ColorLightSlate2 } from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const TitleBarWrap = styled.section`
  width: 100%;
  height: ${TITLE_BAR_HEIGHT_REM}rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-bottom: ${(prop: { border?: boolean }) =>
    prop.border ? "0.05rem solid rgba(0, 0, 0, 0.15)" : "0"};
  position: fixed;
  top: -0.1rem;
  left: 0;
  z-index: 30;
  transition: background-color 0.3s ease;
`;

export const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const ProfileImageWrap = styled.div`
  width: 3.2rem;

  img {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 1.6rem;
  }
`;

export const ChildrenName = styled.div`
  max-width: 19rem;
  height: 1.9rem;
  margin: 0rem 0.3rem 0 0.8rem;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ArrowWrap = styled.div`
  margin-left: 0.7rem;

  img {
    width: 0.8rem;
    height: 0.8rem;
  }
`;

export const HistoryBackIconImage = styled.span`
  width: 2.8rem;
  height: 2.8rem;
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-left: 8px;
  }
`;

export const MypageTitleWrap = styled.div`
  width: 100%;
  background: #fff;
`;

export const TitleSection = styled.div`
  padding: 0 2.5rem;
`;

export const ButtonSection = styled.div`
  padding: 0 2rem;
`;
export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
`;

export const GrayButton = styled.div`
  width: 100%;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  background: ${ColorLightSlate2};
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 3.2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
  margin-bottom: 2.2rem;
  display: flex;
  align-items: center;
`;
export const ChildName = styled.span`
  display: inline-block;
  overflow: hidden;
  max-width: 13rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 0.5rem;
`;
export const LoginInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 2.8rem;
    height: 2.8rem;
  }
`;

export const PageTitle = styled.div`
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 3.2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
`;
