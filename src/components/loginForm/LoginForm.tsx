import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import Input from '../input/Input';
import styles from './loginForm.module.css'

function LoginForm() {
    const navigate = useNavigate()
    navigate('/')

    return (
        <div className={styles.form}>
            <Input type={'email'} placeholder={'Type your email'} label={'Email'} />
            <Input type={'password'} placeholder={'Type your password'} label={'Password'} />
            <Button />
        </div>
    );
}

export default LoginForm;
