import { FormEvent } from 'react';
import styles from './button.module.css'

//добавили interface props
interface IButtonProps {
  isGetButton?: boolean;
  buttonText?: string;            
  onButtonClick?: () => void;      
  buttonType?: 'button' | 'submit' | 'reset';
  onSubmit?:(e: FormEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}
function Button({ 
  buttonText = 'push', 
  // isGetButton = false, 
  onButtonClick, 
  onSubmit, 
  buttonType = 'button', 
  disabled = true
}: IButtonProps
){

  return (
    <button
      type={buttonType}
      onSubmit={onSubmit}
      onClick={onButtonClick}
      // className={`${styles.button} ${isGetButton ? styles.buttonDanger : styles.buttonPrimary}`}
      className={`${styles.button}  ${disabled ? styles.buttonDisabled : styles.buttonActiv} `}
    >
      {buttonText}
    </button>
  );
}
export default Button;

