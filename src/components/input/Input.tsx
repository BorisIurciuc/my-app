import './Input.css'

interface IInputProps {
    placeholder: string;
    type: string;
    label?: string;
    name?: string;
}

function Input({ name, type, placeholder, label }: IInputProps) {
    return (
        <div>
            {label && <label htmlFor={name} className='labelInput'>{label}:</label>}
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                className='input'
            />
        </div>
    );
}
export default Input;
