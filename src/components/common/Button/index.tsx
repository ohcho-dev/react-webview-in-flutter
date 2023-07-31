import {
  ColorLight1,
  ColorLightBlack4,
  ColorLightBlack7,
  ColorLightBlack9Base,
  ColorLightRed7,
  ColorLightRed9Base,
} from "lds-common/src/constants/tokens/global";
import { useEffect, useState } from "react";

interface buttonProps {
  theme: "black" | "white" | "disabled" | "red" | "warning";
  onClick?: () => void;
  style?: object;
  content: string;
  [rest: string]: any;
}

const Button = (props: buttonProps) => {
  const { theme, onClick, style, content, ...rest } = props;
  const [themeColor, setThemeColor] = useState({});

  useEffect(() => {
    let colorPalette = {};

    switch (theme) {
      case "black":
        colorPalette = {
          color: "white",
          backgroundColor: ColorLightBlack9Base,
          border: "none",
        };
        break;

      case "white":
        colorPalette = {
          color: ColorLightBlack7,
          backgroundColor: "white",
          border: `1px solid ${ColorLightBlack4}`,
        };
        break;

      case "disabled":
        colorPalette = {
          color: "white",
          backgroundColor: "#DCDCDC",
          border: "none",
        };
        break;

      case "warning":
        colorPalette = {
          color: ColorLightRed9Base,
          backgroundColor: ColorLight1,
          border: `1px solid ${ColorLightRed7}`,
        };
        break;

      case "red":
        colorPalette = {
          color: "#FD7473",
          background: "#fff",
          border: "1px solid #FD7473",
        };
        break;
    }

    setThemeColor({
      ...colorPalette,
      width: "100%",
      height: "4.5rem",
      borderRadius: "0.6rem",
      fontSize: "1.6rem",
      fontWeight: 500,
      lineHieght: "2.4rem",
    });
  }, [theme]);

  return (
    <button
      style={{ ...themeColor, ...style }}
      onClick={onClick}
      {...rest}
      disabled={theme === "disabled"}
    >
      {content}
    </button>
  );
};

export default Button;
