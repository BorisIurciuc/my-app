import Input from "../input/Input";
import MyButton from "../myButton/MyButton";
import './loginForm.css'
function LoginForm() {
    return (
        <div>
            <form type='submit' className="form">
            <h3>Login form</h3>
                <div className="loginForm">
                    <div className="inputForm">
                        <Input name={'name'} type={'text'} placeholder={'your name'} label={'Name'}/>
                        <MyButton name={'Send name'} type={'submit'}/>
                    </div>
                    <div className="inputForm">
                        <Input name={'email'} type={'text'} placeholder={'your email'} label={'Email'}/>
                        <MyButton name={'Send email'} type={'submit'}/>
                    </div>
                    <div className="inputForm">
                        <Input name={'password'} type={'password'} placeholder={'your password'} label={'Password'}/>
                        <MyButton name={'Send password'} type={'submit'}/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;