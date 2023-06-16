import styled from "styled-components";

interface EmptyBoxPropsType {
  height?: string;
}

const Empty = styled.div`
  width: 100%;
  height: 2.4rem;
`;

const EmptyBox = ({ height }: EmptyBoxPropsType): JSX.Element => {
  return <Empty style={height ? { height } : {}} />;
};

export default EmptyBox;
