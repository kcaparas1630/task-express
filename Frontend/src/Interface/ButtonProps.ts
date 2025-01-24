import { ReactNode } from "react";
import isDarkMode from "./isDarkMode";

type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps extends isDarkMode {
  name: string;
  type: ButtonType;
  disabled: boolean;
  // optional since type 'submit' works for formik and doesn't need onClick different than type 'button'
  handleClick?: () => void;
  children: ReactNode;
}

export default ButtonProps;