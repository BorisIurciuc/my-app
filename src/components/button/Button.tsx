import { ReactNode } from 'react';
import './button.css';

interface IButtonProps {
    onClick: () => void;
    buttonText?: string;
    buttonType: string;
    icon?: ReactNode;
}

function Button({onClick, buttonText, buttonType, icon}: IButtonProps) {  

    return (
        <button onClick={onClick} className={`button ${buttonType}`}>
            {icon && <span className="icon">{icon}</span> }
            {buttonText && <span className='text'>{buttonText}</span>}
        </button>
    );
}
export default Button;
