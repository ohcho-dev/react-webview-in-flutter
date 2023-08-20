import * as S from "./EmptyBox.styled";

interface EmptyBoxPropsType {
  height?: string;
  backgroundColor?: string;
}

const EmptyBox = ({ height = "1rem", backgroundColor }: EmptyBoxPropsType): JSX.Element => {
  return <S.Empty style={{ height: height, backgroundColor: backgroundColor }} />;
};

export default EmptyBox;
