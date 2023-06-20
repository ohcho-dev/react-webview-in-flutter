import styled from "styled-components";

const listStyle = ["#00C7B1", "#9380FF", "#78B9FF", "#FF9999", "#5AC4B1"];

export const Wrap = styled.div`
  padding: 2.5rem 0;
`;

export const GreyBox = styled.div`
  background: #f6f6f6;
  border-radius: 1.2rem;
  padding: ${(prop: { padding?: string }) => prop.padding || "2rem"};
  margin: 0 2rem;
  margin-bottom: ${(prop: { padding?: string; marginBottom?: string }) =>
    prop.marginBottom || "1.2rem"};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 2.8rem;
    height: 2.8rem;
  }
`;

export const Label = styled.span`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
  margin-left: 0.7rem;
`;

export const DDay = styled.span`
  font-weight: 800;
  font-size: 2.6rem;
  line-height: 3.1rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
  margin-top: -0.2rem;
`;

export const DDayLabel = styled.span`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
  margin-left: 0.4rem;
`;

export const NoticeTitle = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
  margin-bottom: 1.6rem;
`;

export const NoticeDesc = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);

  div {
    margin-bottom: 1.2rem;
    display: flex;
    align-items: flex-start;

    &:last-child {
      margin-bottom: 0.5rem;
    }
  }
`;

export const ListStyle = styled.span`
  display: inline-block;
  min-width: 0.6rem;
  min-height: 0.6rem;
  margin-top: 0.6rem;
  border-radius: 0.3rem;
  background-color: ${(prop: { i: number }) => listStyle[prop.i % 5]};
  margin-right: 0.8rem;
`;

export const ActivityWrap = styled.div`
  padding: 3.5rem 0 0;
`;

export const ActivityTitle = styled.div`
  padding: 0 2rem 1.8rem;

  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    margin-left: 0.4rem;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.2rem;
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

export const ImageWrap = styled.img`
  width: 22rem;
  height: 14rem;
  border-radius: 0.8rem;
  border: solid 1px #efefef;
  object-fit: cover;
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
