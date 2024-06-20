import './button.css';

interface ButtonProps {
    onClick: () => void;
    buttonText: string;
    buttonType: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, buttonText, buttonType }) => {  

    return (
        <button 
            className={`button ${buttonType}`}  
            onClick={onClick}
        >
            {buttonText}
        </button>
    );
}

export default Button;
