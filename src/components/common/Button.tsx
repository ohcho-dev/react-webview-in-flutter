import { useEffect, useState } from "react";

interface buttonProps {
  theme: "black" | "white" | "grey";
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
          backgroundColor: "black",
          border: "none",
        };
        break;

      case "white":
        colorPalette = {
          color: "black",
          backgroundColor: "white",
          border: "1px solid #A8A8A8",
        };
        break;

      case "grey":
        colorPalette = {
          color: "white",
          backgroundColor: "#DCDCDC",
          border: "none",
        };
        break;
    }

    setThemeColor({
      ...colorPalette,
      width: "100%",
      height: "50px",
      fontSize: "1.6rem",
      borderRadius: "4px",
    });
  }, [theme]);

  return (
    <button style={{ ...themeColor, ...style }} onClick={onClick} {...rest}>
      {content}
    </button>
  );
};

export default Button;
