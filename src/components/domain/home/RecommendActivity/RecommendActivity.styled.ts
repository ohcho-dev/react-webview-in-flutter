import styled from "styled-components";

export const ActivityWrap = styled.div`
  padding: 3.5rem 0;
`;
export const ActivityTitle = styled.div`
  padding: 0 2rem 2.5rem;

  font-weight: 700;
  font-size: 2rem;
  line-height: 2rem;
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
export const ActivityContent = styled.div`
  padding: 0 2rem;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  margin-bottom: 3.5rem;

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

export const ItemWrap = styled.div`
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

export const ImageWrap = styled.div`
  width: 22rem;
  height: 14rem;
  border-radius: 0.8rem;
  border: solid 1px #efefef;

  background: url(${(prop: { image: string }) => prop.image}) no-repeat 50% 50%;
  background-size: cover;
`;
export const ItemTitle = styled.div`
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

export const LinkBanner = styled.div`
  margin: 0 2rem;
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

export const BannerTitle = styled.div`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
`;
export const BannerDesc = styled.div`
  margin-top: 0.2rem;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
`;
