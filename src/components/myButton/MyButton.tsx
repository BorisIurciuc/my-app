import { ReactNode } from "react";
import style from './myButton.module.css'
interface IMyButtonProps {
  onClick?: () => void;
  buttonText?: string;
  buttonType: string;
  icon?: ReactNode;
}

function MyButton({ onClick, buttonText, buttonType, icon }: IMyButtonProps) {
  return (
    <button onClick={onClick} className={`${style.button} ${style[buttonType]}`}>
      {icon && <span className={style.icon}>{icon}</span>}
      {buttonText && <span className={style.text}>{buttonText}</span>}
    </button>
  );
}
export default MyButton;
