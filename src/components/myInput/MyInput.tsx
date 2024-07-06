import styles from "./myInput.module.css";

interface IInputProps {
    placeholder: string;
    type: string;
    label?: string;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
    error?:string;    
}

function MyInput({ name, type, placeholder, label, onChange, value, error }: IInputProps) {
    return (
        <div>
            {label && (
                <label htmlFor={name} className={styles.labelInput}>
                {label}:
                </label>
            )}
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                className={styles.input}
                onChange={onChange}
                value={value}
            />
            {error && <div className={styles.error}>{error}</div>}
        </div>
    );
}
export default MyInput;
