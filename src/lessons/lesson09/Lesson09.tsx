import ButtonStyledComponent from '../../components/buttonStyleComponent/ButtonStyleComponent';
import LoginForm from '../../components/loginForm/LoginForm';
import BrotherHood from '../../homeworks/homework08_02/brotherhood/Bratherhood';
import styles from "./lesson09.module.css"


export default function Lesson09() {
    return (
        <div className={styles.container}>
            <h1>Lesson 09</h1>
            <p>Styled components & react modules</p>
            <ButtonStyledComponent />
            {/* <StyledButton>Просто кнопка не компонент</StyledButton> */}
            <LoginForm />
        {/* <Button isGetButton={true} /> */}
        {/* <BrotherHood /> */}
        <BrotherHood />
        </div>
    );
}

// import ButtonStyledComponent, { StyledButton } from '../../components/buttonStyledComponent/ButtonStyledComponent';