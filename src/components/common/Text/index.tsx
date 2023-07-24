import { ColorLightBlack9Base } from "constants/ldsConstants/global";

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
}

const Text = ({ children, variant, color = ColorLightBlack9Base, style }: TextProps) => {
  const convertedStyle = convertToRem(variant);
  function convertToRem(obj: { [key: string]: number | string }) {
    const remObject: { [key: string]: number | string } = {};
    for (const key in obj) {
      const value = obj[key];

      if (typeof value === "number") {
        remObject[key] = key !== "fontWeight" ? value / 10 + "rem" : value;
      } else {
        remObject[key] = value;
      }
    }
    return remObject;
  }

  return <span style={{ ...convertedStyle, color: color, ...style }}>{children}</span>;
};

export default Text;
