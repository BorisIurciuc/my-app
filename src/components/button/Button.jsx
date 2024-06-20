import './button.css';

function Button({ onClick, buttonText, buttonType }) {  

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
