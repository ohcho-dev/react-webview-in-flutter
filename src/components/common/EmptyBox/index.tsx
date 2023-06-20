import * as S from "./EmptyBox.styled";

interface EmptyBoxPropsType {
  height?: string;
}

const EmptyBox = ({ height }: EmptyBoxPropsType): JSX.Element => {
  return <S.Empty style={height ? { height } : {}} />;
};

export default EmptyBox;
