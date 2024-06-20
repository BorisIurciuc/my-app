import './myButton.css'

interface IButtonProps {
    name: string;
    type: 'button' | 'submit' | 'reset';}

function MyButton({name, type}: IButtonProps) {
    return(
        <div>
            <button type={type} className='myButton'>{name}</button>
        </div>
    )
}
export default MyButton;