import './Input.css'

function Input({name, type, placeholder, label}){
    return(
        <div>
            <label htmlFor="" className='labelInput'>{label}:</label>
            <input 
                name={name}
                type={type}
                placeholder={placeholder}
                label={label}
                className='input'
            />
        </div>
    )
}
export default Input;