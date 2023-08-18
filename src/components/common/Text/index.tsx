import { ColorLightBlack9Base } from "lds-common/src/constants/tokens/global";
import { convertToRem } from "utils/style";

type textObjType = {
  fontFamily: string;
  fontWeight: number;
  lineHeight: number;
  fontSize: number;
  letterSpacing: number;
  paragraphSpacing: number;
  paragraphIndent: string;
  textCase: string;
  textDecoration: string;
};
interface TextProps {
  children: string;
  variant: textObjType;
  color: string;
  style?: React.CSSProperties;
  isEllipsis?: boolean;
  ellipsisRow?: number;
}

const Text = ({
  children,
  variant,
  color = ColorLightBlack9Base,
  isEllipsis,
  ellipsisRow = 1,
  style,
}: TextProps) => {
  const convertedStyle = convertToRem(variant);
  if (isEllipsis) {
    return (
      <span
        style={{
          ...convertedStyle,
          color: color,
          overflow: "hidden",
          width: "100%",
          whiteSpace: ellipsisRow === 1 ? "nowrap" : "normal",
          textOverflow: "ellipsis",
          display: ellipsisRow !== 1 ? "-webkit-box" : "",
          WebkitLineClamp: ellipsisRow !== 1 ? ellipsisRow : "",
          WebkitBoxOrient: ellipsisRow !== 1 ? "vertical" : "horizontal",
          ...style,
        }}
      >
        {children}
      </span>
    );
  }
  return <span style={{ ...convertedStyle, color: color, ...style }}>{children}</span>;
};

export default Text;
