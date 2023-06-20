import { useEffect, useState } from "react";

interface buttonProps {
  theme: "black" | "white" | "disabled" | "red";
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

      case "disabled":
        colorPalette = {
          color: "white",
          backgroundColor: "#DCDCDC",
          border: "none",
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
      fontSize: "1.6rem",
      borderRadius: "0.4rem",
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
