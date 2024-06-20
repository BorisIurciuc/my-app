import './myButton.css'

function MyButton({name, type}) {
    return(
        <div>
            <button type={type} className='myButton'>{name}</button>
        </div>
    )
}
export default MyButton;