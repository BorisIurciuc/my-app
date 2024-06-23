import './button.css';

interface IButtonProps {
    onClick: () => void;
    buttonText: string;
    buttonType: string;
}

function Button({onClick, buttonText, buttonType}: IButtonProps) {  

    return (
        <button onClick={onClick} className={`button ${buttonType}`}>
            {buttonText}
        </button>
    );
}
export default Button;
