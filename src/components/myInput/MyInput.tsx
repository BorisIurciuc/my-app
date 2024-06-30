import styles from "./myInput.module.css";

interface IInputProps {
    placeholder: string;
    type: string;
    label?: string;
    name?: string;
}

function MyInput({ name, type, placeholder, label }: IInputProps) {
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
        />
        </div>
    );
}
export default MyInput;
